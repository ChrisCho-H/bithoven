//! Path-sensitive signature-necessity analysis.
//!
//! This module enforces one invariant over the whole contract:
//!
//! > No execution path may succeed unless at least one `checksig` on that path
//! > returned true.
//!
//! Bithoven has no loops or recursion, and `check_flow` already rejects any
//! statement following an `if`/`else` block, so a statement list is a straight
//! sequence optionally terminated by one `if`/`else`, whose blocks recurse the
//! same way. We enumerate every terminating path, translate its success
//! condition into a boolean [`Formula`] over `Sig` atoms (one per `checksig`
//! occurrence) and `Free` atoms (attacker-controlled witness values), then ask
//! whether that formula is satisfiable with every `Sig` atom pinned to `false`.
//! If it is, the path can succeed without a valid signature and the program is
//! rejected.

use std::collections::HashMap;

use crate::ast::*;
use crate::source::Locatable;

/// Upper bound on the number of `Free` (attacker-controlled) atoms a single path
/// may contain in the **security** pass. Satisfiability there is decided by
/// brute force over all `2^n_free` assignments of the `Free` atoms (the `Sig`
/// atoms are pinned to `false`, so they are *not* enumerated), giving a per-path
/// cost of `2^min(n_free, MAX_FREE_ATOMS)`. The search space is bounded to keep
/// the analysis tractable; a path exceeding this limit is rejected as
/// unverifiable rather than silently accepted. This is the bound the paper
/// calls `B`.
pub const MAX_FREE_ATOMS: usize = 20;

/// Number of `Sig` atoms the **liveness** pass is additionally willing to
/// enumerate on top of the free-atom budget. The liveness (satisfiable-at-all)
/// query ranges over *both* atom kinds — `2^(n_sig + n_free)` assignments —
/// because it must find *any* satisfying assignment, so unlike the security
/// pass it cannot pin the signature atoms. This constant makes the gap between
/// the two bounds explicit and principled: the liveness bound exceeds the
/// security bound by exactly the number of signature atoms we are prepared to
/// enumerate.
const MAX_ENUMERATED_SIGS: usize = 2;

/// Upper bound on the total number of atoms (`Sig` + `Free`) considered when
/// deciding whether a path is dead, derived from the two bounds above so the
/// relationship a reviewer can follow is `MAX_TOTAL_ATOMS = MAX_FREE_ATOMS +
/// MAX_ENUMERATED_SIGS` (= 22). The liveness pass counts sig+free while the
/// security pass counts free only, which is why this may exceed
/// [`MAX_FREE_ATOMS`].
///
/// Unlike [`MAX_FREE_ATOMS`], exceeding this bound does **not** reject the
/// program. Liveness is defect detection, not a safety guarantee: failing to
/// prove a path dead is a missed diagnostic, whereas rejecting a live contract
/// because it was too complex to analyse would be a false positive on a
/// perfectly good program.
const MAX_TOTAL_ATOMS: usize = MAX_FREE_ATOMS + MAX_ENUMERATED_SIGS;

// Both brute-force loops evaluate `1u64 << k`, which is undefined behaviour for
// `k >= 64` and overflows the `u64` iteration space well before that. Guard at
// compile time that both bounds stay comfortably below 63 so the shifts are
// always well-defined; the runtime guards below never allow a shift past these
// bounds.
const _: () = assert!(MAX_FREE_ATOMS < 63);
const _: () = assert!(MAX_TOTAL_ATOMS < 63);

/// A boolean formula describing the success condition of a single execution path.
#[derive(Debug, Clone)]
enum Formula {
    Const(bool),
    /// One per `CheckSigExpression` occurrence, keyed by `Location`.
    Sig(usize),
    /// Attacker-controlled: derived from witness input.
    Free(usize),
    Not(Box<Formula>),
    And(Box<Formula>, Box<Formula>),
    Or(Box<Formula>, Box<Formula>),
}

/// A single terminating execution path collected from the AST.
struct Path {
    /// Branch conditions taken, each tagged with the polarity of the side taken
    /// (`true` on the `if` side, `false` on the `else` side).
    conditions: Vec<(Expression, bool)>,
    /// Every `VerifyStatement` expression on the path.
    verifies: Vec<Expression>,
    /// The terminal `ExpressionStatement` (the `return`) expression.
    ret: Expression,
    /// The `Location` of the terminal `return`.
    ret_loc: Location,
}

/// Translates expressions into [`Formula`]s, allocating one `Sig` atom per
/// `checksig` occurrence (keyed by `Location`) and a fresh `Free` atom for any
/// attacker-controlled value.
struct Translator {
    sig_map: HashMap<Location, usize>,
    sig_counter: usize,
    free_counter: usize,
}

impl Translator {
    fn new() -> Self {
        Translator {
            sig_map: HashMap::new(),
            sig_counter: 0,
            free_counter: 0,
        }
    }

    fn sig_for(&mut self, loc: &Location) -> usize {
        if let Some(i) = self.sig_map.get(loc) {
            return *i;
        }
        let i = self.sig_counter;
        self.sig_counter += 1;
        self.sig_map.insert(loc.clone(), i);
        i
    }

    fn fresh_free(&mut self) -> usize {
        let i = self.free_counter;
        self.free_counter += 1;
        i
    }

    /// Translate an expression into a boolean formula.
    ///
    /// # Accepted normal form
    ///
    /// This is the single point that decides what the necessity analysis can
    /// reason about *exactly*. The following expression shapes are modeled
    /// precisely, so a `checksig` inside them can genuinely gate acceptance
    /// (i.e. the path can be *accepted* as authenticated):
    ///
    ///   * a bare `checksig(..)` — single- or multi-sig — as one `Sig` atom;
    ///   * `!e` where `e` is modeled (logical negation, `UnaryMathOp::Not`);
    ///   * `e == true`, `e == false`, `e != true`, `e != false` where the other
    ///     side is modeled (the boolean-literal-comparison arm);
    ///   * `&&` / `||` of modeled sub-expressions;
    ///   * boolean/number/string *literals* (folded to a `Const`);
    ///   * (in [`enumerate`]) locktimes, which contribute `true`.
    ///
    /// # Everything else is conservatively abstracted
    ///
    /// Every other shape — `checksig(..) == checksig(..)`, `len(sig) == 72`,
    /// `sha256(x) == <h>`, any arithmetic on a `checksig` result such as
    /// `(checksig(..) + 1) >= 1`, comparisons other than against a boolean
    /// literal, `min`/`max`, etc. — falls to the fallback below and becomes a
    /// fresh `Free` atom (or a `Const` if it is literal-only). A `Free` atom is
    /// attacker-controlled and may be set `true`, so any path whose success
    /// condition reduces to `Free` alone is satisfiable with every `Sig` pinned
    /// to `false` and is therefore **rejected**: such a form can never by
    /// itself constitute an authenticated path.
    ///
    /// This makes the analysis *sound* — it over-approximates attacker power
    /// and never accepts an unauthenticated path — at the cost of being able to
    /// accept only the narrow normal form above. Anything the abstraction
    /// cannot model exactly (including a `checksig` absorbed into a `Free`
    /// atom) is conservatively rejected rather than trusted.
    fn translate(&mut self, e: &Expression) -> Formula {
        match e {
            // A checksig yields exactly one Sig atom regardless of whether its
            // factor is single- or multi-sig. An m-of-n check is a single atom.
            Expression::CheckSigExpression { loc, .. } => Formula::Sig(self.sig_for(loc)),
            Expression::BooleanLiteral(_, b) => Formula::Const(*b),
            Expression::NumberLiteral(_, n) => Formula::Const(*n != 0),
            Expression::StringLiteral(_, s) => Formula::Const(!s.is_empty()),
            Expression::Variable(_, _) => Formula::Free(self.fresh_free()),
            Expression::UnaryMathExpression { operand, op, .. } if *op == UnaryMathOp::Not => {
                Formula::Not(Box::new(self.translate(operand)))
            }
            Expression::LogicalExpression { lhs, op, rhs, .. } => {
                let l = Box::new(self.translate(lhs));
                let r = Box::new(self.translate(rhs));
                match op {
                    BinaryLogicalOp::BoolAnd => Formula::And(l, r),
                    BinaryLogicalOp::BoolOr => Formula::Or(l, r),
                }
            }
            Expression::CompareExpression { lhs, op, rhs, .. }
                if matches!(op, BinaryCompareOp::Equal | BinaryCompareOp::NotEqual)
                    && (is_bool_literal(lhs).is_some() || is_bool_literal(rhs).is_some()) =>
            {
                // Handle the boolean literal on either side.
                let (other, b) = if let Some(b) = is_bool_literal(rhs) {
                    (lhs.as_ref(), b)
                } else {
                    (rhs.as_ref(), is_bool_literal(lhs).unwrap())
                };
                let f = self.translate(other);
                // Equal+true / NotEqual+false => f ; Equal+false / NotEqual+true => !f
                let positive = match op {
                    BinaryCompareOp::Equal => b,
                    BinaryCompareOp::NotEqual => !b,
                    _ => unreachable!(),
                };
                if positive {
                    f
                } else {
                    Formula::Not(Box::new(f))
                }
            }
            // Fallback rule for any expression not matched above (other
            // comparisons, arithmetic, len, sha256, ripemd160, max/min):
            //   * if its subtree contains no checksig and no variable, fold it
            //     to a Const by evaluating the literals;
            //   * otherwise emit a fresh Free atom.
            // This is deliberately conservative: it grants the attacker full
            // control of any value the translator cannot reason about
            // structurally, including anything derived from a checksig result
            // through arithmetic. Over-approximating attacker power produces
            // false positives, never false negatives.
            _ => {
                if !contains_checksig(e) && !contains_variable(e) {
                    if let Some(b) = eval_bool(e) {
                        return Formula::Const(b);
                    }
                }
                Formula::Free(self.fresh_free())
            }
        }
    }

    /// Build the success formula for a whole path:
    ///   φ = AND(branch conditions, negated where the else side was taken)
    ///       AND (every verify expression on the path)
    ///       AND (the return expression)
    fn path_formula(&mut self, path: &Path) -> Formula {
        let mut f = Formula::Const(true);
        for (cond, polarity) in &path.conditions {
            let cf = self.translate(cond);
            let cf = if *polarity {
                cf
            } else {
                Formula::Not(Box::new(cf))
            };
            f = Formula::And(Box::new(f), Box::new(cf));
        }
        for v in &path.verifies {
            let vf = self.translate(v);
            f = Formula::And(Box::new(f), Box::new(vf));
        }
        let rf = self.translate(&path.ret);
        Formula::And(Box::new(f), Box::new(rf))
    }
}

fn is_bool_literal(e: &Expression) -> Option<bool> {
    match e {
        Expression::BooleanLiteral(_, b) => Some(*b),
        _ => None,
    }
}

/// Best-effort evaluation of a literal-only integer expression. Returns `None`
/// for anything that cannot be reduced to an integer purely from literals
/// (strings, crypto hashes, byte length, variables, checksig).
fn eval_int(e: &Expression) -> Option<i64> {
    match e {
        Expression::NumberLiteral(_, n) => Some(*n),
        Expression::BooleanLiteral(_, b) => Some(if *b { 1 } else { 0 }),
        Expression::UnaryMathExpression { operand, op, .. } => {
            let v = eval_int(operand)?;
            Some(match op {
                UnaryMathOp::Add => v + 1,           // OP_1ADD
                UnaryMathOp::Sub => v - 1,           // OP_1SUB
                UnaryMathOp::Negate => -v,           // OP_NEGATE
                UnaryMathOp::Abs => v.abs(),         // OP_ABS
                UnaryMathOp::Not => (v == 0) as i64, // OP_NOT
            })
        }
        Expression::BinaryMathExpression { lhs, op, rhs, .. } => {
            let a = eval_int(lhs)?;
            let b = eval_int(rhs)?;
            Some(match op {
                BinaryMathOp::Add => a + b,
                BinaryMathOp::Sub => a - b,
                BinaryMathOp::Max => a.max(b),
                BinaryMathOp::Min => a.min(b),
            })
        }
        Expression::CompareExpression { lhs, op, rhs, .. } => {
            let a = eval_int(lhs)?;
            let b = eval_int(rhs)?;
            let r = match op {
                BinaryCompareOp::Equal | BinaryCompareOp::NumEqual => a == b,
                BinaryCompareOp::NotEqual | BinaryCompareOp::NumNotEqual => a != b,
                BinaryCompareOp::Greater => a > b,
                BinaryCompareOp::GreaterOrEqual => a >= b,
                BinaryCompareOp::Less => a < b,
                BinaryCompareOp::LessOrEqual => a <= b,
            };
            Some(r as i64)
        }
        Expression::LogicalExpression { lhs, op, rhs, .. } => {
            let a = eval_int(lhs)?;
            let b = eval_int(rhs)?;
            let r = match op {
                BinaryLogicalOp::BoolAnd => a != 0 && b != 0,
                BinaryLogicalOp::BoolOr => a != 0 || b != 0,
            };
            Some(r as i64)
        }
        _ => None,
    }
}

/// Best-effort evaluation of a literal-only expression in a boolean context.
fn eval_bool(e: &Expression) -> Option<bool> {
    match e {
        Expression::StringLiteral(_, s) => Some(!s.is_empty()),
        _ => eval_int(e).map(|v| v != 0),
    }
}

/// Does the expression subtree contain a `CheckSigExpression`?
fn contains_checksig(e: &Expression) -> bool {
    match e {
        Expression::CheckSigExpression { .. } => true,
        Expression::Variable(..)
        | Expression::NumberLiteral(..)
        | Expression::BooleanLiteral(..)
        | Expression::StringLiteral(..) => false,
        Expression::LogicalExpression { lhs, rhs, .. }
        | Expression::CompareExpression { lhs, rhs, .. }
        | Expression::BinaryMathExpression { lhs, rhs, .. } => {
            contains_checksig(lhs) || contains_checksig(rhs)
        }
        Expression::UnaryMathExpression { operand, .. }
        | Expression::UnaryCryptoExpression { operand, .. }
        | Expression::ByteExpression { operand, .. } => contains_checksig(operand),
    }
}

/// Does the expression subtree contain a `Variable`?
fn contains_variable(e: &Expression) -> bool {
    match e {
        Expression::Variable(..) => true,
        Expression::CheckSigExpression { .. }
        | Expression::NumberLiteral(..)
        | Expression::BooleanLiteral(..)
        | Expression::StringLiteral(..) => false,
        Expression::LogicalExpression { lhs, rhs, .. }
        | Expression::CompareExpression { lhs, rhs, .. }
        | Expression::BinaryMathExpression { lhs, rhs, .. } => {
            contains_variable(lhs) || contains_variable(rhs)
        }
        Expression::UnaryMathExpression { operand, .. }
        | Expression::UnaryCryptoExpression { operand, .. }
        | Expression::ByteExpression { operand, .. } => contains_variable(operand),
    }
}

/// Enumerate every terminating path through a statement list.
///
/// `LocktimeStatement`s contribute nothing — an attacker can always wait, so
/// they are modelled as `true` and simply skipped.
fn enumerate(
    stmts: &[Statement],
    conditions: Vec<(Expression, bool)>,
    mut verifies: Vec<Expression>,
) -> Vec<Path> {
    for stmt in stmts {
        match stmt {
            Statement::LocktimeStatement { .. } => {}
            Statement::VerifyStatement(_, e) => verifies.push(e.clone()),
            Statement::ExpressionStatement(loc, e) => {
                // Terminal return: emit exactly one path.
                return vec![Path {
                    conditions,
                    verifies,
                    ret: e.clone(),
                    ret_loc: loc.clone(),
                }];
            }
            Statement::IfStatement {
                condition_expr,
                if_block,
                else_block,
                ..
            } => {
                // A terminating if/else. Each block recurses the same way.
                let mut out = Vec::new();
                let mut if_conds = conditions.clone();
                if_conds.push((condition_expr.clone(), true));
                out.extend(enumerate(if_block, if_conds, verifies.clone()));
                if let Some(eb) = else_block {
                    let mut else_conds = conditions.clone();
                    else_conds.push((condition_expr.clone(), false));
                    out.extend(enumerate(eb, else_conds, verifies.clone()));
                }
                return out;
            }
        }
    }
    // No terminal statement (e.g. an empty block). check_flow guarantees this
    // does not happen for a well-formed program, so there is no path to model.
    Vec::new()
}

/// Evaluate a formula under explicit assignments for both atom kinds.
fn eval_formula(f: &Formula, sigs: &[bool], frees: &[bool]) -> bool {
    match f {
        Formula::Const(b) => *b,
        Formula::Sig(i) => sigs[*i],
        Formula::Free(j) => frees[*j],
        Formula::Not(a) => !eval_formula(a, sigs, frees),
        Formula::And(a, b) => eval_formula(a, sigs, frees) && eval_formula(b, sigs, frees),
        Formula::Or(a, b) => eval_formula(a, sigs, frees) || eval_formula(b, sigs, frees),
    }
}

/// Security query: is `f` satisfiable with every `Sig` atom pinned to `false`?
///
/// If it is, the path can succeed without any valid signature.
///
/// # Safety of the shift
///
/// The `1u64 << n_free` below is undefined behaviour for `n_free >= 64`. The
/// sole caller rejects any path with `n_free > MAX_FREE_ATOMS` before reaching
/// here, and we additionally hard-guard at the top of this function so the shift
/// is safe even in release builds and independent of caller discipline (the
/// `debug_assert` documents the invariant; the `if` enforces it unconditionally).
/// `n_sig` is irrelevant to the bound: the signature atoms are pinned to `false`
/// and are not enumerated.
fn satisfiable_without_signatures(f: &Formula, n_sig: usize, n_free: usize) -> bool {
    debug_assert!(
        n_free <= MAX_FREE_ATOMS,
        "security pass invoked with {} free atoms, exceeding MAX_FREE_ATOMS ({})",
        n_free,
        MAX_FREE_ATOMS
    );
    // Hard guard: never shift past the bound, even in release builds. A path
    // this large is caller-rejected before we get here; treat any leak
    // defensively as "could succeed without signatures" (the conservative,
    // safe answer that leads to rejection) rather than shifting out of range.
    if n_free > MAX_FREE_ATOMS {
        return true;
    }
    let sigs = vec![false; n_sig];
    let mut frees = vec![false; n_free];
    for mask in 0u64..(1u64 << n_free) {
        for (j, slot) in frees.iter_mut().enumerate() {
            *slot = (mask >> j) & 1 == 1;
        }
        if eval_formula(f, &sigs, &frees) {
            return true;
        }
    }
    false
}

/// Liveness query: is `f` satisfiable under ANY assignment of both atom kinds?
///
/// If not, the path can never succeed — the contract contains logic that is
/// impossible to satisfy (the `never-true` defect class).
///
/// This direction has no false positives. The `Free` abstraction replaces each
/// value the translator cannot model with an unconstrained boolean, so the
/// abstract formula has at least as many satisfying assignments as the concrete
/// program does. If the abstraction is unsatisfiable, the real path is dead too.
///
/// # Safety of the shift
///
/// The `1u64 << total` below is undefined behaviour for `total >= 64`. The sole
/// caller guards this with `n_sig + n_free > MAX_TOTAL_ATOMS` in the left
/// operand of a short-circuiting `||`, but `debug_assert` compiles out in
/// release builds, so we ALSO hard-guard here: a path we cannot decide is
/// treated as possibly-live (`true`), which is exactly the semantics the caller
/// wants for an undecidable path. This makes the function safe on its own,
/// independent of the caller's short-circuit order.
fn satisfiable_at_all(f: &Formula, n_sig: usize, n_free: usize) -> bool {
    let total = n_sig + n_free;
    debug_assert!(
        total <= MAX_TOTAL_ATOMS,
        "liveness pass invoked with {} atoms, exceeding MAX_TOTAL_ATOMS ({})",
        total,
        MAX_TOTAL_ATOMS
    );
    // Hard guard (release-safe): if a path is too large to decide, report it as
    // possibly-live rather than shifting `1u64 << total` out of range. Reporting
    // "live" for an undecidable path is the intended behaviour — it suppresses
    // the dead-path diagnostic rather than emitting a false positive.
    if total > MAX_TOTAL_ATOMS {
        return true;
    }
    let mut sigs = vec![false; n_sig];
    let mut frees = vec![false; n_free];
    for mask in 0u64..(1u64 << total) {
        for (i, slot) in sigs.iter_mut().enumerate() {
            *slot = (mask >> i) & 1 == 1;
        }
        for (j, slot) in frees.iter_mut().enumerate() {
            *slot = (mask >> (n_sig + j)) & 1 == 1;
        }
        if eval_formula(f, &sigs, &frees) {
            return true;
        }
    }
    false
}

/// Does any expression on the path (branch conditions, verifies, or return)
/// syntactically contain a `checksig`? This selects the error kind: a path that
/// mentions a signature check that fails to gate the spend is `UselessSig`,
/// whereas a path with no signature check at all is `NoSigRequired`.
fn path_has_checksig(path: &Path) -> bool {
    path.conditions.iter().any(|(c, _)| contains_checksig(c))
        || path.verifies.iter().any(contains_checksig)
        || contains_checksig(&path.ret)
}

/// Human-readable description of the branch conditions taken on a path.
fn describe_path(path: &Path) -> String {
    if path.conditions.is_empty() {
        return "the top-level path".to_string();
    }
    let parts: Vec<String> = path
        .conditions
        .iter()
        .map(|(c, polarity)| {
            let loc = c.clone().loc();
            format!("if@line{}={}", loc.line, polarity)
        })
        .collect();
    format!("path [{}]", parts.join(", "))
}

/// Count the number of terminating spending paths in a statement list.
///
/// This is the single source of truth for `|Π(P)|`: it reuses the same path
/// enumeration the necessity analysis performs, so the well-formedness check in
/// `analyze` (condition w4: `n = |Π(P)| = k+1`) and the security analysis can
/// never disagree about how many paths a contract has. A program with `k`
/// conditionals in the paper's well-formed shape has `k+1` paths.
pub fn count_paths(ast: &Vec<Statement>) -> usize {
    enumerate(ast, Vec::new(), Vec::new()).len()
}

/// The `beta` of the cost model for every terminating path, in enumeration
/// order: the free atoms the security pass would enumerate `2^beta` assignments
/// over. It reuses the very same enumeration and translation as
/// [`check_necessity`], so the counts are by construction the analysed ones.
pub fn path_free_atoms(ast: &Vec<Statement>) -> Vec<usize> {
    enumerate(ast, Vec::new(), Vec::new())
        .iter()
        .map(|path| {
            let mut translator = Translator::new();
            let _ = translator.path_formula(path);
            translator.free_counter
        })
        .collect()
}

/// Enforce the signature-necessity invariant across all execution paths, then
/// report any path that can never succeed.
pub fn check_necessity(ast: &Vec<Statement>) -> Result<(), CompileError> {
    let paths = enumerate(ast, Vec::new(), Vec::new());

    // Translate each path once; both passes reuse the formulas.
    let mut compiled: Vec<(&Path, Formula, usize, usize)> = Vec::new();
    for path in &paths {
        let mut translator = Translator::new();
        let formula = translator.path_formula(path);
        compiled.push((
            path,
            formula,
            translator.sig_counter,
            translator.free_counter,
        ));
    }

    // ---- Pass 1: security -------------------------------------------------
    // No execution path may succeed unless at least one checksig returned true.
    for (path, formula, n_sig, n_free) in &compiled {
        // Bound the brute-force search. A path with more Free atoms than the
        // limit is treated as unverifiable and rejected.
        if *n_free > MAX_FREE_ATOMS {
            return Err(CompileError {
                loc: path.ret_loc.clone(),
                kind: ErrorKind::NoSigRequired(format!(
                    "{} has more than {} attacker-controlled inputs; it is too complex to verify that a signature is required.",
                    describe_path(path),
                    MAX_FREE_ATOMS,
                )),
            });
        }

        if satisfiable_without_signatures(formula, *n_sig, *n_free) {
            let desc = describe_path(path);
            let kind = if path_has_checksig(path) {
                ErrorKind::UselessSig(format!(
                    "A checksig is present on {} but it does not gate the spend: the return at line {}:{} can succeed without a valid signature.",
                    desc, path.ret_loc.line, path.ret_loc.column,
                ))
            } else {
                ErrorKind::NoSigRequired(format!(
                    "No signature check gates {}: the return at line {}:{} can succeed without any signature.",
                    desc, path.ret_loc.line, path.ret_loc.column,
                ))
            };
            return Err(CompileError {
                loc: path.ret_loc.clone(),
                kind,
            });
        }
    }

    // ---- Pass 2: liveness -------------------------------------------------
    // A single unsatisfiable path is NOT a defect: `else { return false; }` is
    // the ordinary way to express a conditional that succeeds on only one side,
    // and it is how Miniscript's and_n / l: / u: wrappers compile. The defect is
    // a contract in which EVERY path is unsatisfiable — such an output can never
    // be spent by anyone, which is the `never-true` class in the fault model.
    //
    // A path we cannot decide (more atoms than the bound) counts as
    // possibly-live, so an undecidable path suppresses the diagnostic rather
    // than triggering it.
    //
    // `satisfiable_at_all` also hard-guards `total > MAX_TOTAL_ATOMS` internally
    // (returning `true`, i.e. possibly-live), so correctness no longer depends
    // on the short-circuit order of the `||` below; the explicit left operand is
    // retained so the intent is obvious at the call site.
    let any_live_or_undecided = compiled.iter().any(|(_, formula, n_sig, n_free)| {
        n_sig + n_free > MAX_TOTAL_ATOMS || satisfiable_at_all(formula, *n_sig, *n_free)
    });

    if !compiled.is_empty() && !any_live_or_undecided {
        return Err(CompileError {
            loc: compiled[0].0.ret_loc.clone(),
            kind: ErrorKind::DeadPath(
                "No execution path in this contract can succeed: every path has \
                 unsatisfiable conditions, so any funds sent to this output would \
                 be permanently unspendable."
                    .to_string(),
            ),
        });
    }

    Ok(())
}

#[cfg(test)]
mod c2_bound_tests {
    //! C2 — brute-force bound stress tests. These exercise the security and
    //! liveness passes near/over `MAX_FREE_ATOMS` and `MAX_TOTAL_ATOMS` and
    //! confirm there is no `1u64 << k` overflow or panic and that every verdict
    //! is well defined.
    use super::*;

    fn l(n: usize) -> Location {
        Location {
            start: n,
            end: n,
            line: 1,
            column: n,
        }
    }

    fn checksig_at(n: usize) -> Expression {
        // Only the `loc` matters to `Translator::translate` (it keys `Sig`
        // atoms by location); the operand contents are irrelevant here.
        Expression::CheckSigExpression {
            loc: l(n),
            op: CheckSigOp::CheckSig,
            operand: Box::new(Factor::SingleSigFactor {
                loc: l(n),
                sig: Box::new(Expression::Variable(l(n), Identifier("s".to_string()))),
                pubkey: Box::new(Expression::StringLiteral(l(n), "pk".to_string())),
            }),
        }
    }

    fn free_var(n: usize) -> Expression {
        // Each Variable occurrence yields a fresh `Free` atom.
        Expression::Variable(l(n), Identifier("v".to_string()))
    }

    fn and(a: Expression, b: Expression) -> Expression {
        Expression::LogicalExpression {
            loc: l(0),
            lhs: Box::new(a),
            op: BinaryLogicalOp::BoolAnd,
            rhs: Box::new(b),
        }
    }

    fn or(a: Expression, b: Expression) -> Expression {
        Expression::LogicalExpression {
            loc: l(0),
            lhs: Box::new(a),
            op: BinaryLogicalOp::BoolOr,
            rhs: Box::new(b),
        }
    }

    fn ret(e: Expression) -> Vec<Statement> {
        vec![Statement::ExpressionStatement(l(999), e)]
    }

    /// 21 signature atoms, 0 free atoms. The security pass shifts over
    /// `n_free = 0` only (sigs are pinned), so `n_sig` never enters a shift; the
    /// liveness pass shifts over `total = 21 <= MAX_TOTAL_ATOMS`. Must not
    /// overflow/panic and must accept (a conjunction of signatures is a genuine
    /// gate that is live).
    #[test]
    fn c2_many_sig_atoms_no_overflow() {
        let mut e = checksig_at(0);
        for i in 1..21 {
            e = and(e, checksig_at(i));
        }
        let ast = ret(e);
        assert!(
            check_necessity(&ast).is_ok(),
            "21-sig conjunction must be accepted without overflow/panic"
        );
    }

    /// A path with more than `MAX_FREE_ATOMS` free atoms is rejected as
    /// unverifiable in the security pass. No checksig on the path => the split
    /// selects `NoSigRequired`.
    #[test]
    fn c2_exceeds_max_free_atoms_rejected_too_complex() {
        let mut e = free_var(0);
        for i in 1..21 {
            // 21 distinct free atoms > MAX_FREE_ATOMS (20).
            e = or(e, free_var(i));
        }
        let ast = ret(e);
        match check_necessity(&ast) {
            Err(CompileError {
                kind: ErrorKind::NoSigRequired(_),
                ..
            }) => {}
            other => panic!("expected NoSigRequired (too complex), got {:?}", other),
        }
    }

    /// A single unsatisfiable path with more than `MAX_TOTAL_ATOMS` atoms must
    /// be treated as possibly-live (undecided), i.e. it must NOT be flagged
    /// `DeadPath`. Here the return is `checksig_0 && .. && checksig_22 && false`
    /// (23 sig atoms, formula unsatisfiable). Because `total = 23 >
    /// MAX_TOTAL_ATOMS`, the liveness pass short-circuits to "undecided" and
    /// suppresses the diagnostic.
    #[test]
    fn c2_exceeds_max_total_atoms_not_dead_path() {
        let mut e = checksig_at(0);
        for i in 1..23 {
            e = and(e, checksig_at(i));
        }
        e = and(e, Expression::BooleanLiteral(l(0), false));
        let ast = ret(e);
        assert!(
            check_necessity(&ast).is_ok(),
            "a >MAX_TOTAL_ATOMS unsatisfiable path must be undecided (not DeadPath)"
        );
    }

    /// Control for the test above: the same unsatisfiable shape but small
    /// enough to decide (`total <= MAX_TOTAL_ATOMS`) IS flagged `DeadPath`.
    #[test]
    fn c2_small_unsatisfiable_path_is_dead_path() {
        let e = and(checksig_at(0), Expression::BooleanLiteral(l(0), false));
        let ast = ret(e);
        match check_necessity(&ast) {
            Err(CompileError {
                kind: ErrorKind::DeadPath(_),
                ..
            }) => {}
            other => panic!("expected DeadPath, got {:?}", other),
        }
    }

    /// Both bounds hit exactly at their maximum on one path: 2 sig atoms and 20
    /// free atoms => security shift `2^20` (== MAX_FREE_ATOMS), liveness shift
    /// `2^22` (== MAX_TOTAL_ATOMS). Must produce a defined verdict with no
    /// overflow/panic.
    #[test]
    fn c2_exact_bounds_no_overflow() {
        let mut frees = free_var(100);
        for i in 101..120 {
            frees = or(frees, free_var(i)); // 20 free atoms total
        }
        // Two signature atoms conjoined with the free disjunction.
        let e = and(and(checksig_at(0), checksig_at(1)), frees);
        let ast = ret(e);
        // Security: with sigs pinned false the leading conjunction is false, so
        // the path is unsatisfiable-without-signatures and passes. Liveness:
        // satisfiable when everything is true, so it is live. Verdict: accepted.
        assert!(
            check_necessity(&ast).is_ok(),
            "exact-bound path must yield a defined verdict without overflow"
        );
    }
}

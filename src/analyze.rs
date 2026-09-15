use std::collections::HashMap;

use crate::ast::*;
use crate::source::*;

/// Consensus limit on the size of a single stack element, and therefore on the
/// data a single push may carry. It is the bound the paper's **T-Str** premise
/// `|str| <= 520` states.
pub const MAX_SCRIPT_ELEMENT_SIZE: usize = 520;

/// A Scope holds all the contextual information for a single block of code.
#[derive(Debug, Clone)]
pub struct Scope {
    /// The symbol table containing all variables declared in *this specific scope*.
    pub symbol_table: HashMap<String, Symbol>,

    /// What kind of scope is this? (Global, a conditional branch, a function, etc.)
    pub branch: usize,
}

// Symbol to build symbol table from stack
#[derive(Debug, Clone)]
pub struct Symbol {
    /// The type of the variable (e.g., bool, signature).
    pub ty: Type,

    /// How many times the variable has been consumed.
    /// Consumed to enforce "use exactly once" rules.
    pub consume_count: usize,

    /// The initial depth on the stack (0 = top).
    /// Used to verify consumption order.
    pub stack_position: usize,
}

// Check the duplication here.
pub fn build_symbol_table(
    stack_vec: &Vec<StackParam>,
) -> Result<HashMap<String, Symbol>, CompileError> {
    // Key is identifier
    let mut symbol_table: HashMap<String, Symbol> = HashMap::new();
    // Iterate in reverse to match stack LIFO order.
    for (i, stack_item) in stack_vec.iter().enumerate().rev() {
        let item = stack_item.to_owned();

        if symbol_table.get(&stack_item.identifier.0).is_some() {
            return Err(CompileError {
                loc: item.loc,
                kind: ErrorKind::DuplicateVariable(format!(
                    "The name of argument cannot be duplicate: {:?} already exists.",
                    item.identifier.0,
                )),
            });
        }
        symbol_table.insert(
            item.to_owned().identifier.0,
            Symbol {
                ty: item.ty,
                consume_count: 0,
                stack_position: stack_vec.len() - 1 - i, // 0 is the top stack position.
            },
        );
    }
    Ok(symbol_table)
}

pub fn analyze(
    ast: &Vec<Statement>,
    input: Vec<Vec<StackParam>>,
    target: &Target,
) -> Result<(), CompileError> {
    // --- Structural well-formedness (w1)-(w3) FIRST -----------------------
    // Every `if` has an `else`, no statement follows an `if`/`else`, and every
    // terminating path ends in a `return`. We run this before the w4 count
    // check so that a structural defect (e.g. a body with no `return`, or an
    // empty body) is reported as `NoReturn`/`UnreachableCode` — the cause the
    // paper's flow analysis describes — rather than being shadowed by the
    // count check reporting `DeclarationPathMismatch("0 paths ...")`. It also
    // guarantees the AST is non-empty before anything unwraps `ast.last()`.
    check_flow(ast)?;

    // --- Well-formedness condition (w4) -----------------------------------
    // The paper (Section V) makes `n = |Π(P)| = k+1` a premise of every
    // theorem. We check it before walking the statements so that a
    // declaration/path-count mismatch is reported with a single, clear,
    // user-facing message regardless of direction (too few OR too many
    // declarations). `analyze_statement` maps the i-th terminating path to
    // `scope_vec[i]`; establishing `input.len() == num_paths` up front means
    // that walk can never index `scope_vec` out of range in the first place.
    // `count_paths` reuses the necessity module's path enumeration, so the two
    // analyses can never disagree about how many paths a contract has.
    let num_paths = crate::necessity::count_paths(ast);
    if input.len() != num_paths {
        // Point at the first declaration if one exists, else the program start.
        let loc = input
            .first()
            .and_then(|stack| stack.first())
            .map(|p| p.loc.clone())
            .unwrap_or(Location {
                start: 0,
                end: 0,
                line: 1,
                column: 0,
            });
        return Err(CompileError {
            loc,
            kind: ErrorKind::DeclarationPathMismatch(format!(
                "contract has {} terminating spending paths but {} stack declaration(s) were provided; each path needs exactly one declaration.",
                num_paths,
                input.len(),
            )),
        });
    }

    // Build one scope per declaration. After the w4 check above, there is
    // exactly one scope per terminating path.
    let mut scope_vec: Vec<Scope> = vec![];
    for (branch, stack) in input.iter().enumerate() {
        scope_vec.push(Scope {
            symbol_table: build_symbol_table(&stack)?,
            branch: branch,
        });
    }

    // Per-path type/liveness/scope checking. With w4 established, the branch
    // index threaded through `analyze_statement` stays within
    // `0..scope_vec.len()`; `ensure_branch_in_range` remains as defence in
    // depth (it can only fire if `count_paths` and the branch-increment logic
    // ever diverged, which would be an internal invariant violation, not a
    // user error).
    analyze_statement(ast, &mut scope_vec, target, 0)?;

    // Enforce the signature-necessity invariant on every execution path.
    // Runs after well-formedness (so path totality is established first) and
    // before the unused-variable loop.
    crate::necessity::check_necessity(ast)?;

    // Check unused variable at last.
    for (i, stack) in input.iter().enumerate() {
        check_unused_variable(&stack, &scope_vec[i].symbol_table)?;
    }

    Ok(())
}

/// Guard against indexing `scope_vec` out of range. After the w4
/// well-formedness check in `analyze` (declarations == terminating paths) this
/// can never fire for any program that reaches here: `count_paths` and the
/// branch-increment logic below both derive the path count the same way. It is
/// retained purely as defence in depth, so that if that internal invariant were
/// ever broken by a future edit, the compiler surfaces a clean error instead of
/// panicking on an out-of-bounds index. It is therefore worded as an internal
/// invariant violation, not a user-facing spec error (the user-facing message
/// is emitted by the w4 check in `analyze`).
fn ensure_branch_in_range(
    scope_vec: &[Scope],
    branch: usize,
    loc: &Location,
) -> Result<(), CompileError> {
    if branch >= scope_vec.len() {
        return Err(CompileError {
            loc: loc.clone(),
            kind: ErrorKind::DeclarationPathMismatch(format!(
                "internal invariant violated: execution path index {} exceeds the {} scope(s) available. This should have been caught by the declaration/path-count check; please report it.",
                branch,
                scope_vec.len(),
            )),
        });
    }
    Ok(())
}

pub fn analyze_statement(
    ast: &Vec<Statement>,
    scope_vec: &mut Vec<Scope>,
    target: &Target,
    mut branch: usize,
) -> Result<usize, CompileError> {
    // Check statements in global scope of current branch.
    for stmt in ast {
        match stmt {
            Statement::LocktimeStatement { loc, operand, op } => {
                // BIP 68: Relative locktime (CSV/older) is physically limited to 16 bits
                // because it relies on the nSequence field's low 16 bits.
                if matches!(op, LocktimeOp::Csv) {
                    if *operand < 0 || *operand > u16::MAX as i64 {
                        return Err(CompileError {
                            loc: loc.to_owned(),
                            kind: ErrorKind::IntegerOverflow(format!(
                                "Relative locktime (older) cannot exceed 65,535 blocks due to BIP 68 limits but got: {}.",
                            operand
                            )),
                        });
                    }
                }
                // BIP112: Absoulte locktim is limited to u32::MAX
                if *operand < 0 || *operand > u32::MAX as i64 {
                    return Err(CompileError {
                        loc: loc.to_owned(),
                        kind: ErrorKind::IntegerOverflow(format!(
                            "Locktime must be a 32-bit unsigned integer (0-4294967295), but got: {}.",
                        operand
                        )),
                    });
                }
            }
            // T-Verify, T-Return and T-If all carry the premise
            // `Gamma |- e : bool`, so the statement operand is checked in the
            // strict boolean context rather than by `check_type`, whose
            // catch-all admits a bare leaf of any type (`verify n;`,
            // `return p;`, `if n {..}` all used to compile, leaving a witness
            // item rather than a checked boolean to decide the outcome).
            Statement::VerifyStatement(loc, expr) => {
                ensure_branch_in_range(scope_vec, branch, loc)?;
                check_variable(expr, &mut scope_vec[branch].symbol_table)?;
                check_type_boolean(expr, &mut scope_vec[branch].symbol_table, target)?;
                check_security(expr)?
            }
            Statement::ExpressionStatement(loc, expr) => {
                ensure_branch_in_range(scope_vec, branch, loc)?;
                check_variable(expr, &mut scope_vec[branch].symbol_table)?;
                check_type_boolean(expr, &mut scope_vec[branch].symbol_table, target)?;
                check_security(expr)?
            }
            Statement::IfStatement {
                loc,
                condition_expr,
                if_block,
                else_block,
            } => {
                ensure_branch_in_range(scope_vec, branch, loc)?;
                check_variable(condition_expr, &mut scope_vec[branch].symbol_table)?;
                check_type_boolean(condition_expr, &mut scope_vec[branch].symbol_table, target)?;
                check_security(condition_expr)?;

                // --- Capture the pre-branch consumption state (Major 1 fix) ---
                // §V-A: when the analyzer advances to the else-path it transfers
                // the *consumption state of the shared-prefix identifiers as it
                // stood at the branch point* — i.e. after the condition (and any
                // statements before this `if`) have run, but BEFORE the if-block
                // body executes. We snapshot the current branch's symbol table
                // here, at exactly that point. `branch` is still the entry index
                // of this `if`, so the snapshot reflects the prefix only.
                //
                // The previous implementation instead read `scope_vec[branch-1]`
                // *after* the if-block recursion, which (a) leaked consumptions
                // made inside the if-block onto the else-path, and (b) under a
                // nested if/else advanced `branch`, so `branch-1` pointed at the
                // last sub-path of the if-block rather than the pre-branch scope.
                // Both are fixed by snapshotting here.
                let prefix_snapshot: HashMap<String, Symbol> =
                    scope_vec[branch].symbol_table.clone();

                branch = analyze_statement(&if_block, scope_vec, target, branch)?;
                if else_block.is_some() {
                    branch += 1;
                    ensure_branch_in_range(scope_vec, branch, loc)?;

                    // Transfer only the prefix consumption state into the
                    // else-path's scope, and enforce the shared-prefix layout
                    // condition (w5). See `transfer_prefix_consumption`.
                    transfer_prefix_consumption(
                        &prefix_snapshot,
                        &mut scope_vec[branch].symbol_table,
                        loc,
                    )?;

                    branch = analyze_statement(
                        else_block.to_owned().unwrap().as_ref(),
                        scope_vec,
                        target,
                        branch,
                    )?;
                }
            }
        }
    }
    Ok(branch)
}

// Check the existence of unused variable after analysis.
pub fn check_unused_variable(
    stack_vec: &Vec<StackParam>,
    stack_table: &HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    for e in stack_vec {
        // If consume count is 0, it's unconsumed.
        if stack_table
            .get(&e.identifier.0)
            .is_some_and(|v| v.consume_count == 0)
        {
            return Err(CompileError {
                loc: e.to_owned().loc(),
                kind: ErrorKind::UnusedVariable(format!("Variable unused: {:?}.", e.identifier)),
            });
        }
    }
    return Ok(());
}

/// Transfer the *pre-branch* consumption state onto the else-path's scope, and
/// enforce the shared-prefix layout condition (paper §V-A, w5).
///
/// `prefix_snapshot` is the branch's symbol table captured at the branch point
/// (after the condition, before the if-block body). `current` is the else-path
/// declaration's freshly built symbol table.
///
/// # Stack orientation (read this before touching the w5 comparison)
///
/// Two reversals compose to fix the orientation. The parser's `StackParamList`
/// rule reverses the parameter list (`more.reverse(); more.push(first)`), and
/// `build_symbol_table` then assigns `stack_position = len-1-i`, a second
/// reversal. The two cancel, so **`stack_position` equals the source index**:
/// the **first-listed** declaration item sits at the **top** of the witness
/// stack (`stack_position == 0`) and `check_variable` consumes top-first. The
/// items consumed *before* a branch — the discriminant and any earlier reads —
/// are therefore the **top run** of the stack: `stack_position` `0, 1, 2, …`.
/// The discriminant, consumed first, is the first-listed / top item. (E.g.
/// source `(condition, sig_alice)` gives `condition` position 0, `sig_alice`
/// position 1, so `if condition` reads the top item — which is why the HTLC
/// in the paper declares the discriminant first and compiles.)
///
/// This is the orientation the whole analyzer already uses, and it matches the
/// paper's §V-A "shared prefix, discriminant first" wording. The check below
/// depends only on "distance from the top", so it is correct for this
/// orientation and will *fail loudly* (via the contiguity assertion) rather
/// than silently mis-accept if either reversal is ever changed.
///
/// # What is enforced
///
///   * **w5 (layout agreement):** every identifier consumed before the branch
///     point must sit at the same `stack_position` (same distance from the top)
///     in both declarations, AND those identifiers must form a contiguous top
///     run (positions `0..k`). Together these say the two paths agree on the
///     layout of the items consumed before the branch — the condition the paper
///     asserts as well-formedness, now *enforced* rather than assumed. A
///     violation is rejected with `DeclarationPathMismatch`. (A 2-item and a
///     3-item declaration that share their *top* items line up at `0,1,…`; it is
///     only a *bottom*-shared layout, which this orientation never produces for
///     the consumed-before-branch items, that would differ by arity.)
///
///   * **conditional transfer:** only items that were *actually consumed* on
///     the prefix (`consume_count > 0` in the snapshot) are marked consumed on
///     the else-path. Items still live at the branch point are left untouched,
///     so an item genuinely needed only on the else-path is not falsely marked
///     consumed (the bug that previously let the else-path leave a stray witness
///     item on the stack and fail CLEANSTACK on-chain).
///
/// An item can be consumed at most once (linearity), so seeding the else-path
/// with the prefix consumption is also what makes `check_variable` reject a
/// second use of a prefix item inside the else body.
pub fn transfer_prefix_consumption(
    prefix_snapshot: &HashMap<String, Symbol>,
    current: &mut HashMap<String, Symbol>,
    loc: &Location,
) -> Result<(), CompileError> {
    // Identifiers already consumed when the branch point was reached. These ---
    // and only these --- are the items (w5) constrains: the opcodes before the
    // branch are common to every path that reaches it, so those items must sit
    // at the same depth in every declaration that reaches it. Identifiers merely
    // shared by *name* are not constrained: below the branch point the paths are
    // independent, each with its own declaration and its own witness, so a name
    // reused at a different depth there is well-formed. Keying on the name
    // intersection was wrong in both directions --- it rejected
    // `(c, sa, x)` / `(c, sb, x)`, where only `c` precedes the branch, because
    // `x` at depth 2 breaks the contiguous-top-run test; and before part 0
    // existed it passed vacuously whenever the intersection was empty.
    let mut consumed_prefix: Vec<String> = prefix_snapshot
        .iter()
        .filter(|(_, snap)| snap.consume_count > 0)
        .map(|(k, _)| k.clone())
        .collect();
    // Sorted so that every diagnostic below is deterministic despite `HashMap`
    // iteration order.
    consumed_prefix.sort();

    // --- w5, part 0: the consumed prefix must be declared on both paths -----
    // Parts 1 and 2 only constrain items the two declarations have in common,
    // so two declarations naming disjoint identifiers used to pass them
    // vacuously: the else-path could then omit the discriminant that the emitted
    // `OP_IF` consumes (and any other item consumed before the branch), leaving
    // a script that needs more witness items than the declaration names --- the
    // witness prescribed by Lemma 1(b) is then rejected on-chain. Every item
    // already consumed at the branch point must therefore also be declared on
    // the else-path.
    if let Some(k) = consumed_prefix.iter().find(|k| !current.contains_key(*k)) {
        return Err(CompileError {
            loc: loc.clone(),
            kind: ErrorKind::DeclarationPathMismatch(format!(
                "witness item {:?} is consumed before the branch point but is not declared on the following spending path; declarations reachable below a branch point must share the prefix of items consumed before it.",
                k,
            )),
        });
    }

    // --- w5, part 1: same distance-from-top for every prefix identifier -----
    for k in &consumed_prefix {
        let snap = prefix_snapshot.get(k).unwrap();
        let cur = current.get(k).unwrap();
        if snap.stack_position != cur.stack_position {
            return Err(CompileError {
                loc: loc.clone(),
                kind: ErrorKind::DeclarationPathMismatch(format!(
                    "shared witness item {:?} sits at stack depth {} (from top) on one spending path but depth {} on another; declarations reachable below a branch point must agree on the layout of the items consumed before it.",
                    k, snap.stack_position, cur.stack_position,
                )),
            });
        }
    }

    // --- w5, part 2: the prefix items must be the contiguous TOP run --------
    // Consumption order forces the items consumed before the branch to be the
    // top run `0..k` of the snapshot's declaration, and part 1 has just tied the
    // else-path's depths to the snapshot's, so this holds whenever part 1 does.
    // It is retained as a defensive check on that orientation assumption: if it
    // ever fires, the stack model the transfer below relies on no longer holds
    // and rejecting is the only safe response.
    if !consumed_prefix.is_empty() {
        let mut positions: Vec<usize> = consumed_prefix
            .iter()
            .map(|k| current.get(k).unwrap().stack_position)
            .collect();
        positions.sort_unstable();
        let is_top_run = positions.iter().enumerate().all(|(rank, &pos)| rank == pos);
        if !is_top_run {
            return Err(CompileError {
                loc: loc.clone(),
                kind: ErrorKind::DeclarationPathMismatch(format!(
                    "the witness items shared across spending paths do not form a contiguous run at the top of the stack (found depths {:?}); the items consumed before a branch point must be the common top-of-stack prefix.",
                    positions,
                )),
            });
        }
    }

    // --- conditional transfer of pre-branch consumption ---------------------
    for k in &consumed_prefix {
        let snap = prefix_snapshot.get(k).unwrap();
        let cur = current.get(k).unwrap().clone();
        current.insert(
            k.clone(),
            Symbol {
                ty: cur.ty,
                // Preserve linearity: a prefix item is consumed exactly once.
                consume_count: cur.consume_count.max(snap.consume_count),
                stack_position: cur.stack_position,
            },
        );
    }

    Ok(())
}

// No sequential if/else block && No statement after if/else block.
// Unreachable Code Detection(No statement after return statement).
// Final Statement must be expression statement.
pub fn check_flow(ast: &Vec<Statement>) -> Result<(), CompileError> {
    // Empty body: `ast.last().unwrap()` below would panic. An empty block has
    // no terminating `return`, which violates well-formedness (w3), so reject
    // cleanly. This also covers the whole-program empty-AST case
    // (`pragma...; {}`), where `count_paths == 0` would otherwise let the w4
    // check pass and reach this unwrap.
    if ast.is_empty() {
        return Err(CompileError {
            loc: Location {
                start: 0,
                end: 0,
                line: 1,
                column: 0,
            },
            kind: ErrorKind::NoReturn(
                "An execution path is empty and does not terminate in a return; every path must end in a return.".to_string(),
            ),
        });
    }
    // No sequential if/else block && No statement after if/else block
    // Check No statement after return statement.
    for (i, statement) in ast.iter().enumerate() {
        match statement {
            Statement::IfStatement { .. } => {
                // Check No statement after if/else block,
                // as it can be placed before if/else block.
                if i != ast.len() - 1 {
                    let next = ast[i + 1].to_owned();
                    return Err(CompileError {
                        loc: next.to_owned().loc(),
                        kind: ErrorKind::UnreachableCode(format!(
                            "No statement after if/else block but: {:?}.",
                            next
                        )),
                    });
                }
            }
            Statement::ExpressionStatement(..) => {
                // Check No statement after return statement.
                if i != ast.len() - 1 {
                    let next = ast[i + 1].to_owned();
                    return Err(CompileError {
                        loc: next.to_owned().loc(),
                        kind: ErrorKind::UnreachableCode(format!(
                            "Unreachable code after return statement: {:?}. Move return statement at the last scope of execution path",
                            next
                        )),
                    });
                }
            }
            _ => (),
        }
    }
    let last = ast.last().unwrap().to_owned();
    let last_loc = last.to_owned().loc();
    // Final Statement must be expression statement.
    match last {
        Statement::IfStatement {
            if_block,
            else_block,
            ..
        } => {
            // A terminal `if` with no `else` leaves an implicit fall-through
            // path with no `return`: at runtime the branch is skipped and
            // leftover witness items decide the outcome. Every execution path
            // must terminate in a `return`, so an `if` in terminal position
            // requires an `else`.
            if else_block.is_none() {
                return Err(CompileError {
                    loc: last_loc,
                    kind: ErrorKind::NoReturn(
                        "Every execution path must terminate in a return, so an if in terminal position requires an else."
                            .to_string(),
                    ),
                });
            }
            check_flow(&if_block)?;
            check_flow(&else_block.unwrap())?;
        }
        Statement::ExpressionStatement(..) => (),
        _ => {
            return Err(CompileError {
                loc: last.to_owned().loc(),
                kind: ErrorKind::NoReturn(format!(
                    "Return statement must exist for each possible execution path: {:?}.",
                    last
                )),
            });
        }
    }

    Ok(())
}

// Undefined Variable Check
// Consumed Variable Check
// Scope Enforcement
// Unconsumed Variable Check
// Check order of consumption(stack position)
pub fn check_variable(
    expression: &Expression,
    symbol_table: &mut HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    match expression {
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            // 1. Check the existence of variable
            if symbol_table.get(&id_string).is_none() {
                return Err(CompileError {
                    loc: expression.to_owned().loc(),
                    kind: ErrorKind::UndefinedVariable(format!(
                        "Undefined variable: {:?}.",
                        id_string
                    )),
                });
            }
            let item = symbol_table.get(&id_string).unwrap().to_owned();
            // 2. Check the consumption of variable
            if item.consume_count != 0 {
                return Err(CompileError {
                    loc: expression.to_owned().loc(),
                    kind: ErrorKind::VariableConsumed(format!(
                        "Consumed variable: {:?}.",
                        id_string
                    )),
                });
            }

            // 3. Check whether there is unconsumed variable before this variable.
            let is_invalid_consumption_order = symbol_table
                .values()
                .any(|v| v.stack_position < item.stack_position && v.consume_count == 0);
            if is_invalid_consumption_order {
                return Err(CompileError {
                    loc: expression.to_owned().loc(),
                    kind: ErrorKind::InvalidConsumptionOrder(format!(
                        "Invalid Variable Consumption Order: {:?}th {:?} is used despite of preceding unused variable.",
                        item.stack_position,
                        id_string,
                    )),
                });
            }

            // 4. Counter consume_count
            symbol_table.insert(
                id_string,
                Symbol {
                    ty: item.ty,
                    consume_count: 1,
                    stack_position: item.stack_position,
                },
            );

            Ok(())
        }
        Expression::CheckSigExpression {
            loc: _,
            operand,
            op: _,
        } => match &**operand {
            Factor::SingleSigFactor {
                loc: _,
                sig,
                pubkey,
            } => {
                check_variable(&sig, symbol_table)?;
                check_variable(&pubkey, symbol_table)
            }
            Factor::MultiSigFactor { loc: _, m: _, n } => {
                for factor in n {
                    match factor {
                        Factor::SingleSigFactor {
                            loc: _,
                            sig,
                            pubkey,
                        } => {
                            check_variable(&sig, symbol_table)?;
                            check_variable(&pubkey, symbol_table)?
                        }
                        _ => continue,
                    }
                }

                return Ok(());
            }
        },
        Expression::UnaryCryptoExpression {
            loc: _,
            operand,
            op,
        } => check_variable(&operand, symbol_table),
        Expression::LogicalExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_variable(&lhs, symbol_table)?;
            check_variable(&rhs, symbol_table)
        }
        Expression::CompareExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_variable(&lhs, symbol_table)?;
            check_variable(&rhs, symbol_table)
        }
        Expression::UnaryMathExpression {
            loc: _,
            operand,
            op,
        } => check_variable(&operand, symbol_table),
        Expression::BinaryMathExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_variable(&lhs, symbol_table)?;
            check_variable(&rhs, symbol_table)
        }
        Expression::ByteExpression {
            loc: _,
            operand,
            op: _,
        } => check_variable(&operand, symbol_table),
        _ => Ok(()),
    }
}

// Check type(e.g. operand of expression).
// `num` and `bool` are SEPARATE types (paper Fig. 2):
//   * arithmetic (`+ - max min`, `++ -- negate abs`) takes `num` ONLY;
//   * logical (`&& ||`, `!`) takes `bool` ONLY;
//   * comparison takes a shared type: num-to-num, bool-to-bool, or string-to-string
//     (the string case is restricted to == / != ).
// A `checksig` result is `bool`, so `checksig(..) + 1` is a type error and never
// reaches the signature-necessity analysis. `check_type_numeric` and
// `check_type_boolean` below are the two halves of that split.
// Every bytes op (len) takes a string ONLY; check_type_string rejects signature
// and every non-string type (see check_type_string below).
// "=="/"!=" compile to OP_EQUAL / OP_EQUAL OP_NOT (byte equality), which is correct
// for minimally encoded num operands. Where an operand may leave the CScriptNum
// range -- syntactically decidable, and decided by `may_exceed_script_num` in
// compile.rs -- OP_NUMEQUAL / OP_NUMNOTEQUAL are emitted instead. OP_NUMEQUAL also
// terminates the taproot multisig accumulator (see compile_expression).
pub fn check_type(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
    target: &Target,
) -> Result<(), CompileError> {
    match expression {
        Expression::CheckSigExpression {
            loc: _,
            operand,
            op: _,
        } => match &**operand {
            Factor::SingleSigFactor {
                loc: _,
                sig,
                pubkey,
            } => check_type_sig_pubkey(sig, pubkey, symbol_table, target),
            Factor::MultiSigFactor { loc, m, n } => {
                // T-Factor-Multi's threshold premise `1 <= m <= n`. Without it
                // `checksig [0, ..]` type-checks and emits
                // `OP_0 <pk_n> .. <pk_1> <n> OP_CHECKMULTISIG`, which consensus
                // satisfies with the dummy alone and no signature at all, while
                // the necessity analysis still counts the factor as one
                // signature atom; `m > n` emits a script no witness satisfies.
                if *m == 0 || *m as usize > n.len() {
                    return Err(CompileError {
                        loc: loc.to_owned(),
                        kind: ErrorKind::InvalidOperation(format!(
                            "Multi-signature threshold must satisfy 1 <= m <= n but m is {:?} and n is {:?}.",
                            m,
                            n.len(),
                        )),
                    });
                }
                for factor in n {
                    match factor {
                        Factor::SingleSigFactor {
                            loc: _,
                            sig,
                            pubkey,
                        } => check_type_sig_pubkey(sig, pubkey, symbol_table, target)?,
                        _ => continue,
                    }
                }

                return Ok(());
            }
        },
        Expression::LogicalExpression {
            loc: _,
            lhs,
            op: _,
            rhs,
        } => {
            // `&&` / `||` are boolean, not numeric: T-Logical.
            check_type_boolean(lhs, symbol_table, target)?;
            check_type_boolean(rhs, symbol_table, target)
        }
        Expression::CompareExpression { loc, lhs, op, rhs } => {
            // compare string/signature to string/signature
            if check_type_string(&lhs, symbol_table, target).is_ok()
                && check_type_string(&rhs, symbol_table, target).is_ok()
            {
                if *op != BinaryCompareOp::Equal && *op != BinaryCompareOp::NotEqual {
                    return Err(CompileError {
                        loc: loc.to_owned(),
                        kind: ErrorKind::InvalidOperation(format!(
                            "Compare operation for string must be either == or != but: {:?}.",
                            op
                        )),
                    });
                }
                return Ok(());
            }
            // compare number to number
            if check_type_numeric(&lhs, symbol_table, target).is_ok()
                && check_type_numeric(&rhs, symbol_table, target).is_ok()
            {
                return Ok(());
            }
            // compare boolean to boolean (e.g. `checksig(..) == false`, `X != false`).
            // Ordering is meaningless on a boolean, so only == / != are admitted,
            // exactly as for byte strings: T-Comparison's side condition is
            // `tau != num => op in {==, !=}`.
            if check_type_boolean(&lhs, symbol_table, target).is_ok()
                && check_type_boolean(&rhs, symbol_table, target).is_ok()
            {
                if *op != BinaryCompareOp::Equal && *op != BinaryCompareOp::NotEqual {
                    return Err(CompileError {
                        loc: loc.to_owned(),
                        kind: ErrorKind::InvalidOperation(format!(
                            "Compare operation for boolean must be either == or != but: {:?}.",
                            op
                        )),
                    });
                }
                return Ok(());
            }

            Err(CompileError {
                loc: loc.to_owned(),
                kind: ErrorKind::InvalidOperation(format!(
                    "Compare type must be same but: {:?} to {:?}.",
                    lhs, rhs
                )),
            })
        }
        // `!` is parsed as UnaryMathOp::Not, so it shares this node with
        // `++ -- negate abs`. It is the only boolean member: T-UnaryLogical.
        Expression::UnaryMathExpression {
            loc: _,
            operand,
            op,
        } => {
            if matches!(op, UnaryMathOp::Not) {
                check_type_boolean(&operand, symbol_table, target)
            } else {
                check_type_numeric(&operand, symbol_table, target)
            }
        }
        Expression::BinaryMathExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_type_numeric(&lhs, symbol_table, target)?;
            check_type_numeric(&rhs, symbol_table, target)
        }
        // Allow only ascii encoded string.
        // UTF-8 string's char has various byte size, which makes use of OP_SIZE hard.
        Expression::ByteExpression {
            loc: _,
            operand,
            op: _,
        } => {
            check_type_string(&operand, symbol_table, target)?;
            // Further check whether ascii or not.
            match *operand.to_owned() {
                Expression::StringLiteral(loc, val) => {
                    if !(val.is_ascii()) {
                        return Err(CompileError {
                            loc: loc,
                            kind: ErrorKind::InvalidOperation(format!(
                                "Operand must be ascii string but: {:?}.",
                                val,
                            )),
                        });
                    }
                    Ok(())
                }
                _ => Ok(()),
            }
        }
        // T-UnaryCrypto's operand premise, checked here as well as through
        // `check_type_string`, so no call site can reach a hash without it.
        Expression::UnaryCryptoExpression { operand, .. } => {
            check_type_crypto_operand(&operand, symbol_table, target)
        }
        _ => Ok(()),
    }
}

/// STRICT NUMERIC CONTEXT (paper Fig. 2: `num`).
///
/// Accepts only expressions whose value is a `num`: number literals, variables
/// declared `number`, `len(..)`, and arithmetic over those. Everything that
/// evaluates to a `bool` --- `checksig`, a comparison, `&&`/`||`, `!`, a boolean
/// literal, a variable declared `bool` --- is REJECTED here, which is what makes
/// `checksig(..) + 1` a type error rather than something the signature-necessity
/// analysis has to catch. See `check_type_boolean` for the other half.
pub fn check_type_numeric(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
    target: &Target,
) -> Result<(), CompileError> {
    // Single message so the two halves of the split read consistently.
    let not_num = |loc: Location| CompileError {
        loc,
        kind: ErrorKind::InvalidOperation(format!(
            "Operand must be a number but: {:?}.",
            expression,
        )),
    };

    match expression.to_owned() {
        // --- values of the wrong kind -------------------------------------
        Expression::UnaryCryptoExpression { loc, .. } => Err(not_num(loc)),
        Expression::StringLiteral(loc, ..) => Err(not_num(loc)),
        // A boolean literal is not a number: `true + 1` is a type error.
        Expression::BooleanLiteral(loc, ..) => Err(not_num(loc)),

        // --- expressions that evaluate to bool ----------------------------
        // These used to be admitted here (via `check_type`), which is what let
        // `checksig(..) + 1 >= 1` and `checksig(a) + checksig(b) >= 2` compile.
        Expression::CheckSigExpression { loc, .. } => Err(not_num(loc)),
        Expression::CompareExpression { loc, .. } => Err(not_num(loc)),
        Expression::LogicalExpression { loc, .. } => Err(not_num(loc)),

        // --- variables: only `number` -------------------------------------
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            let var_type = symbol_table.get(&id_string).unwrap().ty.to_owned();
            if var_type != Type::Number {
                return Err(not_num(loc));
            }
            Ok(())
        }

        // --- numeric expressions ------------------------------------------
        // `len(e)` evaluates to a number; its operand still needs checking, so
        // defer to check_type().
        Expression::ByteExpression { .. } => check_type(&expression, symbol_table, target),
        Expression::BinaryMathExpression { lhs, rhs, .. } => {
            check_type_numeric(&lhs, symbol_table, target)?;
            check_type_numeric(&rhs, symbol_table, target)
        }
        // `!` (UnaryMathOp::Not) yields bool and is rejected; `++ -- negate abs`
        // stay numeric.
        Expression::UnaryMathExpression { loc, operand, op } => {
            if matches!(op, UnaryMathOp::Not) {
                return Err(not_num(loc));
            }
            check_type_numeric(&operand, symbol_table, target)
        }

        // The only remaining variant, and the only one that is trivially a num.
        Expression::NumberLiteral(..) => Ok(()),
    }
}

/// STRICT BOOLEAN CONTEXT (paper Fig. 2: `bool`).
///
/// The mirror of `check_type_numeric`. Accepts boolean literals, variables
/// declared `bool`, `checksig(..)`, comparisons, `&&`/`||`, and `!`. A number ---
/// literal, `number` variable, `len(..)`, or arithmetic --- is rejected, so
/// `1 && 2` and `!n` are type errors.
pub fn check_type_boolean(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
    target: &Target,
) -> Result<(), CompileError> {
    let not_bool = |loc: Location| CompileError {
        loc,
        kind: ErrorKind::InvalidOperation(format!(
            "Operand must be a boolean but: {:?}.",
            expression,
        )),
    };

    match expression.to_owned() {
        Expression::BooleanLiteral(..) => Ok(()),

        // `checksig` and comparison both evaluate to bool; their operands still
        // need checking, so defer to check_type().
        Expression::CheckSigExpression { .. } => check_type(&expression, symbol_table, target),
        Expression::CompareExpression { .. } => check_type(&expression, symbol_table, target),

        Expression::LogicalExpression { lhs, rhs, .. } => {
            check_type_boolean(&lhs, symbol_table, target)?;
            check_type_boolean(&rhs, symbol_table, target)
        }

        // Only `!` is boolean among the unary-math operators.
        Expression::UnaryMathExpression { loc, operand, op } => {
            if matches!(op, UnaryMathOp::Not) {
                check_type_boolean(&operand, symbol_table, target)
            } else {
                check_type_numeric(&operand, symbol_table, target)?;
                Err(not_bool(loc))
            }
        }

        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            let var_type = symbol_table.get(&id_string).unwrap().ty.to_owned();
            if var_type != Type::Boolean {
                return Err(not_bool(loc));
            }
            Ok(())
        }

        // Arithmetic and `len(..)` are num-valued, so they never satisfy the
        // `bool` premise. Their own operands are checked first so that an
        // ill-typed operand is still reported where it occurs instead of being
        // masked by the surrounding statement's premise.
        Expression::BinaryMathExpression { .. } | Expression::ByteExpression { .. } => {
            check_type_numeric(&expression, symbol_table, target)?;
            Err(not_bool(expression.to_owned().loc()))
        }

        // NumberLiteral, StringLiteral, crypto hashes.
        _ => Err(not_bool(expression.to_owned().loc())),
    }
}

pub fn check_type_string(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
    target: &Target,
) -> Result<(), CompileError> {
    match expression.to_owned() {
        // StringLiteral is just string.
        Expression::StringLiteral(loc, val) => Ok(()),
        // UnaryCryptoExpression ouputs ascii string.
        // Its own operand is still subject to T-UnaryCrypto's premise
        // `tau in {num, string, bool}`, which excludes `sig`.
        Expression::UnaryCryptoExpression { operand, .. } => {
            check_type_crypto_operand(&operand, symbol_table, target)
        }

        // For variable, look up symbol table.
        // STRICT TYPING: Only `Type::String` is admissible in a byte-string context.
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            let var_type = symbol_table.get(&id_string).unwrap().ty.to_owned();

            // Reject Signature, Boolean, and Number.
            if var_type != Type::String {
                return Err(CompileError {
                    loc: loc,
                    kind: ErrorKind::InvalidOperation(format!(
                        "Operand must be a string but got {:?}: {:?}.",
                        var_type, expression,
                    )),
                });
            }
            Ok(())
        }
        // Throw error for non-string evaluated expression.
        _ => {
            return Err(CompileError {
                loc: expression.to_owned().loc(),
                kind: ErrorKind::InvalidOperation(format!(
                    "Operand must be a string but: {:?}.",
                    expression,
                )),
            });
        }
    }
}

/// T-UnaryCrypto's operand premise: `Gamma |- e : tau` with
/// `tau in {num, string, bool}`. A `sig` is excluded, so a declared signature
/// cannot be hashed --- which would otherwise let `sha256 s` launder it into a
/// string operand and consume it without any signature check. A variable is the
/// only expression form that can have type `sig` (no literal or operator yields
/// one), so it is the only case to reject; nested hashes are checked through.
pub fn check_type_crypto_operand(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
    target: &Target,
) -> Result<(), CompileError> {
    match expression {
        Expression::Variable(loc, id) => {
            let var_type = symbol_table.get(&id.0).unwrap().ty.to_owned();
            if var_type == Type::Signature {
                return Err(CompileError {
                    loc: loc.to_owned(),
                    kind: ErrorKind::InvalidOperation(format!(
                        "Operand of a hash must be a number, string or boolean but got {:?}: {:?}.",
                        var_type, expression,
                    )),
                });
            }
            Ok(())
        }
        Expression::UnaryCryptoExpression { operand, .. } => {
            check_type_crypto_operand(&operand, symbol_table, target)
        }
        // T-UnaryCrypto admits a `bool` operand and `checksig` yields `bool`, so
        // a hash over a signature check is well-typed and must not be rejected
        // outright --- but its factor still has to satisfy T-Factor-Single /
        // T-Factor-Multi. The grammar allows it (`UnaryCryptoExpression` takes
        // an `Expression3`, which includes `CheckSigExpression`), and without
        // this arm the catch-all below swallowed it: `check_type_sig_pubkey`
        // never ran, so a non-literal key operand reached `compile_factor`'s
        // `panic!` instead of a diagnostic, and a `MultiSigFactor` in this
        // position skipped the `1 <= m <= n` premise entirely.
        Expression::CheckSigExpression { .. } => check_type(expression, symbol_table, target),
        // Any other operand form -- a parenthesised logical, comparison or
        // arithmetic expression, or a `len` -- is admissible under
        // T-UnaryCrypto's `tau in {num, string, bool}` premise, but may still
        // contain a `checksig` whose factor has to satisfy T-Factor-Single /
        // T-Factor-Multi. `UnaryCryptoExpression` takes an `Expression3`
        // (bithoven.lalrpop:203), which reaches `( Expression0 )` through
        // `Expression4`, so `sha256 (checksig(..) && flag)` parses and the
        // enumerated arms above do not cover it. Delegating to `check_type`
        // dispatches each composite to the right context and returns Ok for
        // literals; a `Variable` never arrives here, the first arm catches it.
        _ => check_type(expression, symbol_table, target),
    }
}

pub fn check_type_sig_pubkey(
    sig: &Expression,
    pubkey: &Expression,
    symbol_table: &HashMap<String, Symbol>,
    target: &Target,
) -> Result<(), CompileError> {
    // Only variable of type "signature" can be sig.
    match sig {
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            let var_type = symbol_table.get(&id_string).unwrap().ty.to_owned();
            if var_type != Type::Signature {
                return Err(CompileError {
                    loc: sig.to_owned().loc(),
                    kind: ErrorKind::InvalidOperation(format!(
                        "Signature must be type of signature but: {:?}.",
                        sig,
                    )),
                });
            }
        }
        _ => {
            return Err(CompileError {
                loc: sig.to_owned().loc(),
                kind: ErrorKind::TypeMismatch(format!(
                    "Signature must be from arguments but: {:?}.",
                    sig
                )),
            });
        }
    };
    // Only string literal can be pubkey.
    // Public key safety check on ECC, gated by the pragma target
    // (`on-curve_t` side condition of T-Factor-Single / Canonical Forms,
    // Lemma 1): a 33-byte compressed point under legacy/segwit, a 32-byte
    // x-only key under taproot. Accepting the wrong encoding here would let a
    // contract type-check and then fail consensus at spend time (e.g. a 33-byte
    // key under tapscript's OP_CHECKSIGADD, which requires x-only).
    match pubkey {
        Expression::StringLiteral(loc, data) => {
            // The encoding demanded by the active target, used for the error
            // message when validation fails.
            let (target_name, expected) = match target {
                Target::Legacy | Target::Segwit => (
                    "legacy/segwit",
                    "a 33-byte compressed public key (prefix 02/03)",
                ),
                Target::Taproot => ("taproot", "a 32-byte x-only public key"),
            };

            let malformed = |detail: String| CompileError {
                loc: loc.to_owned(),
                kind: ErrorKind::MalformedPubkey(format!(
                    "target {} requires {}, but the key literal {:?} is invalid: {}.",
                    target_name, expected, data, detail
                )),
            };

            // Decode the hex literal first.
            let pubkey_bytes = match hex::decode(&data) {
                Ok(bytes) => bytes,
                Err(e) => return Err(malformed(format!("not valid hex ({})", e))),
            };

            let on_curve = match target {
                // Compressed secp256k1: exactly 33 bytes, prefix 02/03, and a
                // valid point. `PublicKey::from_slice` validates the point and,
                // combined with the explicit length/prefix guard, rejects both
                // 32-byte x-only keys and 65-byte uncompressed keys.
                Target::Legacy | Target::Segwit => {
                    pubkey_bytes.len() == 33
                        && (pubkey_bytes[0] == 2 || pubkey_bytes[0] == 3)
                        && bitcoin::PublicKey::from_slice(&pubkey_bytes).is_ok()
                }
                // x-only: exactly 32 bytes and a valid point.
                Target::Taproot => {
                    pubkey_bytes.len() == 32
                        && bitcoin::XOnlyPublicKey::from_slice(&pubkey_bytes).is_ok()
                }
            };

            // Distinguish the three failure causes. Reporting "got N bytes"
            // for a correctly sized but off-curve key was misleading, and the
            // manuscript's example (a valid 33-byte encoding whose point is not
            // on secp256k1) quotes the third message.
            let expected_len = match target {
                Target::Taproot => 32,
                _ => 33,
            };
            if pubkey_bytes.len() != expected_len {
                return Err(malformed(format!("got {} bytes", pubkey_bytes.len())));
            }
            if matches!(target, Target::Legacy | Target::Segwit)
                && !(pubkey_bytes[0] == 2 || pubkey_bytes[0] == 3)
            {
                return Err(malformed(format!(
                    "prefix byte is 0x{:02x}, expected 0x02 or 0x03",
                    pubkey_bytes[0]
                )));
            }
            if on_curve {
                Ok(())
            } else {
                Err(malformed("not a point on secp256k1".to_string()))
            }
        }
        _ => {
            return Err(CompileError {
                loc: pubkey.to_owned().loc(),
                kind: ErrorKind::TypeMismatch(format!(
                    "Public Key must be from string literal but: {:?}.",
                    pubkey
                )),
            });
        }
    }
}

// Check any possible vulnerability.
pub fn check_security(expression: &Expression) -> Result<(), CompileError> {
    check_overflow(expression)?;

    // Recursive check.
    match expression {
        Expression::BinaryMathExpression { loc, lhs, op, rhs } => {
            check_security(&lhs)?;
            check_security(&rhs)?;
        }
        Expression::ByteExpression { loc, operand, op } => {
            check_security(&operand)?;
        }
        Expression::CompareExpression { loc, lhs, op, rhs } => {
            check_security(&lhs)?;
            check_security(&rhs)?;
        }
        Expression::LogicalExpression { loc, lhs, op, rhs } => {
            check_security(&lhs)?;
            check_security(&rhs)?;
        }
        Expression::UnaryMathExpression { loc, operand, op } => {
            check_security(&operand)?;
        }
        Expression::UnaryCryptoExpression { loc, operand, op } => {
            check_security(&operand)?;
        }
        _ => (),
    }

    Ok(())
}

pub fn check_overflow(expression: &Expression) -> Result<(), CompileError> {
    match expression.to_owned() {
        // Number is 32 bit sign magnitude int, except when used as locktime.
        // To determine whether locktime or not is beyond context-free grammar.
        // Can be addressed when context analysis done
        Expression::NumberLiteral(loc, val) => {
            if val > i32::MAX as i64 || val <= i32::MIN as i64 {
                return Err(CompileError {
                    loc: loc,
                    kind: ErrorKind::IntegerOverflow(format!(
                        "Number is 32 bit sign magnitude int: {:?}.",
                        val,
                    )),
                });
            }
            Ok(())
        }
        // T-Str's `|str| <= 520` premise: consensus refuses to push more than
        // 520 bytes in a single element. The length compared is the length of
        // the data `push_bytes` emits, i.e. the hex-decoded bytes when the
        // literal parses as hex and the raw bytes otherwise.
        Expression::StringLiteral(loc, val) => {
            let pushed_len = hex::decode(&val).map(|b| b.len()).unwrap_or(val.len());
            if pushed_len > MAX_SCRIPT_ELEMENT_SIZE {
                return Err(CompileError {
                    loc: loc,
                    kind: ErrorKind::IntegerOverflow(format!(
                        "Byte string is limited to {:?} bytes by the push limit but: {:?} bytes.",
                        MAX_SCRIPT_ELEMENT_SIZE, pushed_len,
                    )),
                });
            }
            Ok(())
        }
        _ => Ok(()),
    }
}

// NOT IMPLEMENTED: Bitcoin's script-level resource limits -- MAX_SCRIPT_SIZE
// (10,000 bytes), MAX_OPS_PER_SCRIPT (201 counted opcodes), MAX_STACK_SIZE
// (1,000 items) and MAX_PUBKEYS_PER_MULTISIG (20) -- are properties of the
// emitted script rather than of the typing derivation, and no stage of this
// analyzer enforces them. A program large enough to cross one is therefore
// accepted and compiled, and its script is unspendable: a conjunction of 42
// `checksig`s compiles to 1,634 bytes and 206 counted opcodes, five over the
// budget, while 41 stays inside it.
//
// This is why Proposition 1 (liveness) carries the limits as an explicit
// hypothesis on `O(C(P))` rather than deriving them from acceptance. It does
// not weaken Theorem 1 (refinement) or Theorem 2 (signature necessity): both
// take script success as their antecedent, and a script consensus refuses to
// run does not succeed.

/*
/// Defines the kind of block this scope represents. This is crucial for
/// context-sensitive rules (e.g., a `return` is only valid in a `Function` scope).
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum ScopeKind {
    /// The top-level scope of the entire contract.
    Global,

    /// The scope for a specific conditional branch (e.g., an `if` or `else` block).
    /// It holds an ID that links it to a specific declared input stack.
    Branch { path_id: usize },
}
 */

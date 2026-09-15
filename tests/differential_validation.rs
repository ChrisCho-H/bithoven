#![cfg(not(target_family = "wasm"))]
//! Differential validation of the Bithoven compiler against Bitcoin Core's
//! consensus engine (`libbitcoinconsensus`).
//!
//! This harness discharges Assumption (i) of the Refinement Theorem
//! empirically: it executes the *same* program twice, once under a reference
//! interpreter of the abstract operational semantics (Branch A) and once as
//! the emitted Bitcoin Script under Bitcoin Core (Branch B), and asserts that
//! the two verdicts agree.
//!
//! * **Branch A** — `eval_program`, a reference interpreter for the abstract
//!   machine. It shares the abstract syntax with the compiler but none of its
//!   code generation: it evaluates the generated program tree directly over the
//!   witness stack, with `CScriptNum` range checks producing the failure state
//!   `⊥` exactly where the semantics does.
//! * **Branch B** — `compile_program` (parse → analyze → compile) followed by
//!   `evaluate_on_consensus`, which wraps the emitted script into a P2WSH
//!   output, builds a dummy spending transaction carrying the witness and
//!   invokes `bitcoinconsensus::verify_with_flags`.
//!
//! Run the baseline campaign (Step 2) with
//!
//! ```text
//! cargo test --release --test differential_validation -- --nocapture
//! ```
//!
//! `scripts/mutation_analysis.py` drives the same campaign against a mutated
//! `src/compile.rs` to produce the sensitivity table (Step 3).

use std::collections::BTreeMap;
use std::sync::OnceLock;

use bitcoin::consensus::Encodable;
use bitcoin::hashes::{ripemd160, sha256, Hash};
use bitcoin::secp256k1::{Message, Secp256k1, SecretKey};
use bitcoin::sighash::{EcdsaSighashType, SighashCache};
use bitcoin::{
    absolute, transaction, Amount, OutPoint, ScriptBuf, Sequence, Transaction, TxIn, TxOut, Witness,
};
use rand::rngs::StdRng;
use rand::{Rng, SeedableRng};

// ===========================================================================
// STEP 1 — Harness setup: P2WSH transaction construction and consensus call
// ===========================================================================

/// `SCRIPT_VERIFY_MINIMALDATA` (Bitcoin Core `interpreter.h`, bit 6).
const VERIFY_MINIMALDATA: u32 = 1 << 6;
/// `SCRIPT_VERIFY_CLEANSTACK` (Bitcoin Core `interpreter.h`, bit 8).
const VERIFY_CLEANSTACK: u32 = 1 << 8;

/// The flag set named in the paper: `MINIMALDATA | CLEANSTACK | NULLDUMMY |
/// CHECKLOCKTIMEVERIFY | CHECKSEQUENCEVERIFY | WITNESS`.
const PAPER_FLAGS: u32 = VERIFY_MINIMALDATA
    | VERIFY_CLEANSTACK
    | bitcoinconsensus::VERIFY_NULLDUMMY
    | bitcoinconsensus::VERIFY_CHECKLOCKTIMEVERIFY
    | bitcoinconsensus::VERIFY_CHECKSEQUENCEVERIFY
    | bitcoinconsensus::VERIFY_WITNESS;

/// `VerifyScript()` asserts `SCRIPT_VERIFY_P2SH` whenever `SCRIPT_VERIFY_WITNESS`
/// is set (`interpreter.cpp`), so P2SH is always part of the effective set.
const P2SH_FLAG: u32 = bitcoinconsensus::VERIFY_P2SH;

/// The subset of `PAPER_FLAGS` that the public `libbitcoinconsensus` entry
/// point accepts. `bitcoinconsensus.cpp::verify_flags()` rejects any bit
/// outside `bitcoinconsensus_SCRIPT_FLAGS_VERIFY_ALL`, which does not expose
/// `MINIMALDATA` or `CLEANSTACK`. For the witness-v0 (P2WSH) programs emitted
/// by `$\mathcal{C}$` this loses nothing, and the harness closes the gap
/// itself (see `flags_in_effect` and `pushes_are_minimal`).
const SUPPORTED_FLAGS: u32 = P2SH_FLAG
    | bitcoinconsensus::VERIFY_NULLDUMMY
    | bitcoinconsensus::VERIFY_CHECKLOCKTIMEVERIFY
    | bitcoinconsensus::VERIFY_CHECKSEQUENCEVERIFY
    | bitcoinconsensus::VERIFY_WITNESS;

/// Value of the output being spent, in satoshis.
const SPENT_AMOUNT: u64 = 100_000;
/// `nLockTime` of the dummy spending transaction (block height).
const TX_LOCKTIME: u32 = 500_000;
/// `nSequence` of the dummy input: non-final (so `CHECKLOCKTIMEVERIFY` is
/// enabled), relative-locktime type flag clear, 65535 blocks encoded.
const TX_SEQUENCE: u32 = 0x0000_FFFF;

/// Flags actually handed to `verify_with_flags`.
///
/// The paper's set is attempted first. If `libbitcoinconsensus` rejects it with
/// `ERR_INVALID_FLAGS` (it does: the C API whitelists only the soft-fork bits)
/// the harness falls back to the supported subset. The two dropped bits are
/// still enforced end to end:
///
/// * `CLEANSTACK` — `ExecuteWitnessScript()` requires the witness script to
///   halt with exactly one stack element for every witness-v0 program, which is
///   the CLEANSTACK condition; the fallback is therefore equivalent here (the
///   `leftover_witness_item_fails_cleanstack` test pins this down).
/// * `MINIMALDATA` — the flag constrains push encodings; `pushes_are_minimal`
///   re-implements Bitcoin Core's `CheckMinimalPush` and rejects any emitted
///   script that violates it before the script ever reaches consensus, and the
///   generator only ever supplies minimally-encoded numeric witness items.
fn flags_in_effect() -> u32 {
    static FLAGS: OnceLock<u32> = OnceLock::new();
    *FLAGS.get_or_init(|| {
        // Probe with a trivial always-true P2WSH program.
        let script = bitcoin::script::Builder::new().push_int(1).into_bytes();
        let probe = raw_verify(&script, &[], PAPER_FLAGS | P2SH_FLAG);
        match probe {
            Err(bitcoinconsensus::Error::ERR_INVALID_FLAGS) => SUPPORTED_FLAGS,
            _ => PAPER_FLAGS | P2SH_FLAG,
        }
    })
}

/// The P2WSH `scriptPubKey` committing to `script`.
fn p2wsh_script_pubkey(script: &[u8]) -> ScriptBuf {
    ScriptBuf::new_p2wsh(&bitcoin::WScriptHash::hash(script))
}

/// The dummy spending transaction for `witness`.
///
/// Deterministic in the witness alone, so the BIP-143 sighash (which does not
/// commit to the witness) can be computed before the witness is filled in.
fn dummy_spending_transaction(witness: Witness) -> Transaction {
    Transaction {
        version: transaction::Version::TWO,
        lock_time: absolute::LockTime::from_consensus(TX_LOCKTIME),
        input: vec![TxIn {
            previous_output: OutPoint::null(),
            script_sig: ScriptBuf::new(),
            sequence: Sequence::from_consensus(TX_SEQUENCE),
            witness,
        }],
        output: vec![TxOut {
            value: Amount::from_sat(SPENT_AMOUNT - 10_000),
            script_pubkey: ScriptBuf::new_op_return(&[]),
        }],
    }
}

/// Unchecked call into `libbitcoinconsensus` (no MINIMALDATA pre-gate).
fn raw_verify(
    compiled_script: &[u8],
    witness_inputs: &[Vec<u8>],
    flags: u32,
) -> Result<(), bitcoinconsensus::Error> {
    let mut witness = Witness::new();
    for item in witness_inputs {
        witness.push(item);
    }
    // A P2WSH witness is `<inputs...> <witnessScript>`.
    witness.push(compiled_script);

    let tx = dummy_spending_transaction(witness);
    let mut serialized = Vec::new();
    tx.consensus_encode(&mut serialized)
        .expect("transaction serialization");

    bitcoinconsensus::verify_with_flags(
        p2wsh_script_pubkey(compiled_script).as_bytes(),
        SPENT_AMOUNT,
        &serialized,
        None,
        0,
        flags,
    )
}

/// Executes `compiled_script` as the witness script of a P2WSH input under
/// Bitcoin Core's consensus engine.
///
/// `Ok(())` means Bitcoin Core accepted the spend: the script halted with
/// exactly one truthy stack element under the flags of `flags_in_effect`.
pub fn evaluate_on_consensus(
    compiled_script: &[u8],
    witness_inputs: Vec<Vec<u8>>,
) -> Result<(), bitcoinconsensus::Error> {
    // MINIMALDATA gate (see `flags_in_effect`): a script carrying a
    // non-minimal push is rejected exactly as the flag would reject it.
    if !pushes_are_minimal(compiled_script) {
        return Err(bitcoinconsensus::Error::ERR_SCRIPT);
    }
    raw_verify(compiled_script, &witness_inputs, flags_in_effect())
}

/// Bitcoin Core's `CheckMinimalPush` applied to every push in `script`.
fn pushes_are_minimal(script: &[u8]) -> bool {
    let mut i = 0usize;
    while i < script.len() {
        let op = script[i];
        let (data_start, len) = match op {
            0x01..=0x4b => (i + 1, op as usize),
            0x4c => {
                if i + 1 >= script.len() {
                    return false;
                }
                (i + 2, script[i + 1] as usize)
            }
            0x4d => {
                if i + 2 >= script.len() {
                    return false;
                }
                (
                    i + 3,
                    u16::from_le_bytes([script[i + 1], script[i + 2]]) as usize,
                )
            }
            0x4e => {
                if i + 4 >= script.len() {
                    return false;
                }
                (
                    i + 5,
                    u32::from_le_bytes([script[i + 1], script[i + 2], script[i + 3], script[i + 4]])
                        as usize,
                )
            }
            _ => {
                i += 1;
                continue;
            }
        };
        if data_start + len > script.len() {
            return false;
        }
        let data = &script[data_start..data_start + len];
        // CheckMinimalPush, Bitcoin Core `script.cpp`.
        let minimal = if data.is_empty() {
            false // must be OP_0
        } else if data.len() == 1 && (1..=16).contains(&data[0]) {
            false // must be OP_1..OP_16
        } else if data.len() == 1 && data[0] == 0x81 {
            false // must be OP_1NEGATE
        } else if data.len() <= 75 {
            op as usize == data.len()
        } else if data.len() <= 255 {
            op == 0x4c
        } else if data.len() <= 65535 {
            op == 0x4d
        } else {
            true
        };
        if !minimal {
            return false;
        }
        i = data_start + len;
    }
    true
}

// ===========================================================================
// Keys and signatures
// ===========================================================================

/// Number of distinct key pairs the generator draws public keys from.
const NUM_KEYS: usize = 4;

struct KeyPair {
    secret: SecretKey,
    /// Compressed SEC encoding, as written in the source program.
    pubkey_hex: String,
}

fn keys() -> &'static Vec<KeyPair> {
    static KEYS: OnceLock<Vec<KeyPair>> = OnceLock::new();
    KEYS.get_or_init(|| {
        let secp = Secp256k1::new();
        (0..NUM_KEYS)
            .map(|i| {
                let secret = SecretKey::from_slice(&[(i as u8) + 0x11; 32]).expect("valid key");
                let pubkey = bitcoin::PublicKey::new(secret.public_key(&secp));
                KeyPair {
                    secret,
                    pubkey_hex: pubkey.to_string(),
                }
            })
            .collect()
    })
}

/// A DER-encoded `SIGHASH_ALL` signature over the BIP-143 sighash of the dummy
/// spending transaction for `script`.
fn sign(script: &[u8], key_index: usize) -> Vec<u8> {
    let secp = Secp256k1::new();
    let tx = dummy_spending_transaction(Witness::new());
    let sighash = SighashCache::new(&tx)
        .p2wsh_signature_hash(
            0,
            bitcoin::Script::from_bytes(script),
            Amount::from_sat(SPENT_AMOUNT),
            EcdsaSighashType::All,
        )
        .expect("sighash");
    let signature = secp.sign_ecdsa(
        &Message::from_digest(sighash.to_byte_array()),
        &keys()[key_index].secret,
    );
    let mut bytes = signature.serialize_der().to_vec();
    bytes.push(EcdsaSighashType::All as u8);
    bytes
}

// ===========================================================================
// STEP 2 — The generated program tree (shared by both branches)
// ===========================================================================

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Ty {
    Num,
    Bool,
    Str,
    Sig,
}

impl Ty {
    fn keyword(self) -> &'static str {
        match self {
            Ty::Num => "number",
            Ty::Bool => "bool",
            Ty::Str => "string",
            Ty::Sig => "signature",
        }
    }
}

#[derive(Clone, Copy, Debug)]
enum MathOp {
    Add,
    Sub,
    Max,
    Min,
}

#[derive(Clone, Copy, Debug)]
enum UnMathOp {
    Incr,
    Decr,
    Negate,
    Abs,
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum CmpOp {
    Eq,
    Ne,
    Lt,
    Le,
    Gt,
    Ge,
}

#[derive(Clone, Copy, Debug)]
enum LogicOp {
    And,
    Or,
}

#[derive(Clone, Copy, Debug)]
enum HashOp {
    Sha256,
    Ripemd160,
}

#[derive(Clone, Debug)]
enum Expr {
    /// Witness variable; carries its declared name only for rendering.
    Var(usize),
    Num(i64),
    Bool(bool),
    /// Byte-string literal, rendered as lowercase hex.
    Str(Vec<u8>),
    Math {
        lhs: Box<Expr>,
        op: MathOp,
        rhs: Box<Expr>,
    },
    UnMath {
        op: UnMathOp,
        operand: Box<Expr>,
    },
    Not(Box<Expr>),
    Cmp {
        lhs: Box<Expr>,
        op: CmpOp,
        rhs: Box<Expr>,
    },
    Logic {
        lhs: Box<Expr>,
        op: LogicOp,
        rhs: Box<Expr>,
    },
    Len(Box<Expr>),
    Hash {
        op: HashOp,
        operand: Box<Expr>,
    },
    CheckSig {
        sig: usize,
        key: usize,
    },
}

#[derive(Clone, Debug)]
enum Stmt {
    Verify(Expr),
    Return(Expr),
    After(u32),
    Older(u32),
    If {
        cond: Expr,
        then_block: Vec<Stmt>,
        else_block: Vec<Stmt>,
    },
}

/// What the witness drawer should occasionally supply for a variable so that
/// the interesting (satisfying) side of a predicate is reachable.
#[derive(Clone, Debug)]
enum Hint {
    /// Exact byte string (used for `x == "<lit>"`).
    Bytes(Vec<u8>),
    /// Preimage of a hash literal.
    Preimage(Vec<u8>),
    /// Byte length targeted by a `len(x)` comparison.
    Len(usize),
    /// Numeric value the variable is compared against.
    Num(i64),
}

#[derive(Clone, Debug)]
struct VarDecl {
    name: String,
    ty: Ty,
    hints: Vec<Hint>,
}

#[derive(Debug)]
struct Program {
    vars: Vec<VarDecl>,
    body: Vec<Stmt>,
    /// One declaration per terminating path: the variables consumed on that
    /// path, in consumption order (first-declared sits on top of the stack).
    declarations: Vec<Vec<usize>>,
    source: String,
}

// ---------------------------------------------------------------------------
// Rendering: program tree -> Bithoven source
// ---------------------------------------------------------------------------

fn render_expr(expr: &Expr, vars: &[VarDecl]) -> String {
    match expr {
        Expr::Var(i) => vars[*i].name.clone(),
        Expr::Num(n) => format!("({})", n),
        Expr::Bool(b) => format!("({})", b),
        Expr::Str(bytes) => format!("(\"{}\")", hex::encode(bytes)),
        Expr::Math { lhs, op, rhs } => {
            let l = render_expr(lhs, vars);
            let r = render_expr(rhs, vars);
            match op {
                MathOp::Add => format!("(({}) + ({}))", l, r),
                MathOp::Sub => format!("(({}) - ({}))", l, r),
                MathOp::Max => format!("(max(({}), ({})))", l, r),
                MathOp::Min => format!("(min(({}), ({})))", l, r),
            }
        }
        Expr::UnMath { op, operand } => {
            let o = render_expr(operand, vars);
            match op {
                UnMathOp::Incr => format!("(++({}))", o),
                UnMathOp::Decr => format!("(--({}))", o),
                UnMathOp::Negate => format!("(negate({}))", o),
                UnMathOp::Abs => format!("(abs({}))", o),
            }
        }
        Expr::Not(e) => format!("(!({}))", render_expr(e, vars)),
        Expr::Cmp { lhs, op, rhs } => {
            let symbol = match op {
                CmpOp::Eq => "==",
                CmpOp::Ne => "!=",
                CmpOp::Lt => "<",
                CmpOp::Le => "<=",
                CmpOp::Gt => ">",
                CmpOp::Ge => ">=",
            };
            format!(
                "(({}) {} ({}))",
                render_expr(lhs, vars),
                symbol,
                render_expr(rhs, vars)
            )
        }
        Expr::Logic { lhs, op, rhs } => {
            let symbol = match op {
                LogicOp::And => "&&",
                LogicOp::Or => "||",
            };
            format!(
                "(({}) {} ({}))",
                render_expr(lhs, vars),
                symbol,
                render_expr(rhs, vars)
            )
        }
        Expr::Len(e) => format!("(len({}))", render_expr(e, vars)),
        Expr::Hash { op, operand } => {
            let name = match op {
                HashOp::Sha256 => "sha256",
                HashOp::Ripemd160 => "ripemd160",
            };
            format!("({}({}))", name, render_expr(operand, vars))
        }
        Expr::CheckSig { sig, key } => {
            format!(
                "(checksig({}, \"{}\"))",
                vars[*sig].name,
                keys()[*key].pubkey_hex
            )
        }
    }
}

fn render_block(block: &[Stmt], vars: &[VarDecl], indent: usize) -> String {
    let pad = " ".repeat(indent);
    let mut out = String::new();
    for stmt in block {
        match stmt {
            Stmt::Verify(e) => {
                out.push_str(&format!("{}verify {};\n", pad, render_expr(e, vars)));
            }
            Stmt::Return(e) => {
                out.push_str(&format!("{}return {};\n", pad, render_expr(e, vars)));
            }
            Stmt::After(n) => out.push_str(&format!("{}after {};\n", pad, n)),
            Stmt::Older(n) => out.push_str(&format!("{}older {};\n", pad, n)),
            Stmt::If {
                cond,
                then_block,
                else_block,
            } => {
                out.push_str(&format!("{}if {} {{\n", pad, render_expr(cond, vars)));
                out.push_str(&render_block(then_block, vars, indent + 4));
                out.push_str(&format!("{}}} else {{\n", pad));
                out.push_str(&render_block(else_block, vars, indent + 4));
                out.push_str(&format!("{}}}\n", pad));
            }
        }
    }
    out
}

fn render_program(vars: &[VarDecl], body: &[Stmt], declarations: &[Vec<usize>]) -> String {
    let mut source =
        String::from("pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n");
    for decl in declarations {
        let params: Vec<String> = decl
            .iter()
            .map(|i| format!("{}: {}", vars[*i].name, vars[*i].ty.keyword()))
            .collect();
        source.push_str(&format!("({})\n", params.join(", ")));
    }
    source.push_str("{\n");
    source.push_str(&render_block(body, vars, 4));
    source.push_str("}\n");
    source
}

// ---------------------------------------------------------------------------
// Program generation
// ---------------------------------------------------------------------------

struct Generator {
    rng: StdRng,
    vars: Vec<VarDecl>,
}

/// Preimages the generator uses to build satisfiable hash locks.
const PREIMAGES: [&[u8]; 3] = [b"bithoven-preimage-0", b"bithoven-preimage-1", b"secret"];

impl Generator {
    fn new(seed: u64) -> Self {
        Generator {
            rng: StdRng::seed_from_u64(seed),
            vars: Vec::new(),
        }
    }

    fn fresh(&mut self, ty: Ty, path: &mut Vec<usize>) -> usize {
        let index = self.vars.len();
        let name = format!(
            "{}_{}",
            match ty {
                Ty::Num => "n",
                Ty::Bool => "b",
                Ty::Str => "s",
                Ty::Sig => "sig",
            },
            index
        );
        self.vars.push(VarDecl {
            name,
            ty,
            hints: Vec::new(),
        });
        path.push(index);
        index
    }

    fn hint(&mut self, var: usize, hint: Hint) {
        self.vars[var].hints.push(hint);
    }

    /// A numeric expression. Returns the expression and whether it contains an
    /// arithmetic operator (whose result the range condition of T-BinaryMath
    /// applies to).
    fn gen_num(&mut self, depth: usize, path: &mut Vec<usize>) -> (Expr, bool) {
        let choice = if depth == 0 {
            self.rng.random_range(0..3)
        } else {
            self.rng.random_range(0..8)
        };
        match choice {
            0 => (Expr::Num(self.gen_num_literal()), false),
            1 | 2 => {
                let v = self.fresh(Ty::Num, path);
                (Expr::Var(v), false)
            }
            3 => {
                let v = self.fresh(Ty::Str, path);
                let len = *[0usize, 1, 20, 32, 33].choose(&mut self.rng);
                self.hint(v, Hint::Len(len));
                (Expr::Len(Box::new(Expr::Var(v))), false)
            }
            4 | 5 | 6 => {
                let (lhs, _) = self.gen_num(depth - 1, path);
                let (rhs, _) = self.gen_num(depth - 1, path);
                let op =
                    *[MathOp::Add, MathOp::Sub, MathOp::Max, MathOp::Min].choose(&mut self.rng);
                (
                    Expr::Math {
                        lhs: Box::new(lhs),
                        op,
                        rhs: Box::new(rhs),
                    },
                    true,
                )
            }
            _ => {
                let (operand, _) = self.gen_num(depth - 1, path);
                let op = *[
                    UnMathOp::Incr,
                    UnMathOp::Decr,
                    UnMathOp::Negate,
                    UnMathOp::Abs,
                ]
                .choose(&mut self.rng);
                (
                    Expr::UnMath {
                        op,
                        operand: Box::new(operand),
                    },
                    true,
                )
            }
        }
    }

    fn gen_num_literal(&mut self) -> i64 {
        let pool: [i64; 12] = [
            0,
            1,
            -1,
            2,
            16,
            17,
            127,
            -128,
            65535,
            2_147_483_647,
            -2_147_483_647,
            2_147_483_646,
        ];
        if self.rng.random_bool(0.5) {
            *pool.choose(&mut self.rng)
        } else {
            self.rng.random_range(-1000i64..1000)
        }
    }

    /// A string-valued expression (a variable, a literal or a hash).
    fn gen_str(&mut self, path: &mut Vec<usize>) -> Expr {
        match self.rng.random_range(0..3) {
            0 => {
                let bytes: Vec<u8> = (0..self.rng.random_range(2usize..33))
                    .map(|_| self.rng.random::<u8>())
                    .collect();
                Expr::Str(bytes)
            }
            _ => {
                let v = self.fresh(Ty::Str, path);
                Expr::Var(v)
            }
        }
    }

    fn gen_bool(&mut self, depth: usize, path: &mut Vec<usize>) -> Expr {
        let choice = if depth == 0 {
            self.rng.random_range(0..4)
        } else {
            self.rng.random_range(0..11)
        };
        match choice {
            10 => Expr::Bool(self.rng.random_bool(0.5)),
            0 => {
                let v = self.fresh(Ty::Bool, path);
                Expr::Var(v)
            }
            1 | 2 | 3 => self.gen_num_compare(depth, path),
            4 | 5 => self.gen_str_compare(path),
            6 | 7 => {
                let lhs = self.gen_bool(depth - 1, path);
                let rhs = self.gen_bool(depth - 1, path);
                let op = *[LogicOp::And, LogicOp::Or].choose(&mut self.rng);
                Expr::Logic {
                    lhs: Box::new(lhs),
                    op,
                    rhs: Box::new(rhs),
                }
            }
            8 => Expr::Not(Box::new(self.gen_bool(depth - 1, path))),
            _ => {
                let sig = self.fresh(Ty::Sig, path);
                let key = self.rng.random_range(0..NUM_KEYS);
                Expr::CheckSig { sig, key }
            }
        }
    }

    /// A comparison between numeric operands.
    ///
    /// `==` / `!=` compile to `OP_EQUAL` (byte equality), which is exact on the
    /// canonical `CScriptNum` encodings of witness items, literals and `len`,
    /// so they are only emitted over such operands. An operand containing an
    /// arithmetic operator is compared with a relational operator, which is
    /// where the range condition of T-BinaryMath is observable.
    fn gen_num_compare(&mut self, depth: usize, path: &mut Vec<usize>) -> Expr {
        let (lhs, lhs_arith) = self.gen_num(depth.saturating_sub(1), path);
        let (rhs, rhs_arith) = self.gen_num(depth.saturating_sub(1), path);
        // Hint the variables with the constants they are compared against so
        // that the equality/relational predicate is satisfiable.
        if let (Expr::Var(v), Expr::Num(n)) = (&lhs, &rhs) {
            let (v, n) = (*v, *n);
            self.hint(v, Hint::Num(n));
        }
        if let (Expr::Num(n), Expr::Var(v)) = (&lhs, &rhs) {
            let (v, n) = (*v, *n);
            self.hint(v, Hint::Num(n));
        }
        // Equality over an arithmetic operand used to be excluded here: `OP_ADD`
        // does not range-check its result, so `OP_EQUAL` would compare a
        // five-byte value bytewise while the abstract machine had already
        // stepped to bottom -- the script accepting where the source rejects.
        // `compile_expression` now emits `OP_NUMEQUAL`/`OP_NUMNOTEQUAL` whenever
        // an operand may leave the CScriptNum range, so the shape is sound and
        // is generated like any other. `lhs_arith`/`rhs_arith` are retained
        // because the pinning test below depends on the shape being reachable.
        let _ = (lhs_arith, rhs_arith);
        let op = *[
            CmpOp::Eq,
            CmpOp::Ne,
            CmpOp::Lt,
            CmpOp::Le,
            CmpOp::Gt,
            CmpOp::Ge,
        ]
        .choose(&mut self.rng);
        Expr::Cmp {
            lhs: Box::new(lhs),
            op,
            rhs: Box::new(rhs),
        }
    }

    /// A byte-string comparison: a hash lock, or equality against a literal.
    fn gen_str_compare(&mut self, path: &mut Vec<usize>) -> Expr {
        let op = *[CmpOp::Eq, CmpOp::Ne].choose(&mut self.rng);
        if self.rng.random_bool(0.7) {
            // Hash lock: `sha256(x) == <digest>` / `ripemd160(x) == <digest>`.
            let preimage = PREIMAGES[self.rng.random_range(0..PREIMAGES.len())].to_vec();
            let hash_op = *[HashOp::Sha256, HashOp::Ripemd160].choose(&mut self.rng);
            let v = self.fresh(Ty::Str, path);
            self.hint(v, Hint::Preimage(preimage.clone()));
            let digest = match hash_op {
                HashOp::Sha256 => sha256::Hash::hash(&preimage).to_byte_array().to_vec(),
                HashOp::Ripemd160 => ripemd160::Hash::hash(&preimage).to_byte_array().to_vec(),
            };
            Expr::Cmp {
                lhs: Box::new(Expr::Hash {
                    op: hash_op,
                    operand: Box::new(Expr::Var(v)),
                }),
                op,
                rhs: Box::new(Expr::Str(digest)),
            }
        } else {
            let v = self.fresh(Ty::Str, path);
            let literal: Vec<u8> = (0..self.rng.random_range(2usize..33))
                .map(|_| self.rng.random::<u8>())
                .collect();
            self.hint(v, Hint::Bytes(literal.clone()));
            let other = self.gen_str(path);
            let _ = &other; // keep the generator's string constructor exercised
            Expr::Cmp {
                lhs: Box::new(Expr::Var(v)),
                op,
                rhs: Box::new(Expr::Str(literal)),
            }
        }
    }

    /// Generates one block, appending one declaration per terminating path.
    fn gen_block(
        &mut self,
        depth: usize,
        path: &mut Vec<usize>,
        declarations: &mut Vec<Vec<usize>>,
    ) -> Vec<Stmt> {
        let mut block = Vec::new();

        for _ in 0..self.rng.random_range(0..3) {
            match self.rng.random_range(0..6) {
                0 => block.push(Stmt::After(self.rng.random_range(1u32..600_000))),
                1 => block.push(Stmt::Older(self.rng.random_range(1u32..70_000))),
                _ => {
                    let cond = self.gen_bool(2, path);
                    block.push(Stmt::Verify(cond));
                }
            }
        }

        if depth > 0 && self.rng.random_bool(0.6) {
            let cond = self.gen_bool(2, path);
            let mut then_path = path.clone();
            let then_block = self.gen_block(depth - 1, &mut then_path, declarations);
            let mut else_path = path.clone();
            let else_block = self.gen_block(depth - 1, &mut else_path, declarations);
            block.push(Stmt::If {
                cond,
                then_block,
                else_block,
            });
        } else {
            // Every terminating path returns a signature check, so that the
            // signature-necessity analysis accepts the program.
            let sig = self.fresh(Ty::Sig, path);
            let key = self.rng.random_range(0..NUM_KEYS);
            let checksig = Expr::CheckSig { sig, key };
            let ret = if self.rng.random_bool(0.3) {
                let rhs = self.gen_bool(1, path);
                Expr::Logic {
                    lhs: Box::new(checksig),
                    op: LogicOp::And,
                    rhs: Box::new(rhs),
                }
            } else {
                checksig
            };
            block.push(Stmt::Return(ret));
            declarations.push(path.clone());
        }

        block
    }

    fn gen_program(&mut self) -> Program {
        self.vars.clear();
        let mut declarations: Vec<Vec<usize>> = Vec::new();
        let mut path: Vec<usize> = Vec::new();
        let depth = self.rng.random_range(0..3);
        let body = self.gen_block(depth, &mut path, &mut declarations);
        let source = render_program(&self.vars, &body, &declarations);
        Program {
            vars: self.vars.clone(),
            body,
            declarations,
            source,
        }
    }
}

/// Minimal `choose` helper (avoids pulling in `rand::seq`).
trait ChooseExt<T> {
    fn choose(&self, rng: &mut StdRng) -> &T;
}

impl<T> ChooseExt<T> for [T] {
    fn choose(&self, rng: &mut StdRng) -> &T {
        &self[rng.random_range(0..self.len())]
    }
}

// ===========================================================================
// Witness generation
// ===========================================================================

/// A witness item, before the signatures are bound to a concrete script.
#[derive(Clone, Debug, PartialEq, Eq)]
enum WitnessValue {
    Bytes(Vec<u8>),
    /// A signature slot: `valid` decides between a well-formed signature for
    /// `key` and the empty vector (the concrete realisation of a false
    /// `checksig` atom).
    Signature {
        key: usize,
        valid: bool,
    },
}

/// A witness item bound to a concrete script: the bytes both branches see, plus
/// the key the item is a valid signature for (signature verification is
/// modelled, not performed, in the abstract machine).
#[derive(Clone, Debug, PartialEq, Eq)]
struct ResolvedInput {
    bytes: Vec<u8>,
    signs_for: Option<usize>,
}

impl WitnessValue {
    /// Binds the item to `script`: a valid signature slot becomes a DER
    /// signature over the BIP-143 sighash, an invalid one the empty vector.
    fn resolve(&self, script: &[u8]) -> ResolvedInput {
        match self {
            WitnessValue::Bytes(b) => ResolvedInput {
                bytes: b.clone(),
                signs_for: None,
            },
            WitnessValue::Signature { key, valid } => {
                if *valid {
                    ResolvedInput {
                        bytes: sign(script, *key),
                        signs_for: Some(*key),
                    }
                } else {
                    ResolvedInput {
                        bytes: Vec::new(),
                        signs_for: None,
                    }
                }
            }
        }
    }
}

/// Draws a value for `var`, biased towards the `CScriptNum` boundary, the
/// empty vector and negative zero.
fn draw_value(rng: &mut StdRng, var: &VarDecl) -> WitnessValue {
    match var.ty {
        Ty::Sig => WitnessValue::Signature {
            key: rng.random_range(0..NUM_KEYS),
            valid: rng.random_bool(0.85),
        },
        Ty::Bool => {
            // Truthiness edges: the empty vector, negative zero and 0x00 are
            // all false; 0x01 is the canonical true.
            let choice: [&[u8]; 5] = [&[], &[1], &[0x80], &[0x00], &[1]];
            WitnessValue::Bytes(choice[rng.random_range(0..choice.len())].to_vec())
        }
        Ty::Num => {
            if let Some(Hint::Num(n)) = var
                .hints
                .iter()
                .find(|h| matches!(h, Hint::Num(_)))
                .filter(|_| rng.random_bool(0.55))
            {
                return WitnessValue::Bytes(encode_num(*n));
            }
            let boundary: [i64; 10] = [
                0,
                1,
                -1,
                16,
                127,
                65535,
                2_147_483_647,
                -2_147_483_647,
                2_147_483_646,
                -2_147_483_646,
            ];
            let n = if rng.random_bool(0.6) {
                boundary[rng.random_range(0..boundary.len())]
            } else {
                rng.random_range(-2_147_483_647i64..2_147_483_648)
            };
            WitnessValue::Bytes(encode_num(n))
        }
        Ty::Str => {
            let hint = var
                .hints
                .iter()
                .find(|h| matches!(h, Hint::Preimage(_) | Hint::Bytes(_) | Hint::Len(_)));
            match hint {
                Some(Hint::Preimage(p)) if rng.random_bool(0.6) => WitnessValue::Bytes(p.clone()),
                Some(Hint::Bytes(b)) if rng.random_bool(0.6) => WitnessValue::Bytes(b.clone()),
                Some(Hint::Len(n)) if rng.random_bool(0.6) => {
                    WitnessValue::Bytes((0..*n).map(|_| rng.random::<u8>()).collect())
                }
                _ => {
                    let len = rng.random_range(0usize..34);
                    WitnessValue::Bytes((0..len).map(|_| rng.random::<u8>()).collect())
                }
            }
        }
    }
}

/// `CScriptNum::serialize` — minimal sign-magnitude little-endian encoding.
fn encode_num(value: i64) -> Vec<u8> {
    if value == 0 {
        return Vec::new();
    }
    let mut result = Vec::new();
    let negative = value < 0;
    let mut absolute = value.unsigned_abs();
    while absolute > 0 {
        result.push((absolute & 0xff) as u8);
        absolute >>= 8;
    }
    if result.last().unwrap() & 0x80 != 0 {
        result.push(if negative { 0x80 } else { 0 });
    } else if negative {
        *result.last_mut().unwrap() |= 0x80;
    }
    result
}

/// `CScriptNum(vch, fRequireMinimal=false, nMaxNumSize=4)`.
///
/// `None` is the coercion failure: Bitcoin Core throws `scriptnum_error` for
/// operands wider than four bytes, which `EvalScript` turns into a script
/// abort, and the abstract machine steps to `⊥`.
fn decode_num(bytes: &[u8]) -> Option<i64> {
    if bytes.len() > 4 {
        return None;
    }
    if bytes.is_empty() {
        return Some(0);
    }
    let mut result: i64 = 0;
    for (i, byte) in bytes.iter().enumerate() {
        result |= (*byte as i64) << (8 * i);
    }
    if bytes[bytes.len() - 1] & 0x80 != 0 {
        let mask = !(0x80i64 << (8 * (bytes.len() - 1)));
        return Some(-(result & mask));
    }
    Some(result)
}

/// Bitcoin Core's `CastToBool`.
fn cast_to_bool(bytes: &[u8]) -> bool {
    for (i, byte) in bytes.iter().enumerate() {
        if *byte != 0 {
            if i == bytes.len() - 1 && *byte == 0x80 {
                return false;
            }
            return true;
        }
    }
    false
}

/// The `CScriptNum` range of Definition (well-typed value).
fn in_range(value: i64) -> bool {
    value.abs() <= 2_147_483_647
}

// ===========================================================================
// STEP 2, Branch A — reference interpreter of the abstract semantics
// ===========================================================================

/// Terminal failure states of the abstract machine.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Bottom {
    /// An arithmetic result left the `CScriptNum` range (T-BinaryMath /
    /// T-UnaryMath range condition).
    OutOfRange,
    /// A value could not be coerced to a `num` (wider than four bytes).
    Coercion,
    /// `verify` on a false value, or a locktime that the transaction does not
    /// satisfy.
    Verify,
    /// The witness does not match the path taken: too few items, or items left
    /// unconsumed at the end (the CLEANSTACK condition).
    WitnessMismatch,
}

struct Machine<'a> {
    /// Witness stack in consumption order: index 0 is the top of the stack.
    inputs: &'a [ResolvedInput],
    cursor: usize,
    /// Set when the run passed through an out-of-range arithmetic result.
    out_of_range: bool,
}

impl<'a> Machine<'a> {
    fn next_input(&mut self) -> Result<&'a ResolvedInput, Bottom> {
        let value = self
            .inputs
            .get(self.cursor)
            .ok_or(Bottom::WitnessMismatch)?;
        self.cursor += 1;
        Ok(value)
    }

    fn eval(&mut self, expr: &Expr) -> Result<Vec<u8>, Bottom> {
        match expr {
            Expr::Var(_) => Ok(self.next_input()?.bytes.clone()),
            Expr::Num(n) => Ok(encode_num(*n)),
            Expr::Bool(b) => Ok(encode_num(*b as i64)),
            Expr::Str(bytes) => Ok(bytes.clone()),
            Expr::Math { lhs, op, rhs } => {
                let lhs = self.eval(lhs)?;
                let rhs = self.eval(rhs)?;
                let a = decode_num(&lhs).ok_or(Bottom::Coercion)?;
                let b = decode_num(&rhs).ok_or(Bottom::Coercion)?;
                let value = match op {
                    MathOp::Add => a + b,
                    MathOp::Sub => a - b,
                    MathOp::Max => a.max(b),
                    MathOp::Min => a.min(b),
                };
                if !in_range(value) {
                    self.out_of_range = true;
                    return Err(Bottom::OutOfRange);
                }
                Ok(encode_num(value))
            }
            Expr::UnMath { op, operand } => {
                let operand = self.eval(operand)?;
                let a = decode_num(&operand).ok_or(Bottom::Coercion)?;
                let value = match op {
                    UnMathOp::Incr => a + 1,
                    UnMathOp::Decr => a - 1,
                    UnMathOp::Negate => -a,
                    UnMathOp::Abs => a.abs(),
                };
                if !in_range(value) {
                    self.out_of_range = true;
                    return Err(Bottom::OutOfRange);
                }
                Ok(encode_num(value))
            }
            Expr::Not(e) => {
                let value = self.eval(e)?;
                // OP_NOT coerces its operand to a number.
                let n = decode_num(&value).ok_or(Bottom::Coercion)?;
                Ok(encode_num((n == 0) as i64))
            }
            Expr::Cmp { lhs, op, rhs } => {
                let lhs = self.eval(lhs)?;
                let rhs = self.eval(rhs)?;
                let result = match op {
                    // OP_EQUAL is byte equality.
                    CmpOp::Eq => lhs == rhs,
                    CmpOp::Ne => lhs != rhs,
                    _ => {
                        let a = decode_num(&lhs).ok_or(Bottom::Coercion)?;
                        let b = decode_num(&rhs).ok_or(Bottom::Coercion)?;
                        match op {
                            CmpOp::Lt => a < b,
                            CmpOp::Le => a <= b,
                            CmpOp::Gt => a > b,
                            CmpOp::Ge => a >= b,
                            _ => unreachable!(),
                        }
                    }
                };
                Ok(encode_num(result as i64))
            }
            Expr::Logic { lhs, op, rhs } => {
                let lhs = self.eval(lhs)?;
                let rhs = self.eval(rhs)?;
                // OP_BOOLAND / OP_BOOLOR coerce both operands to numbers.
                let a = decode_num(&lhs).ok_or(Bottom::Coercion)? != 0;
                let b = decode_num(&rhs).ok_or(Bottom::Coercion)? != 0;
                let result = match op {
                    LogicOp::And => a && b,
                    LogicOp::Or => a || b,
                };
                Ok(encode_num(result as i64))
            }
            Expr::Len(e) => {
                let value = self.eval(e)?;
                Ok(encode_num(value.len() as i64))
            }
            Expr::Hash { op, operand } => {
                let value = self.eval(operand)?;
                Ok(match op {
                    HashOp::Sha256 => sha256::Hash::hash(&value).to_byte_array().to_vec(),
                    HashOp::Ripemd160 => ripemd160::Hash::hash(&value).to_byte_array().to_vec(),
                })
            }
            Expr::CheckSig { key, .. } => {
                let item = self.next_input()?;
                // Signature verification is modelled: the item verifies iff it
                // is the signature slot bound to this key.
                let result = item.signs_for == Some(*key);
                Ok(encode_num(result as i64))
            }
        }
    }

    /// Executes a block. `Ok(Some(v))` is a `return`, `Ok(None)` means the
    /// block ran off its end (not reachable for accepted programs).
    fn exec(&mut self, block: &[Stmt]) -> Result<Option<Vec<u8>>, Bottom> {
        for stmt in block {
            match stmt {
                Stmt::Verify(e) => {
                    let value = self.eval(e)?;
                    if !cast_to_bool(&value) {
                        return Err(Bottom::Verify);
                    }
                }
                Stmt::Return(e) => return Ok(Some(self.eval(e)?)),
                Stmt::After(n) => {
                    // OP_CHECKLOCKTIMEVERIFY against the dummy transaction:
                    // both locktimes must be of the same kind and the
                    // transaction's must be the later one.
                    let height_based = *n < 500_000_000;
                    if !height_based || *n > TX_LOCKTIME {
                        return Err(Bottom::Verify);
                    }
                }
                Stmt::Older(n) => {
                    // OP_CHECKSEQUENCEVERIFY against the dummy input.
                    if *n > (TX_SEQUENCE & 0x0000_FFFF) {
                        return Err(Bottom::Verify);
                    }
                }
                Stmt::If {
                    cond,
                    then_block,
                    else_block,
                } => {
                    let value = self.eval(cond)?;
                    return if cast_to_bool(&value) {
                        self.exec(then_block)
                    } else {
                        self.exec(else_block)
                    };
                }
            }
        }
        Ok(None)
    }
}

/// The verdict of one execution.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
struct Verdict {
    success: bool,
    /// The run reached `⊥` through an out-of-range arithmetic result.
    out_of_range: bool,
}

/// Branch A: run `program` under the abstract semantics.
fn eval_program(program: &Program, inputs: &[ResolvedInput]) -> Verdict {
    let mut machine = Machine {
        inputs,
        cursor: 0,
        out_of_range: false,
    };
    let outcome = machine.exec(&program.body);
    let success = match outcome {
        // Success requires a truthy result *and* an exhausted witness: the
        // compiled script is executed under the CLEANSTACK condition, so any
        // unconsumed item is a failure.
        Ok(Some(value)) => cast_to_bool(&value) && machine.cursor == inputs.len(),
        Ok(None) => false,
        Err(_) => false,
    };
    Verdict {
        success,
        out_of_range: machine.out_of_range,
    }
}

// ===========================================================================
// STEP 2 — the differential campaign
// ===========================================================================

#[derive(Debug, Default, Clone)]
struct Metrics {
    /// Number of generated programs the analyzer accepted (N).
    programs: usize,
    /// Number of programs the analyzer rejected (not part of the corpus).
    rejected: usize,
    /// Total executions (M).
    executions: usize,
    /// Seeds (S_d).
    seeds: usize,
    /// Discrepancies between Branch A and Branch B in the *security* direction
    /// (d): consensus accepted an execution the abstract machine rejects. This
    /// is the direction Theorem 1 forbids, and the one the campaign asserts.
    discrepancies: usize,
    /// Executions in the *liveness* direction: the abstract machine succeeded
    /// while consensus failed. The paper claims the converse only for
    /// arithmetic-free programs, so these are counted and reported, not
    /// asserted. They arise when a witness declared for one spending path
    /// drives another and supplies a value that is not well-typed for the
    /// variable it lands on -- a six-byte item read where a `number` is
    /// expected, say, which a numeric opcode aborts on while the reference
    /// interpreter reads it positionally.
    liveness_gaps: usize,
    /// Executions whose abstract run reached `⊥` by out-of-range arithmetic.
    out_of_range: usize,
    /// Of those, the ones Bitcoin Core independently failed.
    out_of_range_consensus_failed: usize,
    /// Executions both branches accepted.
    successes: usize,
    /// Index (1-based) of the first security-direction discrepancy, if any.
    first_discrepancy: Option<usize>,
    /// Index of the first disagreement in *either* direction. The mutation
    /// analysis uses this rather than `first_discrepancy`: it asks whether the
    /// harness notices an injected compiler defect at all, and a mutant that
    /// makes correct scripts fail on chain is noticed just as surely as one
    /// that makes incorrect scripts pass. The directional split belongs to what
    /// is asserted of the *unmutated* compiler, not to how sensitivity is
    /// measured.
    first_disagreement: Option<usize>,
    /// Example sources of disagreeing executions (bounded, for diagnostics).
    examples: Vec<String>,
    /// Up to three liveness gaps, reported alongside the security examples.
    liveness_examples: Vec<String>,
}

/// Number of generated programs per seed.
const PROGRAMS_PER_SEED: usize = 128;
/// Number of witness assignments executed per accepted program.
const EXECUTIONS_PER_PROGRAM: usize = 40;
/// The seeds of the campaign (S_d).
const SEEDS: [u64; 8] = [
    0x0000_0001,
    0x0000_002A,
    0x0000_B17C,
    0x00C0_FFEE,
    0xDEAD_BEEF,
    0x1337_1337,
    0x5EED_5EED,
    0xFACE_B00C,
];

/// Runs the full campaign: for every seed, generate programs, keep the ones the
/// analyzer accepts, and execute each under both branches.
fn run_campaign() -> Metrics {
    let mut metrics = Metrics {
        seeds: SEEDS.len(),
        ..Default::default()
    };

    for seed in SEEDS {
        let mut generator = Generator::new(seed);
        let mut rng = StdRng::seed_from_u64(seed ^ 0xA5A5_A5A5);

        for _ in 0..PROGRAMS_PER_SEED {
            let program = generator.gen_program();
            let compiled = match bithoven::compile_program(program.source.clone()) {
                Ok(output) => output.bytes(),
                Err(_) => {
                    // Only programs the analyzer accepts enter the corpus.
                    metrics.rejected += 1;
                    continue;
                }
            };
            metrics.programs += 1;

            for _ in 0..EXECUTIONS_PER_PROGRAM {
                // Pick a declaration (a spending path) and draw a witness for it.
                let declaration =
                    &program.declarations[rng.random_range(0..program.declarations.len())];
                let inputs: Vec<WitnessValue> = declaration
                    .iter()
                    .map(|v| draw_value(&mut rng, &program.vars[*v]))
                    .collect();

                // Both branches see exactly the same witness bytes.
                let resolved: Vec<ResolvedInput> = inputs
                    .iter()
                    .map(|value| value.resolve(&compiled))
                    .collect();

                // Branch A: the abstract machine.
                let abstract_verdict = eval_program(&program, &resolved);

                // Branch B: the emitted script under Bitcoin Core.
                let witness: Vec<Vec<u8>> = resolved
                    .iter()
                    .rev() // first-declared sits on top, i.e. is pushed last
                    .map(|item| item.bytes.clone())
                    .collect();
                let consensus = evaluate_on_consensus(&compiled, witness);

                metrics.executions += 1;
                if abstract_verdict.out_of_range {
                    metrics.out_of_range += 1;
                    if consensus.is_err() {
                        metrics.out_of_range_consensus_failed += 1;
                    }
                }
                if abstract_verdict.success && consensus.is_ok() {
                    metrics.successes += 1;
                }
                // Theorem 1 is one-directional: if the emitted script succeeds,
                // the source must succeed. The converse is claimed only for
                // arithmetic-free programs, so the two directions are separated
                // here rather than folded into a single equality.
                match (consensus.is_ok(), abstract_verdict.success) {
                    (true, false) => {
                        metrics.discrepancies += 1;
                        if metrics.first_discrepancy.is_none() {
                            metrics.first_discrepancy = Some(metrics.executions);
                        }
                        if metrics.first_disagreement.is_none() {
                            metrics.first_disagreement = Some(metrics.executions);
                        }
                        if metrics.examples.len() < 3 {
                            metrics.examples.push(format!(
                                "SECURITY abstract={} consensus={:?}\nwitness={:?}\n{}",
                                abstract_verdict.success, consensus, inputs, program.source
                            ));
                        }
                    }
                    (false, true) => {
                        metrics.liveness_gaps += 1;
                        if metrics.first_disagreement.is_none() {
                            metrics.first_disagreement = Some(metrics.executions);
                        }
                        if metrics.liveness_examples.len() < 3 {
                            metrics.liveness_examples.push(format!(
                                "LIVENESS abstract={} consensus={:?}\nwitness={:?}\n{}",
                                abstract_verdict.success, consensus, inputs, program.source
                            ));
                        }
                    }
                    _ => {}
                }
            }
        }
    }

    metrics
}

fn metrics_to_json(metrics: &Metrics) -> String {
    let mut map: BTreeMap<&str, String> = BTreeMap::new();
    map.insert("programs_N", metrics.programs.to_string());
    map.insert("programs_rejected", metrics.rejected.to_string());
    map.insert("executions_M", metrics.executions.to_string());
    map.insert("seeds_Sd", metrics.seeds.to_string());
    map.insert("discrepancies_d", metrics.discrepancies.to_string());
    map.insert("overflow_bot_M", metrics.out_of_range.to_string());
    map.insert(
        "overflow_bot_consensus_failed",
        metrics.out_of_range_consensus_failed.to_string(),
    );
    map.insert("successes", metrics.successes.to_string());
    map.insert("liveness_gaps", metrics.liveness_gaps.to_string());
    map.insert(
        "first_disagreement",
        match metrics.first_disagreement {
            Some(index) => index.to_string(),
            None => "null".to_string(),
        },
    );
    map.insert(
        "first_discrepancy",
        match metrics.first_discrepancy {
            Some(index) => index.to_string(),
            None => "null".to_string(),
        },
    );
    let body: Vec<String> = map
        .iter()
        .map(|(key, value)| format!("  \"{}\": {}", key, value))
        .collect();
    format!("{{\n{}\n}}\n", body.join(",\n"))
}

// ===========================================================================
// Tests
// ===========================================================================

/// Unit checks of the harness itself (Step 1).
#[test]
fn consensus_harness_agrees_with_hand_written_scripts() {
    let script = bitcoin::script::Builder::new()
        .push_opcode(bitcoin::opcodes::all::OP_ADD)
        .push_int(5)
        .push_opcode(bitcoin::opcodes::all::OP_EQUAL)
        .into_bytes();

    assert!(evaluate_on_consensus(&script, vec![vec![2], vec![3]]).is_ok());
    assert!(evaluate_on_consensus(&script, vec![vec![2], vec![4]]).is_err());
    // A five-byte operand exceeds the CScriptNum width: consensus aborts.
    assert!(evaluate_on_consensus(&script, vec![vec![1, 2, 3, 4, 5], vec![3]]).is_err());
}

#[test]
fn leftover_witness_item_fails_cleanstack() {
    // Witness-v0 execution requires a single element on the final stack, which
    // is the CLEANSTACK condition of the paper's flag set.
    let script = bitcoin::script::Builder::new().push_int(1).into_bytes();
    assert!(evaluate_on_consensus(&script, vec![]).is_ok());
    assert!(evaluate_on_consensus(&script, vec![vec![1]]).is_err());
}

#[test]
fn checksig_is_verified_by_consensus() {
    let script = bitcoin::script::Builder::new()
        .push_slice(
            <&bitcoin::script::PushBytes>::try_from(
                hex::decode(&keys()[0].pubkey_hex).unwrap().as_slice(),
            )
            .unwrap(),
        )
        .push_opcode(bitcoin::opcodes::all::OP_CHECKSIG)
        .into_bytes();
    assert!(evaluate_on_consensus(&script, vec![sign(&script, 0)]).is_ok());
    assert!(evaluate_on_consensus(&script, vec![sign(&script, 1)]).is_err());
    assert!(evaluate_on_consensus(&script, vec![Vec::new()]).is_err());
}

/// Equality over an arithmetic operand must not accept where the abstract
/// machine fails.
///
/// `OP_ADD` does not range-check its own result, so with two maximal operands it
/// leaves a five-byte value on the stack. Compiled with `OP_EQUAL` that value is
/// compared bytewise, the comparison yields false, `OP_NOT` inverts it and the
/// script succeeds -- while the reference interpreter has already stepped to
/// bottom. That is a script accepting where the source rejects, the direction
/// Theorem 1 forbids. `compile_expression` therefore emits the coercing opcode
/// here, and consensus fails the script as the semantics requires.
///
/// This test fails against a compiler that emits `OP_EQUAL` unconditionally.
/// Its converse -- that the coercion does not fire where no operand can leave
/// the range -- is pinned by `equality_without_arithmetic_stays_byte_equality`,
/// so the pair fixes the clause in both directions.
#[test]
fn equality_over_arithmetic_does_not_accept_out_of_range() {
    let source = format!(
        "pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n\n(s: signature, x: number, y: number)\n{{ return checksig(s, \"{}\") && !((x + y) == 5); }}\n",
        keys()[0].pubkey_hex
    );
    let output = bithoven::compile_program(source).expect("program is accepted");
    let script = output.bytes();

    // The emitted comparison must coerce, or the five-byte sum is compared bytewise.
    assert!(
        script.contains(&bitcoin::opcodes::all::OP_NUMEQUAL.to_u8()),
        "equality over an arithmetic operand must compile to OP_NUMEQUAL"
    );

    // Witness: first-declared item on top, so [y, x, sig] bottom-to-top.
    let max = encode_num(2_147_483_647);
    let witness = vec![max.clone(), max, sign(&script, 0)];
    assert!(
        evaluate_on_consensus(&script, witness).is_err(),
        "consensus accepted an out-of-range sum that the abstract machine rejects"
    );
}

/// The numeric coercion must fire exactly where Fig. 3 says it does, and nowhere
/// else -- the converse half of the clause the previous test pins.
///
/// A compiler that emitted `OP_NUMEQUAL` unconditionally would satisfy the
/// positive direction while breaking every byte-string comparison, since
/// `OP_NUMEQUAL` faults on a 32-byte digest. This test therefore asserts the
/// absence of the numeric opcodes on operands no arithmetic can reach, and the
/// presence of byte equality, on both a digest comparison and a plain numeric
/// one.
///
/// It also pins the case the paper's earlier wording got wrong: the test is
/// syntactic over the whole operand subtree, so a hash applied to a sum *does*
/// coerce, even though the comparison is over a byte string. That is the safe
/// direction -- `OP_NUMEQUAL` faults on the digest, so the script is
/// unspendable, whereas `OP_EQUAL` there would let the negated comparison
/// succeed on consensus while the abstract machine is at bottom.
#[test]
fn equality_without_arithmetic_stays_byte_equality() {
    let numequal = bitcoin::opcodes::all::OP_NUMEQUAL.to_u8();
    let numnotequal = bitcoin::opcodes::all::OP_NUMNOTEQUAL.to_u8();
    let equal = bitcoin::opcodes::all::OP_EQUAL.to_u8();
    let equalverify = bitcoin::opcodes::all::OP_EQUALVERIFY.to_u8();
    let key = &keys()[0].pubkey_hex;

    // A hash lock over a bare variable: no arithmetic anywhere in either
    // operand, so byte equality must be retained.
    let digest = "84126d0dd850199be29021aadbaee68cb9199047b1cb7ec9894ddb1e3562783c";
    let hash_lock = format!(
        "pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n\n(p: string, s: signature)\n{{ verify sha256 p == \"{digest}\"; return checksig(s, \"{key}\"); }}\n"
    );
    let script = bithoven::compile_program(hash_lock)
        .expect("hash lock is accepted")
        .bytes();
    assert!(
        !script.contains(&numequal) && !script.contains(&numnotequal),
        "a hash lock over a bare variable must not be coerced to a numeric comparison"
    );
    assert!(
        script.contains(&equalverify),
        "a hash lock over a bare variable must keep byte equality"
    );

    // A numeric comparison whose operands are a declared item and a literal:
    // still no arithmetic operator, so still byte equality.
    let plain = format!(
        "pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n\n(s: signature, n: number)\n{{ return checksig(s, \"{key}\") && (n == 5); }}\n"
    );
    let script = bithoven::compile_program(plain)
        .expect("plain comparison is accepted")
        .bytes();
    assert!(
        !script.contains(&numequal) && !script.contains(&numnotequal),
        "a comparison no arithmetic can reach must not be coerced"
    );
    assert!(
        script.contains(&equal) || script.contains(&equalverify),
        "a comparison no arithmetic can reach must keep byte equality"
    );

    // Arithmetic beneath a hash: the operand is a byte string, but the subtree
    // contains `+`, so the coercion fires. Fig. 3's condition is over the
    // subtree, not over the operand's type.
    let hashed_sum = format!(
        "pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n\n(x: number, y: number, s: signature)\n{{ verify sha256 (x + y) == \"{digest}\"; return checksig(s, \"{key}\"); }}\n"
    );
    let script = bithoven::compile_program(hashed_sum)
        .expect("a hash over a sum is accepted")
        .bytes();
    assert!(
        script.contains(&bitcoin::opcodes::all::OP_NUMEQUALVERIFY.to_u8()),
        "arithmetic beneath a hash must still coerce the comparison"
    );

    // And the coerced script is unspendable rather than wrongly spendable: the
    // numeric opcode faults on the 32-byte digest, so consensus rejects it.
    // Witness: first-declared item on top, so [sig, y, x] bottom-to-top.
    let max = encode_num(2_147_483_647);
    let witness = vec![sign(&script, 0), max.clone(), max];
    assert!(
        evaluate_on_consensus(&script, witness).is_err(),
        "a numeric comparison over a digest must fail on consensus"
    );
}

/// The shipped example contracts compile and are executable on consensus.
#[test]
fn shipped_examples_compile() {
    let mut compiled = 0;
    for entry in std::fs::read_dir("example").expect("example directory") {
        let path = entry.expect("dir entry").path();
        if path.extension().and_then(|e| e.to_str()) != Some("bithoven") {
            continue;
        }
        let source = std::fs::read_to_string(&path).expect("read example");
        if let Ok(output) = bithoven::compile_program(source) {
            assert!(
                pushes_are_minimal(&output.bytes()),
                "{:?} emits a non-minimal push",
                path
            );
            compiled += 1;
        }
    }
    assert!(compiled > 0, "no example contract compiled");
}

/// STEP 2 — the baseline differential campaign. Branch A and Branch B must
/// agree on every execution.
#[test]
fn differential_campaign() {
    let metrics = run_campaign();

    println!("{}", metrics_to_json(&metrics));
    for example in &metrics.examples {
        println!("--- security discrepancy ---\n{}", example);
    }
    for example in &metrics.liveness_examples {
        println!("--- liveness gap (reported, not asserted) ---\n{}", example);
    }

    let path = std::env::var("BITHOVEN_DIFF_OUT").unwrap_or_else(|_| "/dev/null".to_string());
    if path != "/dev/null" {
        std::fs::write(&path, metrics_to_json(&metrics)).expect("write metrics");
    }

    let mutation_mode = std::env::var("BITHOVEN_DIFF_MODE").as_deref() == Ok("mutation");
    if mutation_mode {
        // A mutation run records the detections instead of asserting agreement;
        // every other invariant below is a property of the *unmutated*
        // compiler and cannot be expected to hold of a mutant.
        return;
    }

    assert!(
        metrics.programs > 0 && metrics.executions > 0,
        "the corpus is empty"
    );
    // A campaign in which nothing ever succeeds would agree vacuously.
    assert!(
        metrics.successes * 20 > metrics.executions,
        "too few accepted spends ({} of {}) for the campaign to be meaningful",
        metrics.successes,
        metrics.executions
    );
    assert!(
        metrics.out_of_range > 0,
        "no execution exercised the CScriptNum range condition"
    );
    assert_eq!(
        metrics.out_of_range, metrics.out_of_range_consensus_failed,
        "an out-of-range (\u{22a5}) run was accepted by Bitcoin Core"
    );
    // Only the security direction is asserted: consensus accepting where the
    // abstract machine rejects contradicts Theorem 1. Liveness gaps are
    // reported above; the paper claims the converse only for arithmetic-free
    // programs.
    assert_eq!(
        metrics.discrepancies, 0,
        "consensus accepted {} of {} executions the abstract machine rejects",
        metrics.discrepancies, metrics.executions
    );
}

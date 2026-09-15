//! Defect benchmark over the BSHunter taxonomy (§V of the BSHunter paper).
//!
//! This harness produces the figures reported in `sec:defects` / `tab:defects`
//! of `main.tex`. Coverage of the taxonomy is complete: the unit is the defect
//! *class*, not a sample of contracts, so all six classes appear exactly once.
//!
//! For every class we re-express, in Bithoven, one on-chain exemplar, together
//! with the corrected policy the contract was evidently meant to encode. The
//! exemplar is not chosen by us: it is the first entry of the class file of the
//! defect corpus shipped in `bshunter/TxOutputJson/` (383,544 defective outputs
//! over the six classes) that carries a contract rather than a data carrier,
//! the rule being re-derived by `scripts/exemplar_selection.py`. The exemplar
//! is reproduced verbatim in the comment above each class, with the transaction
//! it was taken from, so the provenance is checkable without network access. Because Bithoven analyses source and deployed contracts exist only
//! as compiled Script, re-expression is manual by necessity; the comments state
//! what is preserved and, where the source language cannot mirror the exemplar
//! literally, what is substituted and why.
//!
//! Everything is driven through the crate's public entry point,
//! `compile_program(String) -> Result<BithovenOutput, CompileError>`, which
//! runs parse -> type check -> liveness -> necessity -> code generation; no
//! internal pass is invoked directly, so a verdict here is the verdict a user
//! of the compiler gets.
//!
//! Expected verdicts (this is Table `tab:defects`):
//!
//! | class            | mechanism   | faulty -> diagnostic | fixed  |
//! |------------------|-------------|----------------------|--------|
//! | `unbinded-txid`  | necessity   | `NoSigRequired`      | accept |
//! | `useless-sig`    | necessity   | `UselessSig`         | accept |
//! | `uncertain-sig`  | type system | `TypeMismatch`       | accept |
//! | `impossible-key` | type system | `MalformedPubkey`    | accept |
//! | `never-true`     | liveness    | `DeadPath`           | accept |
//! | `simple-key`     | ---         | accept (valid key)   | accept |

use bithoven::{compile_program, CompileError, ErrorKind};

const PREFIX: &str = "pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n";

/// The compressed public key of the private key `1` (the generator point).
/// A perfectly valid curve point whose weakness is entirely off-chain: this is
/// the key behind the `simple-key` exemplar below.
const WEAK_KEY: &str = "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798";

/// An all-`ff` x-coordinate under a valid compressed prefix: a well-formed key
/// *push*, but not a point on secp256k1, so no private key can exist for it.
const IMPOSSIBLE_KEY: &str = "03ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

/// Well-formed keys with no known structure, one per class, so that the twelve
/// programs of the corpus are twelve distinct programs. All are taken from the
/// shipped `example/` contracts.
const KEY_UNBINDED: &str = "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";
const KEY_SIMPLE: &str = "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";
const KEY_USELESS: &str = "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432";
const KEY_UNCERTAIN: &str = "0344d2b4706fee04f8718f3a411c9df0503cc7bc83488128187b016f12bfd36f4d";
const KEY_IMPOSSIBLE: &str = "03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729";
const KEY_NEVER_TRUE: &str = "03a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7";

/// SHA-256 digest locking the `unbinded-txid` exemplar.
const UNBINDED_DIGEST: &str = "894eeb82f9a851f5d1cb1be3249f58bc8d259963832c5e7474a76f7a859ee95c";

/// What the compiler is expected to do with a program.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
enum Verdict {
    /// Compiles, and emits exactly this script.
    Accept(&'static str),
    /// Rejected with this diagnostic (`ErrorKind` variant name).
    Reject(&'static str),
}

/// How the Bithoven program relates to the deployed exemplar. `Literal` means
/// every consensus-relevant operation of the exemplar has a direct counterpart
/// in the source program, modulo address-format wrappers and dead data, which
/// are deployment artefacts rather than policy. `Substituted` names the
/// construct the source language cannot mirror, what replaces it, and the
/// direction the replacement moves the check in; a substitution that weakened
/// the defect would make the rejection easier and is stated as such.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Fidelity {
    Literal(&'static str),
    Substituted(&'static str),
}

impl Fidelity {
    fn label(&self) -> &'static str {
        match self {
            Fidelity::Literal(_) => "literal",
            Fidelity::Substituted(_) => "substituted",
        }
    }
    fn note(&self) -> &'static str {
        match self {
            Fidelity::Literal(n) | Fidelity::Substituted(n) => n,
        }
    }
}

/// One row of `tab:defects`: a defect class, the re-expressed faulty exemplar,
/// and the corrected policy it was meant to be.
struct Class {
    /// Class name as used by the BSHunter taxonomy.
    name: &'static str,
    /// Mechanism of Bithoven responsible for the verdict on `faulty`.
    mechanism: &'static str,
    /// Transaction the exemplar is taken from (see `bshunter/TxOutputJson/`).
    txid: &'static str,
    /// Relation of `faulty` to the deployed script of `txid`.
    fidelity: Fidelity,
    faulty: String,
    faulty_verdict: Verdict,
    fixed: String,
    fixed_verdict: Verdict,
}

fn compile(body: &str) -> Result<String, CompileError> {
    compile_program(format!("{PREFIX}{body}")).map(|out| out.asm())
}

/// The `ErrorKind` variant name, so that a test states the diagnostic rather
/// than its message text.
fn kind_name(kind: &ErrorKind) -> &'static str {
    match kind {
        ErrorKind::ParseError(_) => "ParseError",
        ErrorKind::DuplicateVariable(_) => "DuplicateVariable",
        ErrorKind::UndefinedVariable(_) => "UndefinedVariable",
        ErrorKind::VariableConsumed(_) => "VariableConsumed",
        ErrorKind::UnusedVariable(_) => "UnusedVariable",
        ErrorKind::InvalidConsumptionOrder(_) => "InvalidConsumptionOrder",
        ErrorKind::TypeMismatch(_) => "TypeMismatch",
        ErrorKind::InvalidOperation(_) => "InvalidOperation",
        ErrorKind::StackDepthExceeded(_) => "StackDepthExceeded",
        ErrorKind::OpcodeCountExceeded(_) => "OpcodeCountExceeded",
        ErrorKind::DustOutputCreated(_) => "DustOutputCreated",
        ErrorKind::MultipleReturn(_) => "MultipleReturn",
        ErrorKind::NoReturn(_) => "NoReturn",
        ErrorKind::UnreachableCode(_) => "UnreachableCode",
        ErrorKind::DeadPath(_) => "DeadPath",
        ErrorKind::DeclarationPathMismatch(_) => "DeclarationPathMismatch",
        ErrorKind::IntegerOverflow(_) => "IntegerOverflow",
        ErrorKind::UselessSig(_) => "UselessSig",
        ErrorKind::MalformedPubkey(_) => "MalformedPubkey",
        ErrorKind::NoSigRequired(_) => "NoSigRequired",
    }
}

/// Compile `source` and check it against `expected`, reporting the observed
/// verdict on failure so a regression names both sides.
fn check(label: &str, source: &str, expected: Verdict) {
    match (compile(source), expected) {
        (Ok(asm), Verdict::Accept(want)) => assert_eq!(
            asm, want,
            "{label}: accepted, but emitted a script other than the documented one"
        ),
        (Ok(asm), Verdict::Reject(want)) => {
            panic!("{label}: must be rejected with {want}, but compiled to: {asm}")
        }
        (Err(err), Verdict::Reject(want)) => assert_eq!(
            kind_name(&err.kind),
            want,
            "{label}: wrong diagnostic; message was: {err}"
        ),
        (Err(err), Verdict::Accept(_)) => {
            panic!("{label}: must be accepted, but was rejected: {err}")
        }
    }
}

/// The defect corpus: all six BSHunter classes, faulty exemplar and corrected
/// counterpart, in the order of `tab:defects`.
fn corpus() -> Vec<Class> {
    vec![
        // ---------------------------------------------------------------
        // unbinded-txid (BSHunter §V-A). No signature operation occurs, so
        // nothing binds the spend to a transaction: an attacker who sees the
        // spending transaction in the mempool can re-use the revealed preimage
        // and redirect the output to himself.
        //
        // On-chain exemplar, tx 9969603d... (non-standard output script):
        //   04678afd04678afd OP_DROP OP_SHA256 <894eeb82..> OP_EQUAL
        //
        // The leading push and OP_DROP are dead data; the policy is a bare
        // hash lock, which is what the Bithoven program below expresses.
        // The corrected policy keeps the hash lock but gates the spend on a
        // signature, which is what binds the transaction.
        // ---------------------------------------------------------------
        Class {
            name: "unbinded-txid",
            mechanism: "necessity",
            fidelity: Fidelity::Literal(
                "hash lock kept; the dead push-and-drop prefix is data, not policy",
            ),
            txid: "9969603dca74d14d29d1d5f56b94c7872551607f8c2d6837ab9715c60721b50e",
            faulty: format!(
                "(preimage: string)\n{{ return sha256 preimage == \"{UNBINDED_DIGEST}\"; }}"
            ),
            faulty_verdict: Verdict::Reject("NoSigRequired"),
            fixed: format!(
                "(preimage: string, sig_recipient: signature)\n{{ verify sha256 preimage == \"{UNBINDED_DIGEST}\"; return checksig(sig_recipient, \"{KEY_UNBINDED}\"); }}"
            ),
            fixed_verdict: Verdict::Accept(
                "OP_SHA256 OP_TOALTSTACK OP_PUSHBYTES_32 894eeb82f9a851f5d1cb1be3249f58bc8d259963832c5e7474a76f7a859ee95c OP_FROMALTSTACK OP_SWAP OP_EQUALVERIFY OP_PUSHBYTES_33 0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212 OP_CHECKSIG",
            ),
        },
        // ---------------------------------------------------------------
        // useless-sig (BSHunter §V-C). The signature is verified, but its
        // result is inverted before reaching the top of the stack, so an
        // invalid signature unlocks the funds and a valid one does not.
        //
        // Exemplar given in BSHunter §V-C: a P2SH whose redeem script is
        //   <pubkey> OP_CHECKSIG OP_NOT
        // The corpus instance tx d256c835... records the same shape with the
        // key supplied by the witness ("OP_CHECKSIG OP_NOT"); we follow the
        // paper and pin the key to a literal, which isolates the defect under
        // test to the inversion.
        // ---------------------------------------------------------------
        Class {
            name: "useless-sig",
            mechanism: "necessity",
            fidelity: Fidelity::Substituted(
                "key pinned to a literal, so the isolated defect is the inversion alone",
            ),
            txid: "d256c8358ea679a92fc9696389aac10f47eb956398056ebe1e51ea4aa4308924",
            faulty: format!(
                "(sig_owner: signature)\n{{ return !checksig(sig_owner, \"{KEY_USELESS}\"); }}"
            ),
            faulty_verdict: Verdict::Reject("UselessSig"),
            fixed: format!(
                "(sig_owner: signature)\n{{ return checksig(sig_owner, \"{KEY_USELESS}\"); }}"
            ),
            fixed_verdict: Verdict::Accept(
                "OP_PUSHBYTES_33 03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432 OP_CHECKSIG",
            ),
        },
        // ---------------------------------------------------------------
        // uncertain-sig (BSHunter §V-D). The signature operation takes its
        // parameters from the input script, so the spender chooses the key
        // his own signature is checked against.
        //
        // On-chain exemplar, tx 79d9c0c5... (output script, in full):
        //   OP_CHECKSIG
        // ---------------------------------------------------------------
        Class {
            name: "uncertain-sig",
            mechanism: "type system",
            fidelity: Fidelity::Literal("bare OP_CHECKSIG: both operands come from the witness"),
            txid: "79d9c0c5ef02aee4f638c570d5cc8b67655912c91eb0d8ec17556ff47e6226b7",
            faulty: "(sig_owner: signature, pubkey: string)\n{ return checksig(sig_owner, pubkey); }"
                .to_string(),
            faulty_verdict: Verdict::Reject("TypeMismatch"),
            fixed: format!(
                "(sig_owner: signature)\n{{ return checksig(sig_owner, \"{KEY_UNCERTAIN}\"); }}"
            ),
            fixed_verdict: Verdict::Accept(
                "OP_PUSHBYTES_33 0344d2b4706fee04f8718f3a411c9df0503cc7bc83488128187b016f12bfd36f4d OP_CHECKSIG",
            ),
        },
        // ---------------------------------------------------------------
        // impossible-key (BSHunter §V-E). The script demands a signature
        // under a key that cannot exist, so the output is never spendable.
        //
        // On-chain exemplar, tx 2c637592... (output script):
        //   OP_DUP OP_HASH160 0000000000000000000000000000000000000000
        //   OP_EQUALVERIFY OP_CHECKSIG
        //
        // There, the impossible key is named by a hash no key is known to
        // have. Bithoven requires the key itself as a literal, so the same
        // defect takes its direct form: a key literal that is not a point on
        // the curve. The check is stronger than the exemplar needs, since it
        // rules out every key for which no private key can exist, rather than
        // only those reachable by hash preimage search.
        // ---------------------------------------------------------------
        Class {
            name: "impossible-key",
            mechanism: "type system",
            fidelity: Fidelity::Substituted(
                "key named by hash -> off-curve literal; stronger, no private key can exist",
            ),
            txid: "2c637592a4b4a95cf4b19260730c66de540d7d3b14d8d352de591c5ee6eac0fc",
            faulty: format!(
                "(sig_owner: signature)\n{{ return checksig(sig_owner, \"{IMPOSSIBLE_KEY}\"); }}"
            ),
            faulty_verdict: Verdict::Reject("MalformedPubkey"),
            fixed: format!(
                "(sig_owner: signature)\n{{ return checksig(sig_owner, \"{KEY_IMPOSSIBLE}\"); }}"
            ),
            fixed_verdict: Verdict::Accept(
                "OP_PUSHBYTES_33 03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729 OP_CHECKSIG",
            ),
        },
        // ---------------------------------------------------------------
        // never-true (BSHunter §V-F). The signature check is correct, but a
        // false value is pushed after it, so the top of the stack is false on
        // every execution and the output can never be spent.
        //
        // On-chain exemplar, tx ad1209c7... (output script):
        //   OP_DUP OP_HASH160 dc353b35d11614e1678d6607a2908f68eb76a007
        //   OP_EQUALVERIFY OP_CHECKSIG 0
        //
        // The Bithoven program below is that script read as source: verify the
        // signature, then return false. The key-hash comparison of a P2PKH is
        // an artefact of the address format rather than part of the policy, so
        // the re-expression checks the key directly.
        // ---------------------------------------------------------------
        Class {
            name: "never-true",
            mechanism: "liveness",
            fidelity: Fidelity::Literal(
                "signature check then a false push; the P2PKH wrapper is address format",
            ),
            txid: "ad1209c76f94e2eb80b9929021161adce12498ce919333e50fa1fd4e5f6dead2",
            faulty: format!(
                "(sig_owner: signature)\n{{ verify checksig(sig_owner, \"{KEY_NEVER_TRUE}\"); return false; }}"
            ),
            faulty_verdict: Verdict::Reject("DeadPath"),
            fixed: format!(
                "(sig_owner: signature)\n{{ return checksig(sig_owner, \"{KEY_NEVER_TRUE}\"); }}"
            ),
            fixed_verdict: Verdict::Accept(
                "OP_PUSHBYTES_33 03a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7 OP_CHECKSIG",
            ),
        },
        // ---------------------------------------------------------------
        // simple-key (BSHunter §V-B). The class Bithoven does not prevent.
        // The script is a correct single-signature policy; the defect is that
        // the key was generated from a guessable private key, which is not a
        // property of the contract.
        //
        // On-chain exemplar, tx d61aa2a5... (output script):
        //   OP_DUP OP_HASH160 91b24bf9f5288532960ac687abb035127b1d28a5
        //   OP_EQUALVERIFY OP_CHECKSIG
        //
        // That hash is HASH160 of the public key of the private key 1. The
        // faulty and the corrected program differ only in the key literal,
        // which is exactly why no static analysis of the contract can separate
        // them: both are accepted, and this is the taxonomy's one false
        // negative.
        // ---------------------------------------------------------------
        Class {
            name: "simple-key",
            mechanism: "---",
            fidelity: Fidelity::Substituted(
                "single-signature policy under the public key of the private key 1",
            ),
            txid: "d61aa2a5f5bce59d2a57447134f7ce9ce9d29b5c471f4bf747c43bf82aa26c2a",
            faulty: format!(
                "(sig_owner: signature)\n{{ return checksig(sig_owner, \"{WEAK_KEY}\"); }}"
            ),
            faulty_verdict: Verdict::Accept(
                "OP_PUSHBYTES_33 0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798 OP_CHECKSIG",
            ),
            fixed: format!(
                "(sig_owner: signature)\n{{ return checksig(sig_owner, \"{KEY_SIMPLE}\"); }}"
            ),
            fixed_verdict: Verdict::Accept(
                "OP_PUSHBYTES_33 0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212 OP_CHECKSIG",
            ),
        },
    ]
}

/// The taxonomy table of Section VI-C, emitted from the verdicts the compiler
/// returns rather than transcribed by hand: class, exemplar transaction,
/// relation of the re-expression to that transaction, mechanism, and the two
/// verdicts. Two classes are re-expressed with a substitution, and both
/// substitutions strengthen or isolate the defect rather than weaken it.
#[test]
fn taxonomy_table_is_emitted_from_measured_verdicts() {
    println!("\n| class | tx (first 8) | re-expression | mechanism | faulty | fixed |");
    println!("|---|---|---|---|---|---|");
    for class in corpus() {
        let faulty = match compile(&class.faulty) {
            Ok(_) => "accept".to_string(),
            Err(e) => kind_name(&e.kind).to_string(),
        };
        let fixed = match compile(&class.fixed) {
            Ok(_) => "accept".to_string(),
            Err(e) => kind_name(&e.kind).to_string(),
        };
        println!(
            "| {} | {} | {} ({}) | {} | {} | {} |",
            class.name,
            &class.txid[..8],
            class.fidelity.label(),
            class.fidelity.note(),
            class.mechanism,
            faulty,
            fixed
        );
    }
    let substituted = corpus()
        .iter()
        .filter(|c| matches!(c.fidelity, Fidelity::Substituted(_)))
        .count();
    println!(
        "\nre-expressions: {} literal, {substituted} substituted",
        6 - substituted
    );
    assert_eq!(
        substituted, 3,
        "every substitution must be declared in the paper's table"
    );
}

/// Each faulty exemplar receives the diagnostic `tab:defects` attributes to it.
/// The diagnostic, not the rejection, is the claim: three different mechanisms
/// are responsible across the six classes.
#[test]
fn faulty_exemplars_receive_the_documented_diagnostic() {
    for class in corpus() {
        check(
            &format!("{} (faulty, tx {})", class.name, class.txid),
            &class.faulty,
            class.faulty_verdict,
        );
    }
}

/// Every corrected policy is accepted, and compiles to the script it should:
/// acceptance alone would be satisfied by a compiler that emits nothing.
#[test]
fn corrected_policies_are_accepted_and_compile_as_documented() {
    for class in corpus() {
        check(
            &format!("{} (fixed)", class.name),
            &class.fixed,
            class.fixed_verdict,
        );
    }
}

/// The classes rejected by the type system are rejected before any analysis
/// runs, so the defect is inexpressible rather than detected. Removing the
/// necessity and liveness analyses would not admit them; here we witness the
/// weaker, checkable consequence: the same defect is rejected on both targets
/// and in a program that is otherwise gated by a sound signature check.
#[test]
fn type_system_defects_are_rejected_wherever_they_appear() {
    let taproot = "pragma bithoven version 0.0.1;\npragma bithoven target taproot;\n";
    let cases: [(&str, String, &str); 4] = [
        (
            "uncertain-sig, taproot",
            format!("{taproot}(sig_owner: signature, pubkey: string)\n{{ return checksig(sig_owner, pubkey); }}"),
            "TypeMismatch",
        ),
        (
            "uncertain-sig, under a sound signature check",
            format!("{PREFIX}(sig_a: signature, sig_b: signature, pubkey: string)\n{{ verify checksig(sig_a, \"{KEY_UNCERTAIN}\"); return checksig(sig_b, pubkey); }}"),
            "TypeMismatch",
        ),
        (
            "impossible-key, taproot",
            format!("{taproot}(sig_owner: signature)\n{{ return checksig(sig_owner, \"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\"); }}"),
            "MalformedPubkey",
        ),
        (
            "impossible-key, under a sound signature check",
            format!("{PREFIX}(sig_a: signature, sig_b: signature)\n{{ verify checksig(sig_a, \"{KEY_UNCERTAIN}\"); return checksig(sig_b, \"{IMPOSSIBLE_KEY}\"); }}"),
            "MalformedPubkey",
        ),
    ];
    for (label, source, want) in cases {
        match compile_program(source) {
            Err(err) => assert_eq!(kind_name(&err.kind), want, "{label}: wrong diagnostic"),
            Ok(out) => panic!("{label}: must be rejected, but compiled to: {}", out.asm()),
        }
    }
}

/// The corpus is the whole taxonomy and nothing else: six classes, each once,
/// and twelve distinct programs, so no pair of rows shares a program.
#[test]
fn corpus_is_the_complete_taxonomy() {
    let corpus = corpus();
    let mut names: Vec<&str> = corpus.iter().map(|c| c.name).collect();
    names.sort_unstable();
    assert_eq!(
        names,
        [
            "impossible-key",
            "never-true",
            "simple-key",
            "unbinded-txid",
            "uncertain-sig",
            "useless-sig",
        ],
        "the six BSHunter defect classes must appear exactly once each"
    );

    let mut programs: Vec<&str> = corpus
        .iter()
        .flat_map(|c| [c.faulty.as_str(), c.fixed.as_str()])
        .collect();
    assert_eq!(programs.len(), 12);
    programs.sort_unstable();
    programs.dedup();
    assert_eq!(programs.len(), 12, "the twelve programs must be distinct");

    let mut mechanisms: Vec<&str> = corpus
        .iter()
        .map(|c| c.mechanism)
        .filter(|m| *m != "---")
        .collect();
    mechanisms.sort_unstable();
    mechanisms.dedup();
    assert_eq!(
        mechanisms.len(),
        3,
        "three mechanisms account for the five rejections"
    );
}

/// The confusion matrix and the rates quoted in `sec:defects`, recomputed from
/// the verdicts the compiler actually returns. A defective contract is the
/// positive; rejection is the positive prediction.
#[test]
fn confusion_matrix_matches_the_reported_figures() {
    let corpus = corpus();
    let (mut tp, mut fp, mut fn_, mut tn) = (0u32, 0u32, 0u32, 0u32);
    for class in &corpus {
        match compile(&class.faulty) {
            Err(_) => tp += 1,
            Ok(_) => fn_ += 1,
        }
        match compile(&class.fixed) {
            Err(_) => fp += 1,
            Ok(_) => tn += 1,
        }
    }

    assert_eq!((tp, fp, fn_, tn), (5, 0, 1, 6), "confusion matrix");
    assert_eq!(tp + fp + fn_ + tn, 12, "twelve programs are classified");

    let round1 = |x: f64| (x * 10.0).round() / 10.0;
    let precision = 100.0 * f64::from(tp) / f64::from(tp + fp);
    let recall = 100.0 * f64::from(tp) / f64::from(tp + fn_);
    let accuracy = 100.0 * f64::from(tp + tn) / f64::from(tp + fp + fn_ + tn);
    assert_eq!(round1(precision), 100.0, "precision");
    assert_eq!(round1(recall), 83.3, "recall");
    assert_eq!(round1(accuracy), 91.7, "accuracy");

    // Scope-adjusted: `simple-key` is a defect of key generation, off-chain and
    // outside what any contract analysis can see, so excluding its pair leaves
    // ten programs, all classified correctly.
    let scoped: Vec<&Class> = corpus.iter().filter(|c| c.name != "simple-key").collect();
    let scoped_tp = scoped
        .iter()
        .filter(|c| compile(&c.faulty).is_err())
        .count();
    let scoped_tn = scoped.iter().filter(|c| compile(&c.fixed).is_ok()).count();
    assert_eq!(scoped_tp, 5, "scope-adjusted recall is 100%");
    assert_eq!(scoped_tn, 5, "scope-adjusted specificity is 100%");
    assert_eq!(
        100.0 * (scoped_tp + scoped_tn) as f64 / (2 * scoped.len()) as f64,
        100.0,
        "scope-adjusted accuracy is 100%"
    );
}

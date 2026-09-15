//! False-positive measurement (R3(9), third clause).
//!
//! Scores the standard-policy corpus of `tests/corpus/standard_suite.rs`: one
//! contract per BIP 379 policy primitive and per standard composition over
//! them, so selection is fixed by a published specification rather than by us.
//! The same corpus is timed by `benches/compilation_cost.rs`.
//!
//! Run: `cargo test --test false_positives -- --nocapture`

#[path = "corpus/standard_suite.rs"]
mod suite;

use bithoven::compile_program;
use suite::*;

/// The verdict of the compiler on a corpus entry: `accept`, or the name of the
/// diagnostic it was rejected with.
fn verdict(c: &Case) -> String {
    match compile_program(source(c)) {
        Ok(_) => "accept".to_string(),
        Err(e) => format!("{:?}", e.kind)
            .split('(')
            .next()
            .unwrap()
            .to_string(),
    }
}

/// The corpus, its provenance, and the verdict on every entry: the data behind
/// the standard-policy table of Section VI-B.
#[test]
fn false_positive_rate_on_non_defective_contracts() {
    let (mut fp, mut unsound, mut n_acc, mut n_key) = (vec![], vec![], 0, 0);
    println!("\n| contract | criterion | covers | target | expected | verdict |");
    println!("|---|---|---|---|---|---|");
    for c in CASES {
        let got = verdict(c);
        match c.expect {
            ACCEPT => {
                n_acc += 1;
                if got != "accept" {
                    fp.push((c.name, got.clone()))
                }
            }
            KEYLESS => {
                n_key += 1;
                // STRICT ASSERTION: Must be rejected SPECIFICALLY by the necessity pass
                if got != "NoSigRequired" {
                    unsound.push(format!("{}: expected NoSigRequired, got {}", c.name, got))
                }
            }
            LIMIT => {
                // STRICT ASSERTION: Prove the linear consumption formal boundary claim
                assert_eq!(
                    got, "VariableConsumed",
                    "LIMIT case {} must be rejected with VariableConsumed, got {}",
                    c.name, got
                );
            }
            _ => unreachable!(),
        }
        println!(
            "| `{}` | {} | {} | {} | {} | {} |",
            c.name, c.criterion, c.covers, c.target, c.expect, got
        );
    }

    println!(
        "\ncorpus: {} contracts = {} signature-gated + {} keyless + {} not expressible",
        CASES.len(),
        n_acc,
        n_key,
        CASES.iter().filter(|c| c.expect == LIMIT).count()
    );
    println!(
        "false positives: {}/{} signature-gated contracts rejected",
        fp.len(),
        n_acc
    );
    for (n, v) in &fp {
        println!("  FP  {n}: {v}");
    }
    println!(
        "keyless rejected as designed: {}/{}",
        n_key - unsound.len(),
        n_key
    );

    assert!(
        unsound.is_empty(),
        "Keyless contract bypass or wrong diagnostic — counterexample to Theorem 2: {unsound:?}"
    );
    assert!(
        fp.is_empty(),
        "False positives found on signature-gated contracts: {fp:?}"
    );
}

/// Corpus provenance: every BIP 379 policy primitive is instantiated, so the
/// corpus is complete with respect to the specification that fixes it rather
/// than a selection of convenient contracts.
#[test]
fn corpus_covers_every_policy_primitive() {
    let covered: Vec<&str> = CASES
        .iter()
        .filter(|c| c.criterion == PRIMITIVE)
        .map(|c| c.covers.split(',').next().unwrap())
        .collect();

    for fragment in [
        "pk()",
        "older()",
        "after()",
        "sha256()",
        "hash256()",
        "ripemd160()",
        "hash160()",
        "and()",
        "or()",
        "thresh()",
        "multi()",
        "multi_a()",
    ] {
        assert!(
            covered.contains(&fragment),
            "No corpus contract instantiates the BIP 379 fragment {fragment}"
        );
    }
    assert!(
        CASES.iter().any(|c| c.target == "taproot"),
        "Both compilation targets (segwit, taproot) must be exercised"
    );
}

// ===========================================================================
// Emitted size against an independent compiler.
// ===========================================================================

#[test]
fn byte_identity_against_miniscript() {
    let mut identical = 0usize;
    let mut compared = 0usize;
    let mut deltas: Vec<(&str, i64)> = Vec::new();

    println!("\n| contract | Bithoven | Miniscript | identical | delta |");
    println!("|---|---|---|---|---|");
    for (name, policy) in EQUIVALENT_POLICY {
        let case = CASES
            .iter()
            .find(|c| c.name == *name)
            .unwrap_or_else(|| panic!("{name} is not in the corpus"));

        let ours = compile_program(source(case))
            .unwrap_or_else(|e| panic!("{name} must compile: {e}"))
            .bytes();

        // STRICT ASSERTION: The baseline must compile. Silent skips hide methodology flaws.
        let theirs = miniscript_bytes(policy, case.target).unwrap_or_else(|| {
            panic!(
                "Fatal methodology error: Miniscript baseline failed to compile for {}",
                name
            )
        });

        compared += 1;
        let same = ours == theirs;
        if same {
            identical += 1;
        } else {
            deltas.push((name, ours.len() as i64 - theirs.len() as i64));
        }
        println!(
            "| `{}` | {} | {} | {} | {:+} |",
            name,
            ours.len(),
            theirs.len(),
            if same { "yes" } else { "no" },
            ours.len() as i64 - theirs.len() as i64
        );
    }

    println!("\nbyte-identical: {identical}/{compared} contracts with a Miniscript equivalent");
    assert_eq!(
        compared,
        EQUIVALENT_POLICY.len(),
        "Not all equivalents were compared!"
    );

    let mut sizes: Vec<i64> = deltas.iter().map(|(_, d)| *d).collect();
    sizes.sort_unstable();
    if !sizes.is_empty() {
        println!(
            "delta over the {} differing contracts: min {:+}, median {:+}, max {:+}",
            sizes.len(),
            sizes[0],
            sizes[sizes.len() / 2],
            sizes[sizes.len() - 1]
        );
    }
    for (name, d) in &deltas {
        println!("  delta {name}: {d:+} bytes");
    }
}

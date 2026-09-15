# Reproducing Section VI (Implementation and Evaluation)

This artifact reproduces every measured quantity, table, and empirical claim reported in Section VI of the manuscript. This document maps each subsection to the command that produces it, states the expected outputs, and documents the stated scope boundaries of the artifact.

## Prerequisites

```sh
rustc --version          # nightly toolchain, as pinned by rust-toolchain
cargo build --release
python3 --version        # 3.9+, for the two scripts; no third-party packages
```

**Note on Dependencies:** `tests/differential_validation.rs` links `libbitcoinconsensus` through the `bitcoinconsensus` crate (a dev-dependency, non-wasm targets only). If it does not link, §VI-D cannot be reproduced; there is no substitute engine, and a run without it measures nothing.

**Note on Benchmarks (§VI-G):** Absolute timings were taken on a single Apple M3 Pro (36 GB unified memory, macOS) with `--release`, each figure being the median of three runs iterated past 100 ms. Running on different hardware will alter the absolute digits; however, the relations between them (accepted vs. rejected, Bithoven vs. baseline, growth slopes) are hardware-independent and will reproduce successfully.

### Quick Start
To run the full suite of automated tests:
```sh
cargo test --release
```

---

## §VI-B, Table I — The Evasion Corpus

Exercises the semantic necessity analyzer against syntactic evasions and anti-patterns.

```sh
cargo test --release --lib
```

* **Rejected Evasions (10 contracts):** The unit tests in `src/analyze_test.rs` and `src/necessity.rs` assert the specific `ErrorKind` for each row rather than merely checking that compilation failed.
* **Accepted Controls (2 contracts):** `return checksig(..) == true;` and `return !!checksig(..);` serve as anti-vacuity controls. A checker that rejects everything would score perfectly on the other ten but fail these. 

You can verify the exact diagnostic for any row via the CLI:
```sh
cargo run --release -- compile path/to/contract.bithoven --format asm
```
*Compare the output against the Table I Verdict column: `UselessSig` or `NoSigRequired` for Auth, `InvalidOperation` for Type, `NoReturn` for NoRet, `DeadPath` for Dead. The two control rows must compile.*

**Complexity Bounds:** The bounds reported in §VI-B are pinned by the `c2_*` tests in `src/necessity.rs`:
* `MAX_FREE_ATOMS == 20` (the paper's B): exceeding this rejects with `NoSigRequired`.
* `MAX_TOTAL_ATOMS == B + 2`: exceeding this suppresses the `DeadPath` diagnostic instead of raising it. 
*(Each direction has a control test on the other side of the bound).*

---

## §VI-C & §VI-E, Table III — Corpus and False Positives

Evaluates precision, false-positive resistance, and emitted byte overhead. The corpus (`tests/corpus/standard_suite.rs`) contains 24 contracts: 17 signature-gated, 6 keyless by design, and 1 not expressible (`size_gated_hash`). 

```sh
cargo test --release --test false_positives -- --nocapture
```

* **Expected Verdicts:** 17/17 accepted with zero false positives. The 6 keyless contracts are correctly rejected with `NoSigRequired`; `size_gated_hash` is rejected with `VariableConsumed`.
* **Corpus Coverage:** `corpus_covers_every_policy_primitive` verifies that every BIP-379 policy operator is instantiated (`thresh` at both k=n and k<n), targeting both `segwit` and `taproot`.
* **Byte Overhead (Δ):** `byte_identity_against_miniscript` prints the per-contract Δ against `rust-miniscript`. Two outputs are byte-identical. 
* **Hash-Lock Footnote (†):** For the six contracts carrying a hash lock, `rust-miniscript` emits the BIP-379 `OP_SIZE <32> OP_EQUALVERIFY` gate. Bithoven omits it because `len` consumes its operand; gating both the size and hash of one witness item raises `VariableConsumed`. On the four bare policies, this yields Δ = -1; on `htlc_bip199` and `atomic_swap`, the branch encoding offsets it to Δ = 0.

---

## §VI-D, Table II — Differential Validation

Validates the emitted Bitcoin Script against Bitcoin Core consensus.

```sh
cargo test --release --test differential_validation -- --test-threads=1 --nocapture
```

Because the campaign is deterministically seeded (8 seeds), the output metrics are exact and reproduce the paper directly. Any deviation indicates a regression in the generator, analyzer, or compiler:

| Metric | Measured Value |
|---|---|
| Programs generated | 1,024 |
| Discarded by the analyzer | 210 |
| Accepted (the corpus) | 814 |
| Executions | 32,560 |
| Succeeding spends | 3,037 |
| Executions reaching ⊥ via out-of-range arithmetic | 590 |
| Arithmetic overflows failed by Bitcoin Core | 590 |
| Security-direction discrepancies | 0 |
| Liveness-direction disagreements | 1 (at execution 23,803) |

**Consensus Flags:** The harness passes the flags exposed by `libbitcoinconsensus` (`P2SH`, `WITNESS`, `NULLDUMMY`, `CLTV`, `CSV`). The C API rejects the other two flags with `ERR_INVALID_FLAGS`, but both are still enforced: `CLEANSTACK` by `ExecuteWitnessScript` (pinned by `leftover_witness_item_fails_cleanstack`), and `MINIMALDATA` by `pushes_are_minimal` (re-implementing Core's `CheckMinimalPush` over the emitted script).

### Mutation Analysis (Table II)
To verify harness sensitivity, 11 single-point defects are sequentially injected into `src/compile.rs`:

```sh
python3 scripts/mutation_analysis.py --out validation_metrics.json
```
*(Runtime: ~25 minutes)*. The driver physically aborts if a patch target does not occur exactly once, preventing the study from falsely reporting perfect sensitivity via silent no-ops. 

* **Expected Result:** All 11 injected faults are detected (slowest first detection at execution 3,168). 
* **Lemma 1 Validation:** A 12th mutant removes the alt-stack detour for literal operands only. This tests the Stack Alignment lemma and correctly does **not** count as detected, disagreeing exactly as often as the unmutated control.
* **Equality Coercion (Fig 3):** Pinned in both directions by `equality_over_arithmetic_does_not_accept_out_of_range` and `equality_without_arithmetic_stays_byte_equality`. A compiler emitting either opcode unconditionally will fail one of the two tests.

---

## §VI-F, Table IV — BSHunter Taxonomy Coverage

Evaluates compile-time prevention across the 6 defect classes identified in the BSHunter empirical study (383,544 defective outputs).

```sh
cargo test --release --test bshunter_benchmark -- --nocapture
```

* **Expected Result:** 5 of 6 faulty exemplars rejected with the documented diagnostic; 6 of 6 corrected controls accepted, spanning 3 analysis mechanisms.
* `taxonomy_table_is_emitted_from_measured_verdicts` prints Table IV directly from the measured verdicts rather than from a hardcoded table of constants.

### Exemplar Selection
The exemplar per class is chosen mechanically: the first entry, in dataset publication order, carrying an executable contract rather than a data carrier. 

```sh
python3 scripts/exemplar_selection.py
```
*Note: This script requires the BSHunter dataset, provided in this artifact under `bshunter/TxOutputJson/`. This ensures the selection rule is verifiable and that the evaluated txids are derived strictly from the upstream dataset.*

---

## §VI-G — Cost and Scalability

Measures compilation performance and scaling limits.

```sh
cargo bench --bench compilation_cost
```

Reports median and p95 compilation time for accepted contracts, median for rejected ones, peak resident memory, the `rust-miniscript` baseline on the equivalent policies, and the two variables of the cost model O(|Π(P)| · 2^β) (path count and free atoms). 
*Note: The baseline is not a like-for-like comparison. The two compilers are given different inputs and perform different levels of analysis, as disclosed in §VI-G.*

---

## What the Artifact Does Not Check (Scope Boundaries)

- **Bitcoin's script-level resource limits:** `MAX_SCRIPT_SIZE` (10,000 bytes), `MAX_OPS_PER_SCRIPT` (201 counted opcodes), `MAX_STACK_SIZE` (1,000 items), and `MAX_PUBKEYS_PER_MULTISIG` (20) are properties of the emitted script, not of the typing derivation. A program large enough to cross one (e.g., a conjunction of 42 `checksig`s) compiles but its script is unspendable. Proposition 1 therefore carries these limits as an explicit hypothesis.
- **Taproot against consensus:** `libbitcoinconsensus` exposes no taproot verification flag, so the taproot clauses of C are compiled and checked against expected output but never executed. The same holds for the dummy-element, below-threshold, and empty-signature positions of Lemma 1(b).
- **Coverage of the generator:** §VI-D details the clauses the campaign reaches only partially. The generator emits `segwit` programs, supplies the empty vector at dissatisfied signature positions, and applies hashes and `len` to bare variables.
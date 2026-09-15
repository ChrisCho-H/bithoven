#!/usr/bin/env python3
"""Mutation analysis of the differential validation harness (Table II).

Injects single-point defects into ``src/compile.rs`` one at a time, re-runs the
differential campaign of ``tests/differential_validation.rs`` against the
mutated compiler, and records how many of the campaign's executions disagree
with the reference interpreter (``det.``) and how many executions ran before the
first disagreement (``first``).

The twelve mutants are grouped into the seven rows of Table II; starred rows
aggregate several mutants of the same shape and report the worst case, i.e. the
mutant that survives longest.

Usage::

    python3 scripts/mutation_analysis.py [--out validation_metrics.json]

``src/compile.rs`` is restored on every exit path.
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
COMPILE_RS = REPO / "src" / "compile.rs"

# --------------------------------------------------------------------------
# Source fragments of the unmutated compiler that the mutants rewrite.
# --------------------------------------------------------------------------

BINARY_MATH_ARM = """            compile_expression(bitcoin_script, *lhs, target);
            push_to_alt_stack(bitcoin_script);
            compile_expression(bitcoin_script, *rhs, target);
            push_from_alt_stack(bitcoin_script);
            // push math binary opcode
            push_math_binary(bitcoin_script, op);"""

# The compare arm now decides, before the operands are moved, whether equality
# must coerce (see `may_exceed_script_num` in src/compile.rs). The detour itself
# is unchanged, so the mutants below rewrite only the part between the guard and
# the opcode selection.
COMPARE_HEAD = """            let coerce = may_exceed_script_num(&lhs) || may_exceed_script_num(&rhs);
"""

COMPARE_DETOUR = """            // recursive to compile condition expression
            compile_expression(bitcoin_script, *lhs, target);
            push_to_alt_stack(bitcoin_script);
            compile_expression(bitcoin_script, *rhs, target);
            push_from_alt_stack(bitcoin_script);"""

COMPARE_TAIL_SEL = """            // push compare opcode
            let op = if coerce {
                match op {
                    BinaryCompareOp::Equal => BinaryCompareOp::NumEqual,
                    BinaryCompareOp::NotEqual => BinaryCompareOp::NumNotEqual,
                    other => other,
                }
            } else {
                op
            };
            push_compare(bitcoin_script, op);"""

COMPARE_ARM = COMPARE_HEAD + COMPARE_DETOUR + "\n" + COMPARE_TAIL_SEL

LOGICAL_ARM = """            compile_expression(bitcoin_script, *lhs, target);
            push_to_alt_stack(bitcoin_script);
            compile_expression(bitcoin_script, *rhs, target);
            push_from_alt_stack(bitcoin_script);
            // push logical opcode
            push_logical(bitcoin_script, op);"""

FROM_ALT_STACK = """pub fn push_from_alt_stack(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new()
        .push_opcode(bitcoin::opcodes::all::OP_FROMALTSTACK)
        .push_opcode(bitcoin::opcodes::all::OP_SWAP);

    script.extend_from_slice(builder.as_bytes());
}"""

TO_ALT_STACK = """pub fn push_to_alt_stack(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_TOALTSTACK);

    script.extend_from_slice(builder.as_bytes());
}"""

BYTES_LEN = """    let builder = bitcoin::script::Builder::new()
        .push_opcode(bitcoin::opcodes::all::OP_SIZE)
        .push_opcode(bitcoin::opcodes::all::OP_SWAP)
        .push_opcode(bitcoin::opcodes::all::OP_DROP);"""

NUMBER_LITERAL_ARM = """        Expression::NumberLiteral(_loc, data) => {
            push_int(bitcoin_script, data);
        }"""

IS_PURE_PUSH_HELPER = """// Peephole candidate: the alt-stack detour is only needed when the right
// operand's code can bury the left result. A pure push cannot.
fn is_pure_push(expr: &Expression) -> bool {
    matches!(
        expr,
        Expression::NumberLiteral(..)
            | Expression::BooleanLiteral(..)
            | Expression::StringLiteral(..)
    )
}"""


def peephole(tail: str, head: str = "") -> str:
    """A detour arm rewritten so the detour is skipped for pure-push operands."""
    return (
        head
        + "            let detour = !is_pure_push(&rhs);\n"
        "            compile_expression(bitcoin_script, *lhs, target);\n"
        "            if detour {\n"
        "                push_to_alt_stack(bitcoin_script);\n"
        "            }\n"
        "            compile_expression(bitcoin_script, *rhs, target);\n"
        "            if detour {\n"
        "                push_from_alt_stack(bitcoin_script);\n"
        "            }\n"
        f"{tail}"
    )


def transposed(tail: str, head: str = "") -> str:
    """A detour arm rewritten so the operands are compiled in the wrong order."""
    return (
        head
        + "            compile_expression(bitcoin_script, *rhs, target);\n"
        "            push_to_alt_stack(bitcoin_script);\n"
        "            compile_expression(bitcoin_script, *lhs, target);\n"
        "            push_from_alt_stack(bitcoin_script);\n"
        f"{tail}"
    )


MATH_TAIL = "            // push math binary opcode\n            push_math_binary(bitcoin_script, op);"
COMPARE_TAIL = COMPARE_TAIL_SEL
LOGICAL_TAIL = "            // push logical opcode\n            push_logical(bitcoin_script, op);"

# Each mutant is (id, Table II row, description, [(old, new), ...]).
MUTANTS = [
    (
        "m1",
        1,
        "binary math and comparison operands transposed",
        [
            (BINARY_MATH_ARM, transposed(MATH_TAIL)),
            (COMPARE_ARM, transposed(COMPARE_TAIL, COMPARE_HEAD)),
        ],
    ),
    (
        "m2",
        2,
        "OP_SWAP omitted after the alt-stack restore",
        [
            (
                FROM_ALT_STACK,
                FROM_ALT_STACK.replace(
                    "\n        .push_opcode(bitcoin::opcodes::all::OP_SWAP)", ""
                ),
            )
        ],
    ),
    (
        "m3",
        3,
        "OP_EQUAL interchanged with OP_GREATERTHAN",
        [
            (
                """        BinaryCompareOp::Equal => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_EQUAL);""",
                """        BinaryCompareOp::Equal => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_GREATERTHAN);""",
            )
        ],
    ),
    (
        "m4",
        3,
        "OP_LESSTHAN interchanged with OP_LESSTHANOREQUAL",
        [
            (
                """        BinaryCompareOp::Less => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_LESSTHAN);""",
                """        BinaryCompareOp::Less => {
            let builder = bitcoin::script::Builder::new()
                .push_opcode(bitcoin::opcodes::all::OP_LESSTHANOREQUAL);""",
            )
        ],
    ),
    (
        "m5",
        3,
        "OP_BOOLAND interchanged with OP_BOOLOR",
        [
            (
                """        BinaryLogicalOp::BoolAnd => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_BOOLAND);""",
                """        BinaryLogicalOp::BoolAnd => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_BOOLOR);""",
            )
        ],
    ),
    (
        "m6",
        4,
        "OP_ADD interchanged with OP_SUB",
        [
            (
                """        BinaryMathOp::Add => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_ADD);""",
                """        BinaryMathOp::Add => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_SUB);""",
            )
        ],
    ),
    (
        "m7",
        4,
        "OP_MIN interchanged with OP_MAX",
        [
            (
                """        BinaryMathOp::Min => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_MIN);""",
                """        BinaryMathOp::Min => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_MAX);""",
            )
        ],
    ),
    (
        "m8",
        4,
        "OP_SHA256 interchanged with OP_RIPEMD160",
        [
            (
                """        UnaryCryptoOp::Sha256 => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_SHA256);""",
                """        UnaryCryptoOp::Sha256 => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_RIPEMD160);""",
            )
        ],
    ),
    (
        "m9",
        5,
        "number-literal operand push dropped during AST traversal",
        [
            (
                NUMBER_LITERAL_ARM,
                """        Expression::NumberLiteral(_loc, data) => {
            let _ = data;
        }""",
            )
        ],
    ),
    (
        "m10",
        5,
        "OP_DROP dropped from len",
        [
            (
                BYTES_LEN,
                BYTES_LEN.replace(
                    "\n        .push_opcode(bitcoin::opcodes::all::OP_DROP)", ""
                ),
            )
        ],
    ),
    (
        "m11",
        6,
        "alt-stack detour removed outright",
        [
            (
                TO_ALT_STACK,
                """pub fn push_to_alt_stack(script: &mut Vec<u8>) {
    let _ = script;
}""",
            ),
            (
                FROM_ALT_STACK,
                """pub fn push_from_alt_stack(script: &mut Vec<u8>) {
    let _ = script;
}""",
            ),
        ],
    ),
    (
        "m12",
        7,
        "alt-stack detour removed only where the right operand is a pure push",
        [
            (BINARY_MATH_ARM, peephole(MATH_TAIL)),
            (COMPARE_ARM, peephole(COMPARE_TAIL, COMPARE_HEAD)),
            (LOGICAL_ARM, peephole(LOGICAL_TAIL)),
            (
                "pub fn compile(ast: Vec<Statement>, target: &Target) -> Vec<u8> {",
                IS_PURE_PUSH_HELPER
                + "\n\npub fn compile(ast: Vec<Statement>, target: &Target) -> Vec<u8> {",
            ),
        ],
    ),
]

ROW_LABELS = {
    1: "Binary operands transposed (math and comparison)",
    2: "OP_SWAP omitted after restore",
    3: "Comparison or boolean opcode interchanged",
    4: "Arithmetic or hash opcode interchanged",
    5: "Operand or operator dropped",
    6: "Alt-stack detour removed outright",
    7: "Alt-stack detour removed, restricted to literal operands",
}


def apply_patches(source: str, patches) -> str:
    for old, new in patches:
        if source.count(old) != 1:
            raise SystemExit(
                "mutation target not found exactly once in src/compile.rs:\n" + old
            )
        source = source.replace(old, new)
    return source


def run_campaign(out_path: Path, mutation: bool) -> dict:
    env = dict(os.environ)
    env["BITHOVEN_DIFF_OUT"] = str(out_path)
    if mutation:
        env["BITHOVEN_DIFF_MODE"] = "mutation"
    result = subprocess.run(
        [
            "cargo",
            "test",
            "--test",
            "differential_validation",
            "--",
            "--exact",
            "differential_campaign",
            "--nocapture",
        ],
        cwd=REPO,
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    if result.returncode != 0:
        sys.stdout.write(result.stdout.decode())
        raise SystemExit("campaign run failed")
    return json.loads(out_path.read_text())


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", default=str(REPO / "validation_metrics.json"))
    args = parser.parse_args()

    pristine = COMPILE_RS.read_text()
    tmp_dir = Path(tempfile.mkdtemp(prefix="bithoven-mutation-"))

    print("== control (unmutated) ==", flush=True)
    baseline = run_campaign(tmp_dir / "baseline.json", mutation=False)
    print(json.dumps(baseline, indent=2), flush=True)

    mutants = []
    try:
        for ident, row, description, patches in MUTANTS:
            print("== %s (row %d): %s ==" % (ident, row, description), flush=True)
            COMPILE_RS.write_text(apply_patches(pristine, patches))
            metrics = run_campaign(tmp_dir / (ident + ".json"), mutation=True)
            mutants.append(
                {
                    "id": ident,
                    "row": row,
                    "mutation": description,
                    "n": metrics["executions_M"],
                    # A detection is a disagreement in EITHER direction: the
                    # question here is whether the harness notices the injected
                    # defect, and a mutant that makes correct scripts fail on
                    # chain is noticed just as surely as one that makes
                    # incorrect scripts pass. The directional split is what the
                    # baseline asserts of the unmutated compiler, not how
                    # sensitivity is measured.
                    "d": metrics["discrepancies_d"] + metrics["liveness_gaps"],
                    "security_d": metrics["discrepancies_d"],
                    "liveness_d": metrics["liveness_gaps"],
                    "first": metrics["first_disagreement"],
                }
            )
            print(
                "   n=%s d=%s (sec %s / live %s) first=%s"
                % (
                    metrics["executions_M"],
                    metrics["discrepancies_d"] + metrics["liveness_gaps"],
                    metrics["discrepancies_d"],
                    metrics["liveness_gaps"],
                    metrics["first_disagreement"],
                ),
                flush=True,
            )
    finally:
        COMPILE_RS.write_text(pristine)

    # Aggregate mutants into the rows of Table II. A starred row reports the
    # worst case: the mutant that survives longest (an undetected mutant is the
    # worst possible case).
    def survival(mutant):
        return (1, 0) if mutant["first"] is None else (0, mutant["first"])

    rows = []
    for row in sorted(ROW_LABELS):
        members = [m for m in mutants if m["row"] == row]
        worst = max(members, key=survival)
        rows.append(
            {
                "row": row,
                "defect": ROW_LABELS[row],
                "mutants": [m["id"] for m in members],
                "n": worst["n"],
                "d": worst["d"],
                "first": worst["first"],
                "worst_case_mutant": worst["id"],
            }
        )

    base = baseline["discrepancies_d"] + baseline["liveness_gaps"]
    detected = sum(1 for m in mutants if m["d"] > base)
    slowest  = max((m["first"] for m in mutants if m["d"] > base), default=None)

    metrics = {
        "harness": {
            "target": "segwit (P2WSH)",
            "engine": "libbitcoinconsensus via rust-bitcoinconsensus 0.106.0+26.0",
            "note": (
                "Branch A is the reference interpreter of the abstract semantics; "
                "Branch B is compile::compile() executed by Bitcoin Core."
            ),
        },
        "baseline": baseline,
        "mutants": mutants,
        "table_ii": rows,
        "mutants_total": len(mutants),
        "mutants_detected": detected,
        "slowest_detection": slowest,
    }

    Path(args.out).write_text(json.dumps(metrics, indent=2) + "\n")
    print("\nwrote " + args.out)
    print(
        "%d of %d mutants detected; slowest first detection at execution %s"
        % (detected, len(mutants), slowest)
    )


if __name__ == "__main__":
    main()
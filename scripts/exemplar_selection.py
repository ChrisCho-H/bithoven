#!/usr/bin/env python3
"""Exemplar selection over the BSHunter defect corpus.

The defect benchmark of `tests/bshunter_benchmark.rs` re-expresses one on-chain
exemplar per BSHunter defect class. This script states, and re-derives, the rule
by which that exemplar is chosen, so the choice is mechanical rather than ours:

    for each class file of `bshunter/TxOutputJson/`, in the order published,
    take the first entry that carries a *contract* -- i.e. whose script is
    recorded, parses, and is not a data carrier (`OP_RETURN`, `OP_INVALIDOPCODE`).

Data carriers are provably unspendable by construction rather than by defect, so
they are outside the fault model of Section III; every other entry is eligible.
For five of the six classes the rule selects the first entry outright.

Run: `python3 scripts/exemplar_selection.py`
"""

import json
import pathlib
import zipfile

CORPUS = pathlib.Path(__file__).resolve().parent.parent / "bshunter" / "TxOutputJson"

# class -> shipped file, in the order of Table `tab:defects`.
FILES = {
    "unbinded-txid": "unbinded_txid.json.zip",
    "useless-sig": "useless_sig.json.zip",
    "uncertain-sig": "uncertain_sig.json",
    "impossible-key": "impossible_key.json.zip",
    "never-true": "never_true.json",
    "simple-key": "simple_key.json",
}


def load(name):
    path = CORPUS / name
    if path.suffix == ".zip":
        with zipfile.ZipFile(path) as archive:
            return json.loads(archive.read(archive.namelist()[0]))
    return json.loads(path.read_text())


def script_of(entry):
    """The contract of an entry: the redeem script where the output is a P2SH
    wrapper, the output script otherwise."""
    return entry.get("ExactScript") or entry.get("OutputScript") or ""


def carries_contract(entry):
    script = script_of(entry).strip()
    if not script or script == "[error]":
        return False
    return not (script.startswith("OP_RETURN") or script == "OP_INVALIDOPCODE")


def main():
    total = 0
    print(f"{'class':16} {'entries':>8} {'index':>6}  exemplar")
    for defect, name in FILES.items():
        entries = load(name)
        total += len(entries)
        index, entry = next(
            (i, e) for i, e in enumerate(entries) if carries_contract(e)
        )
        print(
            f"{defect:16} {len(entries):8} {index:6}  {entry['TxID']}:{entry['OutputID']}"
        )
        print(f"{'':32}  {script_of(entry)[:96]}")
    print(f"\n{total} defective outputs over {len(FILES)} classes")


if __name__ == "__main__":
    main()

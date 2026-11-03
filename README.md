# Bithoven 🎼

**Formal Safety for Expressive Bitcoin Smart Contracts**

Bithoven is a high-level, imperative language for Bitcoin smart contracts. It compiles to native Bitcoin Script for `legacy` (P2SH), `segwit` (P2WSH) and `taproot` (P2TR) outputs. You write readable contracts with `if`/`else`, named and typed witness inputs, and built-in timelock and signature primitives, instead of juggling a stack by hand.

What sets Bithoven apart is the analysis behind the syntax. Before emitting a single opcode, the compiler rejects any contract that could reach an undefined state, break a consensus encoding rule, consume a witness item other than exactly once and in stack order, leave a path without an explicit `return`, or let a path succeed without a valid signature. It also rejects any contract it can prove no witness could ever redeem.

## ⚡ Key Features

- **Imperative syntax:** `if`/`else`, `verify` and `return` instead of mental stack juggling.
- **Typed witness inputs:** each spending path declares its witness items by name and type (`number`, `bool`, `string`, `signature`).
- **Signature necessity on every path:** a path-sensitive analyzer proves that no spending path can succeed without a valid signature, whatever form the check takes.
- **Strict types and consensus-checked literals:** no arithmetic on strings or on `checksig` results; numbers, byte strings, locktimes and public keys are range- and encoding-checked at compile time.
- **Linear witness consumption:** every declared item is consumed exactly once, in stack order, on every path.
- **Targeted compilation:** one source compiles for `legacy`, `segwit` or `taproot`; multisig becomes `OP_CHECKMULTISIG` or `OP_CHECKSIGADD` as the target requires.
- **Formally specified, tested against Bitcoin Core:** type soundness and a refinement theorem tie the source to the emitted script, and the compiler is differentially tested against `libbitcoinconsensus`.
- **Low overhead:** on standard Miniscript policies, emitted scripts are within a median of one byte of `rust-miniscript`.

## 🆕 What's New in v0.1.0

v0.1.0 is a major revision of the analyzer and back end, accompanying the [paper](https://arxiv.org/abs/2601.01436).

- **Path-sensitive signature necessity.** In 0.0.x, a declaration only had to contain a `signature` item, and only the literal shape `!checksig(..)` was flagged. v0.1.0 decides, for every path, whether it can succeed while every `checksig` fails. Rewrites that 0.0.x compiled into anyone-can-spend scripts, such as `checksig(..) == false`, `checksig(..) || flag` or an inverted `if checksig(..)`, are now rejected. `!!checksig(..)`, which 0.0.x wrongly rejected, now compiles.
- **Dead-contract detection.** A contract whose every path is provably unsatisfiable is rejected with `DeadPath` instead of compiling to an unspendable output.
- **Enforced well-formedness.** Every `if` needs an `else`, there is exactly one stack declaration per spending path, and paths that split at a branch must agree on the witness items consumed before it.
- **Per-path liveness.** Witness consumption is tracked per spending path, so two branches may reuse a name such as `sig`; 0.0.x rejected this with `VariableConsumed`.
- **Stricter types and literals.** `verify`, `return` and `if` operands must be `bool`; byte strings are capped at the 520-byte push limit; key literals must use the target's encoding.
- **Back-end fixes.** Equality over arithmetic compiles to `OP_NUMEQUAL`, so an overflowing sum can no longer compare equal byte-wise, and long byte-string literals that could crash the 0.0.x compiler now compile.
- **Reproducible evaluation.** Differential validation against Bitcoin Core, mutation analysis, the BSHunter taxonomy benchmark and a false-positive corpus ship with the repository (see [`tests/README.md`](./tests/README.md)).

> **Upgrading from 0.0.x?** Contracts that relied on the looser rules may stop compiling. Give every `if` an `else` (`NoReturn`), write exactly one declaration per spending path (`DeclarationPathMismatch`), and use 32-byte x-only keys under `taproot` or 33-byte compressed keys under `legacy`/`segwit` (`MalformedPubkey`).

## 🚀 Quick Start

- **Bithoven Web IDE**, see: https://bithoven-lang.github.io/bithoven/ide/
- **Bithoven Documentation**, see: https://bithoven-lang.github.io/bithoven/docs/

### Installation

```bash
# For CLI user
cargo install bithoven
# For rust user
cargo add bithoven
# For js user
npm install bithoven
```

### Writing Your First Contract

Bithoven contracts are defined with a `.bithoven` extension. Below is an implementation of a standard **Hashed Time-Locked Contract (HTLC)**, demonstrating how Bithoven simplifies conditional spending paths.

**`htlc.bithoven`**

```solidity
pragma bithoven version 0.0.1;
pragma bithoven target segwit;

/*
 * Stack input declarations: one per spending path, in the order the
 * paths' returns appear below. Each lists its items in the order the path
 * consumes them, so the first item (here the branch condition) is the top
 * of the witness stack.
 */
(condition: bool, sig_alice: signature)
(condition: bool, preimage: string, sig_bob: signature)

{
    // If 'condition' is true, we enter the Refund Path (Alice)
    if condition {
        // Enforce relative timelock of 1000 blocks
        older 1000;

        // If timelock is satisfied, Alice can spend with her signature
        return checksig(sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");

    } else {
        // Redeem Path (Bob)
        // Bob must reveal the secret preimage that hashes to the expected value
        verify sha256(sha256(preimage)) == "53de742e2e323e3290234052a702458589c30d2c813bf9f866bef1b651c4e45f";

        // If hash matches, Bob can spend with his signature
        return checksig(sig_bob, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
    }
}
```

## 🛠 Compilation

When compiled, Bithoven translates the high-level imperative logic into the equivalent Bitcoin Script opcodes, handling the control flow and stack management automatically.

**Command:**

```bash
bithoven compile htlc.bithoven --format asm
```

Without `--format`, the CLI writes the ASM, hex and bytes to `htlc.bithoven.json`; `--format hex` and `--format json` print to stdout instead.

**Generated Bitcoin Script (ASM, formatted for readability):**

```text
OP_IF
    <0xe803> OP_CHECKSEQUENCEVERIFY OP_DROP
    <pubkey_alice> OP_CHECKSIG
OP_ELSE
    OP_HASH256 OP_TOALTSTACK <hash_digest> OP_FROMALTSTACK OP_SWAP OP_EQUALVERIFY
    <pubkey_bob> OP_CHECKSIG
OP_ENDIF
```

## 🛡️ What the Compiler Rejects

Every check runs at compile time, and each rejection comes with a diagnostic pointing at the offending line. This contract looks signature-gated, but its only path succeeds exactly when the signature check *fails*:

```solidity
pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(sig_alice: signature)
{
    return checksig(sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212") == false;
}
```

```text
Error at line 6:5: UselessSig("A checksig is present on the top-level path but it does not gate the spend: the return at line 6:5 can succeed without a valid signature.")
```

The signature-necessity check reasons about what each path computes, not about how it is spelled, so equivalent rewrites get the same verdict:

| Contract body (`..` elides the signature and key) | Verdict |
|---|---|
| `return !checksig(..);` | ❌ `UselessSig` |
| `return checksig(..) == false;` or `!= true;` | ❌ `UselessSig` |
| `return checksig(..) \|\| flag;` | ❌ `UselessSig` |
| `if checksig(..) { return false; } else { return true; }` | ❌ `UselessSig` |
| `if flag { return true; } else { return checksig(..); }` | ❌ `NoSigRequired` |
| `verify false; return checksig(..);` | ❌ `DeadPath` |
| `return checksig(..) == true;` or `return !!checksig(..);` | ✅ compiles |

Beyond signatures, the analyzer covers these defect classes. Raw Bitcoin Script has no types or named variables, so most of them otherwise surface only after funds are locked:

| Class | Rejected at compile time | Diagnostic |
|---|---|---|
| Type safety | Arithmetic on a string or a `checksig` result, comparing a number to a string, a non-`bool` condition | `InvalidOperation` |
| Key safety | A public key supplied by the spender (`uncertain-sig`) | `TypeMismatch` |
| | A key literal off secp256k1 or in the wrong encoding for the target (`impossible-key`) | `MalformedPubkey` |
| Consensus literals | A number outside the 32-bit script range, a byte string over 520 bytes, `older` above 65,535, `after` above 4,294,967,295 | `IntegerOverflow` |
| Liveness & scope | An undeclared, unused or reused witness item, or one consumed out of stack order | `UndefinedVariable`, `UnusedVariable`, `VariableConsumed`, `InvalidConsumptionOrder` |
| Control flow | A path with no `return`, an `if` with no `else`, code after a `return` | `NoReturn`, `UnreachableCode` |
| | Stack declarations that do not match the spending paths | `DeclarationPathMismatch` |
| Semantic security | A path that succeeds without a valid signature (`unbound-txid`, `useless-sig`) | `NoSigRequired`, `UselessSig` |
| | A contract no witness can ever satisfy (`never-true`) | `DeadPath` |

Names in parentheses are defect classes from BSHunter (Zheng et al., ICSE 2023), a study of defective scripts deployed on Bitcoin.

## 📖 Examples Gallery

Bithoven comes with a rich collection of examples demonstrating real-world Bitcoin smart contracts:

| Example | Description | Key Features |
|---------|-------------|--------------|
| **[HTLC](./example/htlc.bithoven)** | Hash Time-Locked Contract | Hash locks, timelocks, conditional payments |
| **[Atomic Swap](./example/atomic_swap.bithoven)** | Cross-chain trading | Double SHA256 hash locks, trustless exchange |
| **[Escrow](./example/escrow.bithoven)** | 2-of-3 multisig marketplace | Arbitrator, buyer/seller, time-locked refunds |
| **[Vault](./example/vault.bithoven)** | Security-enhanced wallet | Time-delayed withdrawals, immediate cold storage recovery |
| **[Multisig Voting](./example/multisig_voting.bithoven)** | DAO treasury / board approvals | 2-of-3 threshold voting, emergency 3-of-3 override |
| **[Prediction Market](./example/prediction_market.bithoven)** | Decentralized betting with hash-based oracle | Cryptographic commitment schemes, oracle proof verification |
| **[Multisig](./example/multisig.bithoven)** | 2-of-2 multisig | Taproot multi-signature support |
| **[Inheritance](./example/inheritance.bithoven)** | Tiered access control | Multiple heir levels, secret-based access |
| **[Hashlock](./example/hashlock.bithoven)** | Hash lock + signature | Double SHA256 preimage check gated by `checksig` |
| **[Timelock](./example/timelock.bithoven)** | Absolute timelock + signature | CLTV (CheckLockTimeVerify) |
| **[Single Sig](./example/singlesig.bithoven)** | Basic signature check | Simple P2PK-style contract |

**See all examples:** [Examples Directory](./example)

## 📚 Documentation

The full guide is at https://bithoven-lang.github.io/bithoven/docs/.

### Program Structure

- Two pragmas: `pragma bithoven version <x.y.z>;` and `pragma bithoven target legacy|segwit|taproot;`.
- One stack declaration per spending path, in the order the paths' `return`s appear in the source (the `if` side before the `else` side).
- Within a declaration, items are listed in the order the path consumes them: the first item is the top of the witness stack, so a branch condition comes first. Paths that split at a branch declare the items consumed before it identically.
- Every `if` has an `else`, an `if`/`else` is the last statement of its block, and every path ends in `return`.

### Primitives

- `older <n>`: Enforces a relative timelock (`OP_CHECKSEQUENCEVERIFY`), `0 ≤ n ≤ 65,535`.
- `after <n>`: Enforces an absolute timelock (`OP_CHECKLOCKTIMEVERIFY`), `0 ≤ n ≤ 4,294,967,295`.
- `checksig(sig, "<pubkey>")`: Validates a signature against a public-key literal.
- `checksig[m, (sig_1, "<pubkey_1>"), ..., (sig_n, "<pubkey_n>")]`: m-of-n multisig.
- `verify <expr>`: Fails the script unless the boolean expression is true.
- `return <expr>`: Ends the path; the spend succeeds when the boolean expression is true.
- `sha256(x)`, `ripemd160(x)`: Hashes; `sha256(sha256(x))` compiles to `OP_HASH256` and `ripemd160(sha256(x))` to `OP_HASH160`.
- `len(s)`: Byte length of a string.

### Types

- `bool`: Boolean values (`true`, `false`).
- `number`: 32-bit signed script integers.
- `string`: Hex or ASCII byte strings, at most 520 bytes.
- `signature`: ECDSA or Schnorr signatures, supplied by the witness.

Public keys are not a declarable type. They must be string literals, and the compiler checks that each one is a point on secp256k1 in the target's encoding: 33-byte compressed under `legacy`/`segwit`, 32-byte x-only under `taproot`.

## 🔬 Formal Guarantees & Evaluation

The [paper](https://arxiv.org/abs/2601.01436) gives Bithoven a formal syntax, big-step operational semantics and type system, and states two guarantees separately:

- **Safety (type soundness):** an accepted program never reaches an undefined state of Bithoven's abstract machine (Progress and Preservation).
- **Security (refinement and signature necessity):** if the emitted script succeeds on chain, the source program succeeds on a well-typed witness that agrees on every `checksig` outcome. Since no accepted path can succeed with every `checksig` false, some `checksig` must have returned true on chain.

The refinement theorem rests on an explicit trusted base, chiefly that Bitcoin Core implements the modeled fragment of Script. That assumption is tested rather than taken on faith:

| Evaluation (paper §VI) | Result |
|---|---|
| Differential validation against Bitcoin Core | 814 accepted programs, 32,560 executions, **0** accepted by consensus but rejected by the semantics |
| Mutation analysis of the harness | 11 of 11 injected compiler faults detected |
| BSHunter defect taxonomy (383,544 defective outputs) | 5 of 6 classes prevented at compile time; the 6th (`simple-key`, a weak private key) is invisible to any analysis of the contract |
| Standard Miniscript policies | 17 of 17 signature-gated contracts accepted, 0 false positives |
| Script size vs. `rust-miniscript` | Median **+1 byte** (range −1 to +8, 2 byte-identical) |
| Compile time | Median 0.147 ms per accepted contract (Apple M3 Pro) |

Each figure can be reproduced with `cargo test` and `cargo bench`; [`tests/README.md`](./tests/README.md) maps every table to its command.

**Scope.** Script-level resource limits (201 opcodes, 10,000-byte scripts, 1,000 stack items, 20 keys per multisig) are not enforced, so a very large contract can compile to an unspendable script. Taproot output is checked against expected opcodes but not executed against consensus, since `libbitcoinconsensus` has no taproot verification flag. Keyless spending paths (bare hash locks, bare timelocks, anchor outputs) are rejected by design.

## 🤝 Contributing

Contributions are welcome\! Please check out the [issues](https://github.com/ChrisCho-H/bithoven/issues) page for roadmap items or submit a PR.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ChrisCho-H/bithoven/blob/main/LICENSE) file for details.

## 📄 Citation

If you use Bithoven in your research, please cite the following paper:

> **Bithoven: Formal Safety for Expressive Bitcoin Smart Contracts.**
> Hyunhum Cho and Ik Rae Jeong, 2026.
> arXiv preprint arXiv:2601.01436. https://arxiv.org/abs/2601.01436

**BibTeX:**
```bibtex
@misc{bithoven,
      title={Bithoven: Formal Safety for Expressive Bitcoin Smart Contracts}, 
      author={Hyunhum Cho and Ik Rae Jeong},
      year={2026},
      eprint={2601.01436},
      archivePrefix={arXiv},
      primaryClass={cs.CR},
      url={https://arxiv.org/abs/2601.01436}, 
}
```

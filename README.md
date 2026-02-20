# Bithoven 🎼

**A High-Level, Imperative Language for Bitcoin Smart Contracts**

Bithoven is a type-safe, developer-friendly programming language designed to compile down to native Bitcoin Script. It bridges the gap between complex smart contract logic and the low-level stack machine of the Bitcoin Virtual Machine (VM).

Write readable, auditable code with modern control flow (`if/else`), named variables, and built-in safety checks—then compile it to highly optimized Bitcoin Script for SegWit or Taproot.

## ⚡ Key Features

- **Imperative Syntax:** Write logic using familiar `if`, `else`, and `return` statements instead of mental stack juggling.
- **Type Safety:** First-class support for `bool`, `signature`, `string`, and `number` types to prevent common runtime errors.
- **Multiple Spending Paths:** Define complex contracts (like HTLCs) with distinct execution branches and input stack requirements.
- **Targeted Compilation:** Support for `legacy`, `segwit`, and `taproot` compilation targets via pragmas.
- **Native Bitcoin Primitives:** Built-in keywords for timelocks (`older`, `after`), cryptography (`sha256`, `checksig`), and verification (`verify`).

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

/* * Stack Input Definitions
 * Each line defines a valid input stack configuration for a spending path.
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

## 📖 Examples Gallery

Bithoven comes with a rich collection of examples demonstrating real-world Bitcoin smart contracts:

| Example | Description | Key Features |
|---------|-------------|--------------|
| **[HTLC](./example/htlc.bithoven)** | Hash Time-Locked Contract | Hash locks, timelocks, conditional payments |
| **[Atomic Swap](./example/atomic_swap.bithoven)** 🆕 | Cross-chain trading | Double SHA256 hash locks, trustless exchange |
| **[Escrow](./example/escrow.bithoven)** 🆕 | 2-of-3 multisig marketplace | Arbitrator, buyer/seller, time-locked refunds |
| **[Vault](./example/vault.bithoven)** 🆕 | Security-enhanced wallet | Time-delayed withdrawals, immediate cold storage recovery |
| **[Commit-Reveal](./example/commit_reveal.bithoven)** 🆕 | Fair lottery / sealed-bid auction | Hash-based commitment scheme, timeout refunds |
| **[Prediction Market](./example/prediction_market.bithoven)** 🆕 | Decentralized betting with hash-based oracle | Cryptographic commitment schemes, oracle proof verification |
| **[Multisig](./example/multisig.bithoven)** | 2-of-2 multisig | Taproot multi-signature support |
| **[Inheritance](./example/inheritance.bithoven)** | Tiered access control | Multiple heir levels, secret-based access |
| **[Hashlock](./example/hashlock.bithoven)** | Simple hash lock | SHA256 hash verification |
| **[Timelock](./example/timelock.bithoven)** | Absolute timelock | CLTV (CheckLockTimeVerify) |
| **[Single Sig](./example/singlesig.bithoven)** | Basic signature check | Simple P2PKH-style contract |

**See all examples:** [Examples Directory](./example)

## 🛠 Compilation

When compiled, Bithoven translates the high-level imperative logic into the equivalent Bitcoin Script opcodes, handling the control flow and stack management automatically.

**Command:**

```bash
bithoven compile htlc.bithoven
```

**Generated Bitcoin Script (ASM):**

```text
OP_IF
    <0xe803> OP_CHECKSEQUENCEVERIFY OP_DROP
    <pubkey_alice> OP_CHECKSIG
OP_ELSE
    OP_HASH256 OP_TOALTSTACK <hash_digest> OP_FROMALTSTACK OP_SWAP OP_EQUALVERIFY
    <pubkey_bob> OP_CHECKSIG
OP_ENDIF
```

## 📚 Documentation

### Primitives

- `older <n>`: Enforces relative timelock (Sequence).
- `after <n>`: Enforces absolute timelock (LockTime).
- `checksig(sig, pubkey)`: Validates a signature against a public key.
- `verify <expr>`: Ensures an expression evaluates to true, otherwise fails the script.

### Types

- `bool`: Boolean values (`true`, `false`).
- `signature`: ECSDA or Schnorr signatures.
- `string`: Hex or ASCII string data.
- `number`: Integer values.

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

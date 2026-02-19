# Bithoven Examples

This directory contains real-world Bitcoin smart contract examples demonstrating the power and expressiveness of Bithoven.

## 🎯 Featured Examples

### Atomic Swap (`atomic_swap.bithoven`)

**Use Case:** Trustless cross-chain cryptocurrency exchange

A hash time-locked contract (HTLC) that enables atomic swaps between Bitcoin and other blockchains. Bob can claim BTC by revealing a secret, or Alice can reclaim after timeout.

**Key Concepts:**
- Hash locks (SHA256)
- Time locks (CSV)
- Conditional spending paths
- Cross-chain interoperability

**Real-world application:** Lightning Network payment channels, cross-chain DEX

---

### Escrow (`escrow.bithoven`)

**Use Case:** Trustless escrow service for online marketplaces

A 2-of-3 multisig contract where buyer and seller can cooperatively release funds, or an arbitrator can resolve disputes with either party.

**Key Concepts:**
- Multiple signature combinations
- Time-locked refunds
- Dispute resolution
- Trustless intermediation

**Real-world application:** E-commerce platforms, freelancer marketplaces, P2P trading

---

### Vault (`vault.bithoven`)

**Use Case:** Security-enhanced Bitcoin storage

A security-focused wallet where withdrawals require a 1-day waiting period, giving you time to cancel if your keys are compromised. Cold storage key can recover immediately.

**Key Concepts:**
- Time-delayed operations
- Emergency cancellation
- Hot/cold key hierarchy
- Security-in-depth

**Real-world application:** Corporate treasury management, high-value custody

---

### Payment Channel (`payment_channel.bithoven`)

**Use Case:** Off-chain micropayments with on-chain settlement

Enables two parties to transact off-chain with instant finality, settling on-chain only when needed. Supports both cooperative and unilateral close.

**Key Concepts:**
- Layer 2 scaling
- Cooperative close (instant)
- Unilateral close (with timeout)
- Dispute period

**Real-world application:** Lightning Network, micropayment systems, streaming payments

---

### Prediction Market (`prediction_market.bithoven`) 🆕

**Use Case:** Decentralized betting on binary outcomes with oracle resolution

Participants bet on outcomes (A vs B). Oracle commits to the outcome by publishing a hash. Winners provide the preimage to unlock funds.

**Key Concepts:**
- Oracle commitment schemes (hash-based)
- Multi-outcome resolution paths
- Time-bounded betting periods
- Refund mechanism if oracle fails

**Unique Innovation:**
- Demonstrates cryptographic proof verification for oracle integration
- Hash-lock based oracle commitments (not just signatures)
- Multi-party coordination with dispute resolution
- Combines timelocks with hash verification for trustless betting

**Real-world application:** Sports betting, price predictions (BTC above/below threshold), event outcomes, decentralized prediction markets

---

## 📚 Foundational Examples

### HTLC (`htlc.bithoven`)

The classic Hash Time-Locked Contract - a fundamental building block for many Bitcoin protocols.

### Multisig (`multisig.bithoven`)

Demonstrates 2-of-2 multisig using Taproot's `OP_CHECKSIGADD`.

### Inheritance (`inheritance.bithoven`)

Complex example with owner, heir, and multi-sig lawyer access paths with increasing timelocks.

### Hashlock (`hashlock.bithoven`)

Simple example of hash-based access control using SHA256.

### Timelock (`timelock.bithoven`)

Demonstrates absolute timelocks using `after` (CLTV).

### Single Signature (`singlesig.bithoven`)

The simplest contract - basic signature verification.

---

## 🚀 Running Examples

Compile any example:

```bash
bithoven compile example/escrow.bithoven
```

View the generated Bitcoin Script:

```bash
cat example/escrow.bithoven.json
```

## 💡 Learning Path

1. **Start Simple:** Begin with `singlesig.bithoven` and `hashlock.bithoven`
2. **Add Time:** Explore `timelock.bithoven` to understand timelocks
3. **Combine Concepts:** Study `htlc.bithoven` which combines hashes and time
4. **Real-world Contracts:** Dive into `escrow.bithoven`, `vault.bithoven`, and `atomic_swap.bithoven`
5. **Advanced Patterns:** Explore `payment_channel.bithoven` and `inheritance.bithoven`
6. **Innovative Use Cases:** 🆕 Study `prediction_market.bithoven` for oracle integration patterns

## 🔍 Key Design Patterns

### Multiple Spending Paths

Bithoven supports multiple input stack configurations, allowing different spending conditions:

```solidity
// Path 1: Owner spends immediately
(sig_owner: signature)

// Path 2: Heir spends after timelock
(sig_heir: signature)
```

### Time Locks

Two types of timelocks are supported:

- **Relative (CSV):** `older N` - Wait N blocks from UTXO creation
- **Absolute (CLTV):** `after N` - Wait until block height N

### Hash Locks

Use SHA256 hash verification for commitment schemes:

```solidity
verify sha256(preimage) == "abc123...";
```

### Conditional Logic

Use if-else statements for complex spending conditions:

```solidity
if condition {
    // Branch A logic
    return true;
} else {
    // Branch B logic
    return false;
}
```

## 📝 Important Notes

### Bitcoin Script Limitations

- **No output splitting:** Contracts cannot automatically create multiple outputs with different amounts
- **No amount awareness:** Scripts don't know the UTXO value
- **Single UTXO:** Each contract locks a single output

### Production Considerations

- Replace demo public keys with real keys
- Use high-entropy secrets for hash locks
- Test on testnet before mainnet deployment
- Consider fee rates and transaction sizes
- Understand relative timelock limits (BIP 68: max 65,535 blocks ≈ 455 days)

---

For more information, see the [main README](../README.md) or visit the [Bithoven repository](https://github.com/ChrisCho-H/bithoven).

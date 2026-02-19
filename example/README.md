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

### Crowdfund (`crowdfund.bithoven`)

**Use Case:** Time-bounded fundraising campaigns

Contributors pledge BTC with time-locked refunds if the campaign doesn't reach its goal or deadline.

**Key Concepts:**
- Time-bounded campaigns
- Multi-party coordination
- Automatic refunds
- Goal-based unlocking

**Real-world application:** DAO fundraising, community projects, startup funding

---

## 🌟 Innovative Examples

### Prediction Market (`prediction_market.bithoven`)

**Use Case:** Trustless betting on binary outcomes

Participants bet on outcomes, with winners claiming after oracle resolution via cryptographic signatures.

**Key Concepts:**
- Oracle signature verification
- Time-bounded resolution
- Multi-party claims
- Refund mechanisms

**Real-world application:** Sports betting, price predictions, event outcomes

---

### NFT Auction (`nft_auction.bithoven`)

**Use Case:** Trustless auction settlement for Bitcoin NFTs (Ordinals/Inscriptions)

After auction ends, winner and seller cooperatively complete the transaction, or winner can reclaim if seller doesn't cooperate.

**Important Note:** Bitcoin Script cannot automatically split outputs. Royalty payments must be handled off-chain or through pre-signed transaction chains.

**Key Concepts:**
- Time-bounded auction settlement
- Cooperative transaction completion
- Timeout-based refund protection

**Real-world application:** Ordinals marketplace, digital art sales

---

### Bug Bounty (`bug_bounty.bithoven`)

**Use Case:** Autonomous security vulnerability rewards

Researchers can claim bounties after a responsible disclosure period, with automatic payouts.

**Important Note:** Different severity levels require separate UTXOs with different amounts locked.

**Key Concepts:**
- Trustless bounty distribution
- Time-bound disclosure
- Automatic payouts
- Expiry reclaim

**Real-world application:** Open source security, protocol bug bounties

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
6. **Innovative Use Cases:** 🆕 Study the new examples:
   - `prediction_market.bithoven` - Oracle-based betting
   - `nft_auction.bithoven` - NFT marketplace settlement
   - `bug_bounty.bithoven` - Decentralized security rewards

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

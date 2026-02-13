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

**Real-world application:** Exchange cold storage, high-value custody, institutional treasury

---

### Payment Channel (`payment_channel.bithoven`)

**Use Case:** Off-chain micropayments with on-chain settlement

A simplified payment channel where Alice and Bob can cooperatively close instantly, or either can unilaterally close after a dispute period.

**Key Concepts:**
- Layer 2 scaling
- State commitments
- Cooperative vs unilateral close
- Dispute resolution period

**Real-world application:** Lightning Network, streaming payments, micropayment systems

---

### Digital Will (`will.bithoven`)

**Use Case:** Estate planning with progressive access

A sophisticated inheritance contract with a "dead man's switch" - if the owner doesn't move funds for 1 year, the heir can claim with a secret. After 1.5 years, a multi-sig executor can distribute.

**Key Concepts:**
- Dead man's switch pattern
- Progressive timelock escalation
- Secret-based access control
- Multi-signature recovery

**Real-world application:** Estate planning, inheritance management, long-term savings

---

### Crowdfunding (`crowdfund.bithoven`)

**Use Case:** Decentralized crowdfunding campaigns

A contract where the creator can claim funds only if the goal is met after the deadline. Contributors can reclaim if the goal isn't met.

**Key Concepts:**
- Goal-based conditions
- Time-bound campaigns
- Refund mechanisms
- Trustless fundraising

**Real-world application:** Kickstarter-style campaigns, DAO funding, grants

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
5. **Advanced Patterns:** Explore `payment_channel.bithoven` and `will.bithoven`

## 🔍 Key Design Patterns

### Multiple Spending Paths

Bithoven supports multiple input stack configurations, allowing different spending conditions:

```solidity
(sig_alice: signature)                    // Path 1
(sig_bob: signature, preimage: string)    // Path 2
```

### Time-Locked Fallbacks

Use `older` (relative) or `after` (absolute) for time-based conditions:

```solidity
older 144;  // Wait 1 day (144 blocks)
after 1000000;  // Wait until block height 1,000,000
```

### Hash-Locked Secrets

Require preimage revelation for atomic operations:

```solidity
verify sha256(sha256(preimage)) == "hash_value";
```

### Multi-Signature Coordination

Combine multiple signatures for shared control:

```solidity
checksig[2, (sig_a, pubkey_a), (sig_b, pubkey_b), (sig_c, pubkey_c)]
```

---

## 🤝 Contributing Examples

Have an interesting use case? We welcome new examples! Please ensure:

1. **Clear comments** explaining the contract purpose
2. **Real-world use case** documented in comments
3. **Compiles successfully** with `bithoven compile`
4. **Well-structured** following existing patterns
5. **Security-conscious** design choices

Submit your examples via PR to help grow the Bithoven ecosystem!

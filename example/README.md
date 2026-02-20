# Bithoven Examples

This directory contains real-world Bitcoin smart contract examples demonstrating the power and expressiveness of Bithoven.

## 🎯 Core Examples

### Atomic Swap (`atomic_swap.bithoven`)

**Use Case:** Trustless cross-chain cryptocurrency exchange

A hash time-locked contract (HTLC) that enables atomic swaps between Bitcoin and other blockchains. Bob can claim BTC by revealing a secret, or Alice can reclaim after timeout.

**Key Concepts:**
- Hash locks (double SHA256)
- Time locks (CSV)
- Conditional spending paths
- Cross-chain interoperability

**Real-world application:** Cross-chain atomic swaps, Lightning Network HTLC, trustless DEX

---

### Escrow (`escrow.bithoven`)

**Use Case:** 2-of-3 multisig marketplace transactions with arbitration

A flexible escrow contract where buyer and seller can cooperatively release funds immediately, or involve an arbitrator for dispute resolution. Includes time-locked refund mechanism after 30 days.

**Key Concepts:**
- Multi-party coordination
- 2-of-3 signing patterns (buyer+seller, arbitrator+buyer, arbitrator+seller)
- Time-delayed refunds
- Dispute resolution

**Real-world application:** P2P marketplaces, freelance platforms, real estate transactions

---

### Vault (`vault.bithoven`)

**Use Case:** Security-enhanced Bitcoin storage

A security-focused wallet where withdrawals require a 1-day waiting period, giving you time to detect compromise. Cold storage key can recover immediately without delay.

**Key Concepts:**
- Time-delayed operations
- Immediate cold storage recovery path
- Hot/cold key hierarchy  
- Security-in-depth

**Real-world application:** Corporate treasury management, high-value custody

---

### Commit-Reveal (`commit_reveal.bithoven`)

**Use Case:** Fair lottery, sealed-bid auctions, or any application requiring commitment hiding

A 2-phase protocol where a party commits funds with a hash of their secret choice, then must reveal the preimage to claim, or a timeout allows the challenger to get a refund.

**Key Concepts:**
- Commitment scheme (commit-then-reveal)
- Hash-based hiding
- Timeout refunds
- Fair games and auctions

**Real-world application:** Fair lotteries, sealed-bid auctions, rock-paper-scissors games, competitive bidding

---

### Prediction Market (`prediction_market.bithoven`)

**Use Case:** Decentralized betting with oracle integration

A decentralized prediction market where an oracle commits to outcomes via cryptographic hashes. Winners provide the hash preimage to claim funds, demonstrating trustless oracle integration.

**Key Concepts:**
- Cryptographic commitment schemes
- Oracle proof verification (SHA256)
- Multi-outcome resolution
- Time-locked refund mechanism

**Real-world application:** Sports betting, event prediction markets, insurance contracts

---

## 📘 Additional Examples

The repository includes additional examples demonstrating various Bitcoin Script patterns:

- **HTLC** - Basic hash time-locked contract pattern
- **Multisig** - 2-of-2 multi-signature authorization
- **Inheritance** - Tiered access with time-based heir progression
- **Hashlock** - Simple SHA256 hash verification
- **Timelock** - Absolute time locks using CLTV
- **Single Sig** - Basic P2PKH-style signature check

## 🎓 Learning Path

1. **Start with basics:** `singlesig.bithoven` → `hashlock.bithoven` → `timelock.bithoven`
2. **Combine concepts:** `htlc.bithoven` (hash + time locks)
3. **Multi-party patterns:** `escrow.bithoven` (2-of-3), `commit_reveal.bithoven` (bilateral)
4. **Advanced security:** `vault.bithoven` (time delays + recovery)
5. **Advanced patterns:** `atomic_swap.bithoven` (cross-chain)
6. **Innovative applications:** `prediction_market.bithoven` (oracle integration)

## ⚠️ Bitcoin Script Limitations

Bithoven compiles to Bitcoin Script, which has important constraints:

### Variable Consumption Rules
- **Each variable can only be consumed once** across all spending paths
- When designing contracts with multiple paths, use distinct variable names for each path (e.g., `sig_arbitrator_refund` and `sig_arbitrator_dispute` instead of reusing `sig_arbitrator`)
- Variables are matched by stack position - the witness must provide values that align with the chosen spending path

### Amount Blindness
- Scripts cannot know the UTXO value
- Scripts cannot automatically split payments to multiple outputs
- Amount-based logic requires pre-signed transactions or off-chain coordination

### Single Output Locking
- Each Bithoven contract locks exactly one UTXO
- Multi-output scenarios require multiple contracts or pre-signed transaction trees

These limitations mean some common patterns (like 2-of-2 escrow with separate refund paths, or complex payment channels with symmetric unilateral close) cannot be fully expressed in a single Bithoven contract. Production implementations often use:
- Pre-signed transaction trees
- Multiple UTXOs with coordinated spending
- Off-chain state channels with on-chain settlement

## Contributing

When creating new examples:
1. Follow existing naming conventions
2. Include comprehensive inline documentation  
3. Add clear use case descriptions
4. Test compilation with `cargo test --lib examples_test`
5. Document any Bitcoin Script limitations

## Resources

- Bithoven Grammar (see main project documentation)
- [Bitcoin Script Reference](https://en.bitcoin.it/wiki/Script)
- [Miniscript Policy Language](http://bitcoin.sipa.be/miniscript/)

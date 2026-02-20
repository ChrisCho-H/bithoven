// App.tsx
import { useState, useCallback, useEffect } from "react";
import * as bithoven from "bithoven";
import CodeMirror from "@uiw/react-codemirror";
import { customKeywordHighlighting } from "./pretty";
import "./App.css";

// Example configurations with metadata
const examples = [
  {
    id: "htlc",
    name: "HTLC (Hash Time-Locked Contract)",
    difficulty: "intermediate",
    description: "Lightning Network standard: hash locks + timelocks",
    icon: "⚡",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(condition: bool, sig_alice: signature)
(condition: bool, preimage: string, sig_bob: signature)
{
    // If want to spend if branch, condition witness item should be true.
    if condition {
        // Relative locktime for 1000 block confirmation.
        older 1000;
        // If locktime satisfied, alice can redeem by providing signature.
        return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
    } else {
        // Bob needs to provide secret preimage to unlock hash lock.
        verify sha256 sha256 preimage == "53de742e2e323e3290234052a702458589c30d2c813bf9f866bef1b651c4e45f";
        // If hashlock satisfied, bob can redeem by providing signature.
        return checksig (sig_bob, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
    }
}
`,
  },
  {
    id: "singlesig",
    name: "Single Signature",
    difficulty: "beginner",
    description: "Basic P2PKH-style signature check",
    icon: "✍️",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

// The most common transaction, require only the signature.
(sig_alice: signature)
{
    return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}`,
  },
  {
    id: "hashlock",
    name: "Hash Lock",
    difficulty: "beginner",
    description: "Simple SHA256 hash verification",
    icon: "🔒",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(preimage: string, sig_alice: signature)
{
    // Alice needs to provide secret preimage to unlock hash lock.
    verify sha256 sha256 preimage == "53de742e2e323e3290234052a702458589c30d2c813bf9f866bef1b651c4e45f";
    // If hashlock satisfied, alice can redeem by providing signature.
    return checksig (sig_alice, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}`,
  },
  {
    id: "timelock",
    name: "Time Lock",
    difficulty: "beginner",
    description: "Absolute timelock using CLTV",
    icon: "⏰",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(sig_alice: signature)
{
    // Absolute locktime for 10000000 block height.
    after 10000000;
    // If locktime satisfied, alice can redeem by providing signature.
    return checksig (sig_alice, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
}`,
  },
  {
    id: "atomic_swap",
    name: "Atomic Swap",
    difficulty: "intermediate",
    description: "Cross-chain trustless exchange",
    icon: "🔄",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

/*
 * Atomic Swap Contract (HTLC for Cross-Chain Trading)
 * 
 * Enables trustless exchange of cryptocurrencies across different blockchains.
 * Alice locks BTC, Bob locks another coin on different chain with same secret hash.
 * 
 * - Redeem: Bob reveals secret to claim BTC (within 48 hours)
 * - Refund: Alice gets refund after timeout if Bob doesn't claim
 * 
 * This showcases:
 * - Hash-locked transactions for atomic swaps
 * - Time-bounded offers
 * - Cross-chain interoperability pattern
 */

// Path 1: Bob claims with secret (redeem)
(is_redeem: bool, preimage: string, sig_bob: signature)

// Path 2: Alice refunds after timeout
(is_redeem: bool, sig_alice: signature)

{
    // Check if this is a redeem or refund path
    if is_redeem {
        // Bob must reveal the secret preimage
        // NOTE: This hash is for demonstration only - use a cryptographically secure random secret in production!
        verify sha256(sha256(preimage)) == "5f16f3c9c3c660498ddb6d10afc83627cb3ffe67f5cfd9aee0f2a5c1d8b1e8c2";
        
        // And provide his signature to claim
        return checksig(sig_bob, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432");
    }
    else {
        // After 48 hours (288 blocks), Alice can reclaim her BTC
        older 288;
        return checksig(sig_alice, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
    }
}`,
  },
  {
    id: "escrow",
    name: "Escrow (2-of-3 Multisig)",
    difficulty: "advanced",
    description: "Marketplace with arbitrator and refunds",
    icon: "🤝",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

// 2-of-3 Multisig Escrow Contract
// Use case: Marketplace transactions with arbitrator
// - Path 1: Buyer + Seller agree (happy path - immediate settlement)
// - Path 2: Arbitrator + Buyer agree to refund (after 30-day timeout)
// - Path 3: Arbitrator + Seller agree to release payment (dispute resolution)

// Path 1: Buyer + Seller cooperative release (happy path)
(sig_buyer: signature, sig_seller_release: signature)
// Path 2: Arbitrator + Buyer refund after timeout
(sig_buyer: signature, sig_arbitrator_refund: signature)
// Path 3: Arbitrator + Seller dispute resolution  
(sig_buyer: signature, sig_seller_dispute: signature, sig_arbitrator_dispute: signature)
{
    // Check if buyer signed
    if checksig(sig_buyer, "02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc") {
        // Path 1 or Path 2: Buyer is involved
        if checksig(sig_seller_release, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798") {
            // Path 1: Buyer + Seller agree (immediate release)
            return true;
        }
        else {
            // Path 2: Buyer + Arbitrator (refund after timeout)
            older 4320;  // 30 days = 4320 blocks
            return checksig(sig_arbitrator_refund, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432");
        }
    }
    else {
        // Path 3: Seller + Arbitrator (dispute resolution, any time)
        verify checksig(sig_seller_dispute, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
        return checksig(sig_arbitrator_dispute, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432");
    }
}`,
  },
  {
    id: "vault",
    name: "Vault (Time-Delayed Withdrawal)",
    difficulty: "advanced",
    description: "Security wallet with cold storage recovery",
    icon: "🏦",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

/*
 * Vault Contract with Time-Delayed Withdrawal
 * 
 * A security-enhanced wallet where withdrawals require a waiting period,
 * allowing time to detect compromise and use cold storage recovery.
 * 
 * - Withdrawal path: Requires withdraw signature + 1 day delay
 * - Immediate recovery: Cold storage key can always recover without delay
 * 
 * This showcases:
 * - Security-focused smart contract design
 * - Multiple privilege levels (hot/cold keys)
 * - Time-delayed operations for safety
 */

// Path 1: Normal withdrawal (after delay)
(withdraw_flag: bool, sig_withdraw: signature)

// Path 2: Emergency cancel or immediate cold storage recovery
(withdraw_flag: bool, sig_emergency: signature)

{
    // Consume withdraw_flag first (last item on stack)
    if withdraw_flag {
        // Withdrawal path: Must wait 1 day (144 blocks)
        older 144;
        return checksig(sig_withdraw, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
    }
    else {
        // Cold storage recovery or emergency cancel
        // Cold key can always recover immediately
        return checksig(sig_emergency, "02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5");
    }
}`,
  },
  {
    id: "multisig",
    name: "Multisig (2-of-2)",
    difficulty: "intermediate",
    description: "Taproot multi-signature authorization",
    icon: "👥",
    code: `pragma bithoven version 0.0.1;
// Multisig uses different opcode for segwit(OP_CHECKMULTISIG) and taproot(OP_CHECKSIGADD).
pragma bithoven target taproot;

(sig_alice: signature, sig_bob: signature)
{
    // multisig use same "checksig" syntax, but different operand comes.
    // [number of signature required, (sig, pubkey)*]
    return checksig [2, (sig_alice, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212"), (sig_bob, "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212")];
}`,
  },
  {
    id: "multisig_voting",
    name: "Multisig Voting (2-of-3 Threshold)",
    difficulty: "advanced",
    description: "DAO treasury with democratic governance",
    icon: "🗳️",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

/*
 * Multi-Signature Voting Contract (2-of-3 Threshold)
 * 
 * Enables democratic decision-making requiring approval from at least 2 out of 3 parties.
 * Use cases: DAO treasury, joint custody, board approvals, multi-stakeholder funds
 * 
 * - Execute: Any 2 of the 3 parties can approve spending
 * - Emergency: All 3 parties together can override immediately
 * 
 * This showcases:
 * - Multi-signature threshold logic (2-of-3, 3-of-3)
 * - Different approval levels for different scenarios
 * - Democratic governance pattern
 */

// Path 1: Standard approval (2-of-3 multi-sig with timelock)
(approval_type: bool, sig_a: signature, sig_b: signature, sig_c: signature)

// Path 2: Emergency override (all 3 parties, no timelock)
(approval_type: bool, sig_a_emerg: signature, sig_b_emerg: signature, sig_c_emerg: signature)

{
    // Check approval type
    if approval_type {
        // Standard 2-of-3 approval with 1-day waiting period for security
        older 144;  // 1 day = 144 blocks
        
        // Verify at least 2 of 3 signatures (using 2-of-3 multisig)
        // Provide 2 valid signatures corresponding to any 2 of the 3 parties
        return checksig[2,
            (sig_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
            (sig_b, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432"),
            (sig_c, "02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc")
        ];
    }
    else {
        // Emergency path: all 3 parties agree, can execute immediately (no timelock)
        // Require all 3 signatures (3-of-3 multisig)
        return checksig[3,
            (sig_a_emerg, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
            (sig_b_emerg, "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432"),
            (sig_c_emerg, "02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc")
        ];
    }
}`,
  },
  {
    id: "inheritance",
    name: "Inheritance (Tiered Access)",
    difficulty: "advanced",
    description: "Multi-tier heir access with secrets",
    icon: "👨‍👩‍👧",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target segwit;

(sig_owner: signature)
(sig_owner: signature, secret: string, sig_heir: signature)
(sig_owner: signature, secret: string, sig_heir: signature, sig_lawyer: signature, sig_audit: signature)
{   
    // Owner can redeem only by providing signature.
    if checksig(sig_owner,
        "03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729") {
            return true;
    } 
    else {
        // Heir can redeem after 1000 block confirmation.
        older 1000;
        // For heir to redeem, he needs to provide both signature and secret.
        if sha256(secret) == "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729" 
            && checksig(sig_heir, "0344d2b4706fee04f8718f3a411c9df0503cc7bc83488128187b016f12bfd36f4d") {
                return true;
        } 
        else {
            // Lawyer + auditor can redeem after 10000 block confirmation.
            older 10000;
            // If heir couldn't redeem, lawyer and auditor can redeem by providing signature.
            verify checksig(sig_lawyer, "03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729");
            return checksig(sig_audit, "03daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729");
        }
    }
}`,
  },
  {
    id: "prediction_market",
    name: "Prediction Market (Oracle)",
    difficulty: "expert",
    description: "Decentralized betting with hash-based oracle",
    icon: "🎲",
    code: `pragma bithoven version 0.0.1;
pragma bithoven target taproot;

/*
 * Decentralized Prediction Market with Oracle
 * 
 * A trustless betting contract for binary outcomes resolved by an oracle.
 * Participants bet on outcomes, oracle provides cryptographic proof of result,
 * and winners claim their rewards.
 * 
 * Oracle Integration Pattern:
 * - Oracle commits to event outcome by publishing hash of "outcome_A" or "outcome_B"
 * - Winners provide the preimage to unlock funds
 * - If oracle fails to resolve, refund mechanism activates
 * 
 * Use Cases:
 * - Sports betting (team A vs team B)
 * - Price predictions (BTC above/below threshold)
 * - Event outcomes (elections, weather, etc.)
 * 
 * This showcases:
 * - Oracle commitment schemes with hash locks
 * - Multi-outcome resolution paths
 * - Time-bounded dispute and refund mechanisms
 */

// Path 1: Outcome A winner claims with oracle proof
(outcome_proof: string, sig_winner_a: signature)

// Path 2: Outcome B winner claims with oracle proof
(outcome_proof: string, outcome_proof_b: string, sig_winner_b: signature)

// Path 3: Refund if oracle fails to resolve
// NOTE: outcome_proof and outcome_proof_b are still required in the witness stack because the script
//       checks them before reaching this refund branch. Provide empty strings for these parameters
//       when spending via the refund path.
(outcome_proof: string, outcome_proof_b: string, sig_refund_a: signature, sig_refund_b: signature)

{
    // Must wait for betting period to end (7 days = 1008 blocks)
    older 1008;
    
    // Check if outcome A winner is claiming with valid proof
    // NOTE: These hashes are demonstration placeholders. In production, the oracle would commit
    //       to sha256("outcome_a:<event_id>:<timestamp>:<oracle_secret>") before the event,
    //       then reveal the preimage only after the outcome is determined.
    if sha256(outcome_proof) == "8f6d9b3c1a27f4e985c2487b62a1cd0f3e9a54d28b7c64ea1f4c9e62d5b7a3c1" {
        // Outcome A confirmed - participant A wins
        return checksig(sig_winner_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
    }
    else {
        // Check if outcome B winner is claiming with valid proof
        // NOTE: Demo placeholder hash - replace with actual oracle commitment in production
        if sha256(outcome_proof_b) == "7a8c9d2b4e6f1a3c5d7e9b1f3a5c7e9d2b4f6a8c1e3a5c7e9b2d4f6a8c1e3a5c" {
            // Outcome B confirmed - participant B wins
            return checksig(sig_winner_b, "02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5");
        }
        else {
            // No valid outcome proven - both parties must agree to refund
            // Requires cooperation after extended timeout (30 days beyond betting period)
            older 4320;
            verify checksig(sig_refund_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
            return checksig(sig_refund_b, "02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5");
        }
    }
}`,
  },
];

const defaultExample = examples.find((ex) => ex.id === "htlc") || examples[0];

function App() {
  const [selectedExample, setSelectedExample] = useState(defaultExample);
  const [code, setCode] = useState<string>(defaultExample.code);
  const [output, setOutput] = useState<string>(
    'Click "Compile & Run" to execute the code.'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showExampleSelector, setShowExampleSelector] = useState(false);

  // Load example from URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const exampleId = params.get("example");
    if (exampleId) {
      const example = examples.find((ex) => ex.id === exampleId);
      if (example) {
        setSelectedExample(example);
        setCode(example.code);
      }
    }
  }, []);

  const handleExampleSelect = (example: typeof defaultExample) => {
    setSelectedExample(example);
    setCode(example.code);
    setShowExampleSelector(false);
    setOutput('Click "Compile & Run" to execute the code.');
    // Update URL without reloading
    const url = new URL(window.location.href);
    url.searchParams.set("example", example.id);
    window.history.pushState({}, "", url);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "#10b981";
      case "intermediate":
        return "#f59e0b";
      case "advanced":
        return "#ef4444";
      case "expert":
        return "#8b5cf6";
      default:
        return "#6b7280";
    }
  };

  const handleCompile = useCallback(async () => {
    setIsLoading(true);
    setOutput("Compiling...");

    try {
      const compiled = bithoven.compile_program(code).to_object();
      setOutput(
        `✅ Compilation Successful!\n\n${JSON.stringify(compiled, null, 2)}`
      );
    } catch (error) {
      console.log(error);
      console.error("Execution error:", error);
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setOutput(`❌ Compilation Error:\n\n${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [code]);

  return (
    <div className="ideContainer">
      <header className="header">
        <h1>₿ithoven Web IDE 🎼 💻 </h1>

        <div className="header-controls">
          <span className="onlineBadge">Online</span>

          {/* Documentation Link */}
          <a
            href="https://bithoven-lang.github.io/bithoven/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="githubLink"
            aria-label="View documentation"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>Docs</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/ChrisCho-H/bithoven"
            target="_blank"
            rel="noopener noreferrer"
            className="githubLink"
            aria-label="View source on GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </header>

      <main>
        {/* Example Selector */}
        <div className="exampleSelectorSection">
          <div className="exampleSelectorHeader">
            <label htmlFor="example-dropdown">
              {selectedExample.icon} {selectedExample.name}
            </label>
            <button
              className="exampleDropdownButton"
              onClick={() => setShowExampleSelector(!showExampleSelector)}
            >
              {showExampleSelector ? "▲ Hide Examples" : "▼ Browse Examples"}
            </button>
          </div>

          <p className="exampleDescription">
            <span
              className="difficultyBadge"
              style={{ backgroundColor: getDifficultyColor(selectedExample.difficulty) }}
            >
              {selectedExample.difficulty.toUpperCase()}
            </span>
            {selectedExample.description}
          </p>

          {showExampleSelector && (
            <div className="exampleGrid">
              {examples.map((example) => (
                <button
                  key={example.id}
                  className={`exampleCard ${
                    selectedExample.id === example.id ? "selected" : ""
                  }`}
                  onClick={() => handleExampleSelect(example)}
                >
                  <div className="exampleIcon">{example.icon}</div>
                  <div className="exampleInfo">
                    <div className="exampleName">{example.name}</div>
                    <div className="exampleDesc">{example.description}</div>
                    <span
                      className="difficultyBadgeSmall"
                      style={{
                        backgroundColor: getDifficultyColor(example.difficulty),
                      }}
                    >
                      {example.difficulty}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="editorSection">
          <label htmlFor="codemirror-editor">Code Editor</label>
          <CodeMirror
            id="codemirror-editor"
            value={code}
            height="400px"
            theme="dark"
            extensions={[customKeywordHighlighting]}
            onChange={(value) => setCode(value)}
          />
        </div>

        <button
          className="compileButton"
          onClick={handleCompile}
          disabled={isLoading}
        >
          {isLoading ? "Compiling..." : "▶ Compile & Run"}
        </button>

        <div className="outputSection">
          <label htmlFor="output">Output</label>
          <pre id="output" className="output">
            {output}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;

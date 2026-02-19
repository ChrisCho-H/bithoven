#[cfg(test)]
mod tests {
    use crate::compile_program;
    use std::fs;

    // Helper function to load and compile an example file
    fn compile_example(filename: &str) -> Result<crate::BithovenOutput, crate::CompileError> {
        let path = format!("example/{}", filename);
        let source = fs::read_to_string(&path)
            .unwrap_or_else(|_| panic!("Failed to read example file: {}", path));
        compile_program(source)
    }

    // Helper function to verify basic compilation success
    fn assert_compiles(filename: &str) {
        let result = compile_example(filename);
        assert!(
            result.is_ok(),
            "Failed to compile {}: {:?}",
            filename,
            result.err()
        );
        let output = result.unwrap();
        assert!(
            !output.asm().is_empty(),
            "ASM output is empty for {}",
            filename
        );
        assert!(
            !output.hex().is_empty(),
            "Hex output is empty for {}",
            filename
        );
        assert!(
            !output.bytes().is_empty(),
            "Bytes output is empty for {}",
            filename
        );
    }

    #[test]
    fn test_atomic_swap_compiles() {
        assert_compiles("atomic_swap.bithoven");
    }

    #[test]
    fn test_atomic_swap_output() {
        let output = compile_example("atomic_swap.bithoven").unwrap();
        let asm = output.asm();

        // Verify it contains expected opcodes for HTLC pattern
        assert!(asm.contains("OP_IF"), "Should have conditional logic");
        assert!(
            asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"),
            "Should have relative timelock"
        );
        assert!(
            asm.contains("OP_CHECKSIG"),
            "Should have signature verification"
        );

        println!("Atomic Swap ASM: {}", asm);
    }

    #[test]
    fn test_escrow_compiles() {
        assert_compiles("escrow.bithoven");
    }

    #[test]
    fn test_escrow_output() {
        let output = compile_example("escrow.bithoven").unwrap();
        let asm = output.asm();

        // Verify 2-of-3 multisig escrow structure
        assert!(
            asm.contains("OP_IF") || asm.contains("OP_NOTIF"),
            "Should have conditional paths"
        );
        assert!(asm.contains("OP_CHECKSIG"), "Should verify signatures");
        assert!(
            asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"),
            "Should have timelock for refund"
        );

        println!("Escrow ASM: {}", asm);
    }

    #[test]
    fn test_vault_compiles() {
        assert_compiles("vault.bithoven");
    }

    #[test]
    fn test_vault_output() {
        let output = compile_example("vault.bithoven").unwrap();
        let asm = output.asm();

        // Verify vault with time-delayed withdrawal
        assert!(asm.contains("OP_IF"), "Should have withdrawal flag logic");
        assert!(
            asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"),
            "Should have time delay"
        );
        assert!(asm.contains("OP_CHECKSIG"), "Should verify signatures");

        println!("Vault ASM: {}", asm);
    }

    #[test]
    fn test_payment_channel_compiles() {
        assert_compiles("payment_channel.bithoven");
    }

    #[test]
    fn test_payment_channel_output() {
        let output = compile_example("payment_channel.bithoven").unwrap();
        let asm = output.asm();

        // Verify payment channel structure
        assert!(
            asm.contains("OP_IF") || asm.contains("OP_NOTIF"),
            "Should have cooperative/unilateral paths"
        );
        assert!(asm.contains("OP_CHECKSIG"), "Should verify signatures");
        assert!(
            asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"),
            "Should have dispute period"
        );

        println!("Payment Channel ASM: {}", asm);
    }

    #[test]
    fn test_prediction_market_compiles() {
        assert_compiles("prediction_market.bithoven");
    }

    #[test]
    fn test_prediction_market_output() {
        let output = compile_example("prediction_market.bithoven").unwrap();
        let asm = output.asm();

        // Verify prediction market with oracle proof verification
        assert!(
            asm.contains("OP_IF") || asm.contains("OP_NOTIF"),
            "Should have outcome paths"
        );
        assert!(
            asm.contains("OP_HASH256") || asm.contains("OP_SHA256"),
            "Should verify oracle proof hash"
        );
        assert!(asm.contains("OP_CHECKSIG"), "Should verify signatures");
        assert!(
            asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"),
            "Should have betting period"
        );

        println!("Prediction Market ASM: {}", asm);
    }

    // Integration test: Verify all 5 new examples compile successfully
    #[test]
    fn test_all_five_examples_compile() {
        let examples = vec![
            "atomic_swap.bithoven",
            "escrow.bithoven",
            "vault.bithoven",
            "payment_channel.bithoven",
            "prediction_market.bithoven",
        ];

        let mut failed = Vec::new();
        for example in &examples {
            if compile_example(example).is_err() {
                failed.push(*example);
            }
        }

        assert!(
            failed.is_empty(),
            "The following examples failed to compile: {:?}",
            failed
        );

        println!("✓ All 5 examples compiled successfully!");
    }

    // Test that each example produces unique bytecode
    #[test]
    fn test_examples_produce_unique_bytecode() {
        let examples = vec![
            "atomic_swap.bithoven",
            "escrow.bithoven",
            "vault.bithoven",
            "payment_channel.bithoven",
            "prediction_market.bithoven",
        ];

        let mut bytecodes = Vec::new();
        for example in &examples {
            let output = compile_example(example).unwrap();
            bytecodes.push(output.hex());
        }

        // Verify all bytecodes are unique
        for i in 0..bytecodes.len() {
            for j in (i + 1)..bytecodes.len() {
                assert_ne!(
                    bytecodes[i], bytecodes[j],
                    "Examples {} and {} produced identical bytecode",
                    examples[i], examples[j]
                );
            }
        }

        println!("✓ All 5 examples produce unique bytecode!");
    }

    // Test that examples have reasonable script sizes
    #[test]
    fn test_examples_have_reasonable_sizes() {
        let examples = vec![
            "atomic_swap.bithoven",
            "escrow.bithoven",
            "vault.bithoven",
            "payment_channel.bithoven",
            "prediction_market.bithoven",
        ];

        for example in &examples {
            let output = compile_example(example).unwrap();
            let bytes = output.bytes();

            // Bitcoin scripts should be reasonable size (not empty, not too large)
            assert!(!bytes.is_empty(), "{} produced empty script", example);
            assert!(
                bytes.len() < 10000,
                "{} produced unusually large script: {} bytes",
                example,
                bytes.len()
            );

            println!("{}: {} bytes", example, bytes.len());
        }

        println!("✓ All 5 examples have reasonable script sizes!");
    }
}

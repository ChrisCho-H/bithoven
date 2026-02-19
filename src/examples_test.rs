#[cfg(test)]
mod tests {
    use crate::compile_program;
    use std::fs;

    fn compile_example(filename: &str) -> Result<crate::BithovenOutput, crate::CompileError> {
        let path = format!("example/{}", filename);
        let source = fs::read_to_string(&path)
            .unwrap_or_else(|_| panic!("Failed to read example file: {}", path));
        compile_program(source)
    }

    fn assert_compiles(filename: &str) {
        let result = compile_example(filename);
        assert!(
            result.is_ok(),
            "Failed to compile {}: {:?}",
            filename,
            result.err()
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

        assert!(asm.contains("OP_IF") || asm.contains("OP_NOTIF"));
        assert!(asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"));
        assert!(asm.contains("OP_CHECKSIG"));
        assert!(
            asm.contains("OP_HASH256"),
            "Should verify hash preimage with OP_HASH256 (double SHA256)"
        );
    }

    #[test]
    fn test_escrow_compiles() {
        assert_compiles("escrow.bithoven");
    }

    #[test]
    fn test_escrow_output() {
        let output = compile_example("escrow.bithoven").unwrap();
        let asm = output.asm();

        assert!(asm.contains("OP_IF") || asm.contains("OP_NOTIF"));
        assert!(asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"));
        assert!(asm.contains("OP_CHECKSIG"));
    }

    #[test]
    fn test_vault_compiles() {
        assert_compiles("vault.bithoven");
    }

    #[test]
    fn test_vault_output() {
        let output = compile_example("vault.bithoven").unwrap();
        let asm = output.asm();

        assert!(asm.contains("OP_IF") || asm.contains("OP_NOTIF"));
        assert!(asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"));
        assert!(asm.contains("OP_CHECKSIG"));
    }

    #[test]
    fn test_payment_channel_compiles() {
        assert_compiles("payment_channel.bithoven");
    }

    #[test]
    fn test_payment_channel_output() {
        let output = compile_example("payment_channel.bithoven").unwrap();
        let asm = output.asm();

        assert!(asm.contains("OP_IF") || asm.contains("OP_NOTIF"));
        assert!(asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"));
        assert!(asm.contains("OP_CHECKSIG"));
    }

    #[test]
    fn test_prediction_market_compiles() {
        assert_compiles("prediction_market.bithoven");
    }

    #[test]
    fn test_prediction_market_output() {
        let output = compile_example("prediction_market.bithoven").unwrap();
        let asm = output.asm();

        assert!(asm.contains("OP_IF") || asm.contains("OP_NOTIF"));
        assert!(
            asm.contains("OP_SHA256"),
            "Should verify oracle proof hash using OP_SHA256"
        );
        assert!(asm.contains("OP_CHECKSIG"));
        assert!(asm.contains("OP_CHECKSEQUENCEVERIFY") || asm.contains("OP_CSV"));
    }

    #[test]
    fn test_all_five_examples_compile() {
        let examples = vec![
            "atomic_swap.bithoven",
            "escrow.bithoven",
            "vault.bithoven",
            "payment_channel.bithoven",
            "prediction_market.bithoven",
        ];

        let mut failures = Vec::new();
        for example in &examples {
            if compile_example(example).is_err() {
                failures.push(*example);
            }
        }

        assert!(
            failures.is_empty(),
            "The following examples failed to compile: {:?}",
            failures
        );
    }

    #[test]
    fn test_examples_produce_unique_bytecode() {
        let examples = vec![
            "atomic_swap.bithoven",
            "escrow.bithoven",
            "vault.bithoven",
            "payment_channel.bithoven",
            "prediction_market.bithoven",
        ];

        let mut bytecodes = std::collections::HashSet::new();
        for example in examples {
            let output = compile_example(example).unwrap();
            let hex = output.hex();
            assert!(
                bytecodes.insert(hex.clone()),
                "Duplicate bytecode found for {}",
                example
            );
        }
    }

    #[test]
    fn test_examples_have_reasonable_sizes() {
        let examples = vec![
            "atomic_swap.bithoven",
            "escrow.bithoven",
            "vault.bithoven",
            "payment_channel.bithoven",
            "prediction_market.bithoven",
        ];

        for example in examples {
            let output = compile_example(example).unwrap();
            let bytes = output.bytes();
            let size = bytes.len();

            println!("{}: {} bytes", example, size);

            assert!(
                size > 0 && size < 1000,
                "{} has unreasonable size: {} bytes",
                example,
                size
            );
        }
    }
}

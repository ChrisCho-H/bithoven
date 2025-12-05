#[cfg(test)]
mod tests {
    use super::*;
    use crate::analyze::{
        analyze, build_symbol_table, check_flow, check_overflow, check_type, check_type_sig_pubkey,
        check_useless_sig, check_variable, Symbol,
    };
    // Import analyzer functions
    use crate::ast::*; // Import AST definitions
    use crate::bithoven::BithovenParser; // Import the LALRPOP Parser
    use std::collections::HashMap;
    use std::fs;

    // --- MOCK HELPERS (for unit tests) ---
    // These functions create mock AST nodes to make tests cleaner.
    // We use a "dummy" location for most mocks.

    fn loc(start: usize, end: usize) -> Location {
        Location {
            start,
            end,
            line: 1,
            column: start,
        }
    }

    fn var(name: &str) -> Expression {
        Expression::Variable(loc(0, 0), Identifier(name.to_string()))
    }

    fn num(val: i64) -> Expression {
        Expression::NumberLiteral(loc(0, 0), val)
    }

    fn bool_lit(val: bool) -> Expression {
        Expression::BooleanLiteral(loc(0, 0), val)
    }

    fn str_lit(val: &str) -> Expression {
        Expression::StringLiteral(loc(0, 0), val.to_string())
    }

    fn ident(name: &str) -> Identifier {
        Identifier(name.to_string())
    }

    fn stack_param(name: &str, ty: Type) -> StackParam {
        StackParam {
            loc: loc(0, 0),
            identifier: ident(name),
            ty,
        }
    }

    fn simple_return(expr: Expression) -> Statement {
        Statement::ExpressionStatement(loc(0, 0), expr)
    }

    fn simple_verify(expr: Expression) -> Statement {
        Statement::VerifyStatement(loc(0, 0), expr)
    }

    fn checksig(sig: Expression, pubkey: Expression) -> Expression {
        Expression::CheckSigExpression {
            loc: loc(0, 0),
            op: CheckSigOp::CheckSig,
            operand: Box::new(Factor::SingleSigFactor {
                loc: loc(0, 0),
                sig: Box::new(sig),
                pubkey: Box::new(pubkey),
            }),
        }
    }

    // A valid, minimal public key for testing
    fn valid_pubkey_literal() -> Expression {
        str_lit("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
    }

    // A default symbol table for testing helper functions
    fn mock_symbol_table() -> HashMap<String, Symbol> {
        let mut table = HashMap::new();
        table.insert(
            "a_sig".to_string(),
            Symbol {
                ty: Type::Signature,
                consume_count: 0,
                stack_position: 2,
            },
        );
        table.insert(
            "a_num".to_string(),
            Symbol {
                ty: Type::Number,
                consume_count: 0,
                stack_position: 1,
            },
        );
        table.insert(
            "a_bool".to_string(),
            Symbol {
                ty: Type::Boolean,
                consume_count: 0,
                stack_position: 0,
            },
        );
        table.insert(
            "a_str".to_string(),
            Symbol {
                ty: Type::String,
                consume_count: 0,
                stack_position: 3,
            },
        );
        table
    }

    // --- build_symbol_table TESTS ---

    #[test]
    fn test_build_symbol_table_ok() {
        let stack = vec![
            stack_param("a", Type::Number),
            stack_param("b", Type::Signature),
        ];
        let table = build_symbol_table(&stack).unwrap();
        assert_eq!(table.len(), 2);
        assert_eq!(table.get("a").unwrap().ty, Type::Number);
        assert_eq!(table.get("b").unwrap().ty, Type::Signature);
        assert_eq!(table.get("a").unwrap().stack_position, 0);
        assert_eq!(table.get("b").unwrap().stack_position, 1); // Is last, so position 0
    }

    #[test]
    fn test_build_symbol_table_err_no_sig() {
        let stack = vec![
            stack_param("a", Type::Number),
            stack_param("b", Type::String),
        ];
        let result = build_symbol_table(&stack);
        assert!(result.is_err());
        if let Err(e) = result {
            assert!(matches!(e.kind, ErrorKind::NoSigRequired(_)));
        }
    }

    #[test]
    fn test_build_symbol_table_err_duplicate_var() {
        let stack = vec![
            stack_param("a", Type::Signature),
            stack_param("a", Type::Number),
        ];
        let result = build_symbol_table(&stack);
        assert!(result.is_err());
        if let Err(e) = result {
            assert!(matches!(e.kind, ErrorKind::DuplicateVariable(_)));
        }
    }

    // --- check_variable (Liveness) TESTS ---

    #[test]
    fn test_check_var_ok_consumes_variable() {
        let mut table = mock_symbol_table();
        let expr = var("a_num");

        assert_eq!(table.get("a_num").unwrap().consume_count, 0);
        let result = check_variable(&expr, &mut table);
        assert!(result.is_ok());
        assert_eq!(table.get("a_num").unwrap().consume_count, 1);
    }

    #[test]
    fn test_check_var_err_undefined() {
        let mut table = mock_symbol_table();
        let expr = var("undefined_var");
        let result = check_variable(&expr, &mut table);
        assert!(result.is_err());
        assert!(matches!(
            result.unwrap_err().kind,
            ErrorKind::UndefinedVariable(_)
        ));
    }

    #[test]
    fn test_check_var_err_already_consumed() {
        let mut table = mock_symbol_table();
        let expr = var("a_num");

        // First consumption
        check_variable(&expr, &mut table).unwrap();
        assert_eq!(table.get("a_num").unwrap().consume_count, 1);

        // Second consumption
        let result = check_variable(&expr, &mut table);
        assert!(result.is_err());
        assert!(matches!(
            result.unwrap_err().kind,
            ErrorKind::VariableConsumed(_)
        ));
    }

    #[test]
    fn test_check_var_recursive_math() {
        let mut table = mock_symbol_table();
        let expr = Expression::BinaryMathExpression {
            loc: loc(0, 0),
            lhs: Box::new(var("a_num")),
            op: BinaryMathOp::Add,
            rhs: Box::new(var("a_bool")), // bools are numeric
        };

        check_variable(&expr, &mut table).unwrap();
        assert_eq!(table.get("a_num").unwrap().consume_count, 1);
        assert_eq!(table.get("a_bool").unwrap().consume_count, 1);
    }

    #[test]
    fn test_check_var_recursive_checksig() {
        let mut table = mock_symbol_table();
        let expr = checksig(var("a_sig"), var("a_str")); // pubkey can be a var here

        check_variable(&expr, &mut table).unwrap();
        assert_eq!(table.get("a_sig").unwrap().consume_count, 1);
        assert_eq!(table.get("a_str").unwrap().consume_count, 1);
    }

    // --- check_type TESTS ---

    #[test]
    fn test_check_type_math_ok() {
        let table = mock_symbol_table();
        let expr = Expression::BinaryMathExpression {
            loc: loc(0, 0),
            lhs: Box::new(var("a_num")),
            op: BinaryMathOp::Add,
            rhs: Box::new(var("a_bool")), // bools are numeric
        };
        assert!(check_type(&expr, &table).is_ok());
    }

    #[test]
    fn test_check_type_math_err() {
        let table = mock_symbol_table();
        let expr = Expression::BinaryMathExpression {
            loc: loc(0, 0),
            lhs: Box::new(var("a_num")),
            op: BinaryMathOp::Add,
            rhs: Box::new(var("a_str")), // strings are NOT numeric
        };
        let result = check_type(&expr, &table);
        assert!(result.is_err());
        assert!(matches!(
            result.unwrap_err().kind,
            ErrorKind::InvalidOperation(_)
        ));
    }

    #[test]
    fn test_check_type_compare() {
        let table = mock_symbol_table();
        // OK: num == num
        let expr_ok_num = Expression::CompareExpression {
            loc: loc(0, 0),
            lhs: Box::new(var("a_num")),
            op: BinaryCompareOp::Equal,
            rhs: Box::new(num(10)),
        };
        assert!(check_type(&expr_ok_num, &table).is_ok());

        // OK: str == str
        let expr_ok_str = Expression::CompareExpression {
            loc: loc(0, 0),
            lhs: Box::new(var("a_str")),
            op: BinaryCompareOp::Equal,
            rhs: Box::new(str_lit("hello")),
        };
        assert!(check_type(&expr_ok_str, &table).is_ok());

        // ERR: num == str
        let expr_err_mismatch = Expression::CompareExpression {
            loc: loc(0, 0),
            lhs: Box::new(var("a_num")),
            op: BinaryCompareOp::Equal,
            rhs: Box::new(var("a_str")),
        };
        let res_mismatch = check_type(&expr_err_mismatch, &table);
        assert!(res_mismatch.is_err());
        assert!(matches!(
            res_mismatch.unwrap_err().kind,
            ErrorKind::InvalidOperation(_)
        ));

        // ERR: str > str (only == and != allowed for strings)
        let expr_err_op = Expression::CompareExpression {
            loc: loc(0, 0),
            lhs: Box::new(var("a_str")),
            op: BinaryCompareOp::Greater,
            rhs: Box::new(str_lit("hello")),
        };
        let res_op = check_type(&expr_err_op, &table);
        assert!(res_op.is_err());
        assert!(matches!(
            res_op.unwrap_err().kind,
            ErrorKind::InvalidOperation(_)
        ));
    }

    #[test]
    fn test_check_type_byte_op() {
        let table = mock_symbol_table();
        // OK: len(string)
        let expr_ok = Expression::ByteExpression {
            loc: loc(0, 0),
            op: ByteOp::Size,
            operand: Box::new(str_lit("ascii")),
        };
        assert!(check_type(&expr_ok, &table).is_ok());

        // ERR: len(number)
        let expr_err_type = Expression::ByteExpression {
            loc: loc(0, 0),
            op: ByteOp::Size,
            operand: Box::new(num(123)),
        };
        let res_type = check_type(&expr_err_type, &table);
        assert!(res_type.is_err());
        assert!(matches!(
            res_type.unwrap_err().kind,
            ErrorKind::InvalidOperation(_)
        ));

        // ERR: len("non-ascii")
        let expr_err_ascii = Expression::ByteExpression {
            loc: loc(0, 0),
            op: ByteOp::Size,
            operand: Box::new(str_lit("hello 👋")),
        };
        let res_ascii = check_type(&expr_err_ascii, &table);
        assert!(res_ascii.is_err());
        assert!(matches!(
            res_ascii.unwrap_err().kind,
            ErrorKind::InvalidOperation(_)
        ));
    }

    // --- check_type_sig_pubkey TESTS ---

    #[test]
    fn test_check_type_sig_pubkey_ok() {
        let table = mock_symbol_table();
        let sig = var("a_sig");
        let pk = valid_pubkey_literal();
        assert!(check_type_sig_pubkey(&sig, &pk, &table).is_ok());
    }

    #[test]
    fn test_check_type_sig_pubkey_err_sig_not_var() {
        let table = mock_symbol_table();
        let sig = num(123); // sig must be a variable
        let pk = valid_pubkey_literal();
        let res = check_type_sig_pubkey(&sig, &pk, &table);
        assert!(res.is_err());
        assert!(matches!(res.unwrap_err().kind, ErrorKind::TypeMismatch(_)));
    }

    #[test]
    fn test_check_type_sig_pubkey_err_sig_wrong_type() {
        let table = mock_symbol_table();
        let sig = var("a_num"); // sig must be Type::Signature
        let pk = valid_pubkey_literal();
        let res = check_type_sig_pubkey(&sig, &pk, &table);
        assert!(res.is_err());
        assert!(matches!(
            res.unwrap_err().kind,
            ErrorKind::InvalidOperation(_)
        ));
    }

    #[test]
    fn test_check_type_sig_pubkey_err_pubkey_not_literal() {
        let table = mock_symbol_table();
        let sig = var("a_sig");
        let pk = var("a_str"); // pubkey must be a string literal
        let res = check_type_sig_pubkey(&sig, &pk, &table);
        assert!(res.is_err());
        assert!(matches!(res.unwrap_err().kind, ErrorKind::TypeMismatch(_)));
    }

    #[test]
    fn test_check_type_sig_pubkey_err_pubkey_malformed() {
        let table = mock_symbol_table();
        let sig = var("a_sig");
        let pk = str_lit("not a hex string");
        let res = check_type_sig_pubkey(&sig, &pk, &table);
        assert!(res.is_err());
        assert!(matches!(
            res.unwrap_err().kind,
            ErrorKind::MalformedPubkey(_)
        ));

        // Valid hex, but wrong length and prefix (not on curve)
        let pk_invalid =
            str_lit("04ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        let res_invalid = check_type_sig_pubkey(&sig, &pk_invalid, &table);
        assert!(res_invalid.is_err());
        assert!(matches!(
            res_invalid.unwrap_err().kind,
            ErrorKind::MalformedPubkey(_)
        ));
    }

    // --- check_security TESTS ---

    #[test]
    fn test_check_security_overflow() {
        let expr_ok = num(1000);
        assert!(check_overflow(&expr_ok).is_ok());

        let expr_err = num(i32::MAX as i64 + 1);
        let res = check_overflow(&expr_err);
        assert!(res.is_err());
        assert!(matches!(
            res.unwrap_err().kind,
            ErrorKind::IntegerOverflow(_)
        ));
    }

    #[test]
    fn test_check_security_useless_sig() {
        let expr_ok = Expression::UnaryMathExpression {
            loc: loc(0, 0),
            op: UnaryMathOp::Not,
            operand: Box::new(bool_lit(true)),
        };
        assert!(check_useless_sig(&expr_ok).is_ok());

        let expr_err = Expression::UnaryMathExpression {
            loc: loc(0, 0),
            op: UnaryMathOp::Not,
            operand: Box::new(checksig(var("a_sig"), valid_pubkey_literal())),
        };
        let res = check_useless_sig(&expr_err);
        assert!(res.is_err());
        assert!(matches!(res.unwrap_err().kind, ErrorKind::UselessSig(_)));
    }

    // --- check_flow TESTS ---

    #[test]
    fn test_check_flow_ok_simple_return() {
        let ast = vec![simple_return(num(1))];
        assert!(check_flow(&ast).is_ok());
    }

    #[test]
    fn test_check_flow_ok_if_else_return() {
        let ast = vec![Statement::IfStatement {
            loc: loc(0, 0),
            condition_expr: bool_lit(true),
            if_block: vec![simple_return(num(1))],
            else_block: Some(vec![simple_return(num(2))]),
        }];
        assert!(check_flow(&ast).is_ok());
    }

    #[test]
    fn test_check_flow_err_no_return() {
        let ast = vec![simple_verify(bool_lit(true))];
        let res = check_flow(&ast);
        assert!(res.is_err());
        assert!(matches!(res.unwrap_err().kind, ErrorKind::NoReturn(_)));
    }

    #[test]
    fn test_check_flow_err_unreachable_after_return() {
        let ast = vec![simple_return(num(1)), simple_verify(bool_lit(true))];
        let res = check_flow(&ast);
        assert!(res.is_err());
        assert!(matches!(
            res.unwrap_err().kind,
            ErrorKind::UnreachableCode(_)
        ));
    }

    #[test]
    fn test_check_flow_err_unreachable_after_if() {
        let ast = vec![
            Statement::IfStatement {
                loc: loc(0, 0),
                condition_expr: bool_lit(true),
                if_block: vec![simple_return(num(1))],
                else_block: Some(vec![simple_return(num(2))]),
            },
            simple_return(num(3)),
        ];
        let res = check_flow(&ast);
        assert!(res.is_err());
        assert!(matches!(
            res.unwrap_err().kind,
            ErrorKind::UnreachableCode(_)
        ));
    }

    #[test]
    fn test_check_flow_err_nested_no_return() {
        let ast = vec![Statement::IfStatement {
            loc: loc(0, 0),
            condition_expr: bool_lit(true),
            if_block: vec![simple_return(num(1))],
            else_block: Some(vec![simple_verify(bool_lit(true))]), // This path has no return
        }];
        let res = check_flow(&ast);
        assert!(res.is_err());
        assert!(matches!(res.unwrap_err().kind, ErrorKind::NoReturn(_)));
    }

    // --- Analyzer Integration Tests (End-to-End) ---
    // These tests use the LALRPOP parser to test the `analyze` function.

    // Helper macro to parse and analyze in one step
    macro_rules! assert_analyzes {
        ($input:expr) => {{
            let parser = BithovenParser::new();
            let parsed = parser.parse($input).expect("Parser failed on valid input");
            let res = analyze(
                &parsed.output_script,
                parsed.input_stack,
                &parsed.pragma.target,
            );
            assert!(res.is_ok(), "Analyzer failed on valid input: {:?}", res);
        }};
    }

    // Helper macro to parse and check for a specific analyzer error
    macro_rules! assert_analyze_fails {
        ($input:expr, $expected_kind:pat) => {{
            let parser = BithovenParser::new();
            let parsed = parser.parse($input).expect("Parser failed on input string");
            let res = analyze(
                &parsed.output_script,
                parsed.input_stack,
                &parsed.pragma.target,
            );
            assert!(res.is_err(), "Analyzer unexpectedly succeeded");
            let err_kind = res.unwrap_err().kind;
            assert!(
                matches!(err_kind, $expected_kind),
                "Expected error {:?}, but got {:?}",
                stringify!($expected_kind),
                err_kind
            );
        }};
    }

    #[test]
    fn test_analyze_integration_ok_simple() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (my_sig: signature)
            {
                return checksig(my_sig, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
            }
        "#;
        assert_analyzes!(input);
    }

    #[test]
    fn test_analyze_integration_ok_multi_branch() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target taproot;
            (sig_a: signature)
            (sig_b: signature, preimage: string)
            {
                if true {
                    return checksig(sig_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
                } else {
                    verify sha256(preimage) == "0000000000000000000000000000000000000000000000000000000000000000";
                    return checksig(sig_b, "03a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7");
                }
            }
        "#;
        assert_analyzes!(input);
    }

    #[test]
    fn test_analyze_integration_err_no_sig() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (a_num: number) // No signature
            {
                return a_num == 1;
            }
        "#;
        assert_analyze_fails!(input, ErrorKind::NoSigRequired(_));
    }

    #[test]
    fn test_analyze_integration_err_liveness_consumed() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (my_sig: signature)
            {
                // Liveness error: my_sig consumed twice in one expression
                return checksig(my_sig, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798") 
                    && checksig(my_sig, "03a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7");
            }
        "#;
        assert_analyze_fails!(input, ErrorKind::VariableConsumed(_));
    }

    #[test]
    fn test_analyze_integration_err_useless_sig() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (my_sig: signature)
            {
                return !checksig(my_sig, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
            }
        "#;
        assert_analyze_fails!(input, ErrorKind::UselessSig(_));
    }

    #[test]
    fn test_analyze_integration_err_no_return() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (my_sig: signature)
            {
                verify checksig(my_sig, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798");
                // No return statement
            }
        "#;
        assert_analyze_fails!(input, ErrorKind::NoReturn(_));
    }

    #[test]
    fn test_analyze_integration_err_unreachable() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (my_sig: signature)
            {
                return 1;
                older 100; // Unreachable
            }
        "#;
        assert_analyze_fails!(input, ErrorKind::UnreachableCode(_));
    }

    #[test]
    fn test_analyze_integration_err_type_mismatch() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (my_sig: signature, my_pk_var: string)
            {
                // Fails because pubkey MUST be a string literal, not a variable.
                return checksig(my_sig, my_pk_var);
            }
        "#;
        assert_analyze_fails!(input, ErrorKind::TypeMismatch(_));
    }

    #[test]
    fn test_analyze_integration_err_scope_violation() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (sig_a: signature) // Branch 0
            (sig_b: signature) // Branch 1
            {
                if true {
                    return checksig(sig_a, "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"); // OK
                } else {
                    // Error: sig_a is not in Branch 1's scope
                    return checksig(sig_a, "03a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7"); 
                }
            }
        "#;
        assert_analyze_fails!(input, ErrorKind::UndefinedVariable(_));
    }

    #[test]
    #[should_panic] // This test should panic because it tries to access scope_vec[1]
    fn test_analyze_panic_branch_mismatch() {
        // This tests for a bug in the analyzer itself.
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (sig_a: signature) // Only one stack provided
            {
                if true {
                    return 1;
                } else {
                    return 2; // This 'else' will cause branch=1
                }
            }
        "#;
        // The parser succeeds
        let parser = BithovenParser::new();
        let parsed = parser.parse(input).expect("Parser failed");

        // This will call analyze_statement with branch=1, which panics on scope_vec[1]
        // This is a valid test, as it identifies a crash bug in the analyzer.
        let _ = analyze(
            &parsed.output_script,
            parsed.input_stack,
            &parsed.pragma.target,
        );
    }

    #[test]
    fn test_full_program() {
        // Create a single parser instance to reuse
        let parser = BithovenParser::new();
        let example_dir = "example/";

        // 1. Read the directory
        let entries = fs::read_dir(example_dir).expect(&format!(
            "Failed to read '{}' directory. Make sure it exists at the project root.",
            example_dir
        ));

        let mut file_count = 0;

        // 2. Iterate over each file in the directory
        for entry in entries {
            let entry = entry.expect("Failed to read directory entry");
            let path = entry.path();

            // 3. Filter for files that end with ".bithoven"
            if path.is_file() && path.extension().map_or(false, |s| s == "bithoven") {
                let file_path_str = path.to_str().unwrap_or("invalid_path");
                println!("--- Testing file: {} ---", file_path_str);
                file_count += 1;

                // 4. Read the file content
                let input = fs::read_to_string(&path)
                    .expect(&format!("Failed to read test file: {}", file_path_str));

                // 5. Parse the content
                // We don't use assert_parses! here because we want to
                // provide a custom error message that includes the filename.
                let parsed = parser.parse(&input).unwrap_or_else(|e| {
                    panic!(
                        "\n\nFailed to parse example file: {}\n\nParse Error: {:?}\n\n",
                        file_path_str, e
                    )
                });

                // 6. Analyze all
                analyze(
                    &parsed.output_script,
                    parsed.input_stack,
                    &parsed.pragma.target,
                )
                .expect("Analyze Error: ");
            }
        }
        // 6. A final sanity check
        assert!(
            file_count > 0,
            "No '.bithoven' files were found in the 'example/' directory. The test did not run."
        );

        println!("\nSuccessfully parsed all {} example files.", file_count);
    }

    #[test]
    #[should_panic] // This test should panic because it states unused variable HELLO.
    fn test_analyze_unused_variable() {
        // This tests for a bug in the analyzer itself.
        let input = r#"
            pragma bithoven version 0.0.1;
            pragma bithoven target segwit;
            // ERROR: HELLO is unsed.
            (condition: bool, sig_alice: signature, HELLO: string)
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
        "#;
        // The parser succeeds
        let parser = BithovenParser::new();
        let parsed = parser.parse(input).expect("Parser failed");

        analyze(
            &parsed.output_script,
            parsed.input_stack,
            &parsed.pragma.target,
        ).expect("Analyze Error: ");
    }

    #[test]
    #[should_panic] // This test should panic because it used consumed variable "contintion" in second branch.
    fn test_analyze_used_variable_in_before_stack() {
        // This tests for a bug in the analyzer itself.
        let input = r#"
            pragma bithoven version 0.0.1;
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
                    // ERROR: condition is already consumed in before branch.
                    verify condition == true;
                    // Bob needs to provide secret preimage to unlock hash lock.
                    verify sha256 sha256 preimage == "53de742e2e323e3290234052a702458589c30d2c813bf9f866bef1b651c4e45f";
                    // If hashlock satisfied, bob can redeem by providing signature.
                    return checksig (sig_bob, "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212");
                }
            }
        "#;
        // The parser succeeds
        let parser = BithovenParser::new();
        let parsed = parser.parse(input).expect("Parser failed");
        
        analyze(
            &parsed.output_script,
            parsed.input_stack,
            &parsed.pragma.target,
        ).expect("Analyze Error: ");
    }
}

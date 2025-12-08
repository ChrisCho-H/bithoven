#[cfg(test)]
mod tests {
    use super::*; // Import the parsers
    use crate::{
        ast::*,
        bithoven::{
            BithovenParser, BooleanLiteralParser, Expression0Parser, MultiSigFactorParser,
            NumberLiteralParser, StackParser, StatementParser, StringLiteralParser,
        },
    }; // Import your AST definitions
    use std::fs;

    // Helper macro to parse and expect success
    macro_rules! assert_parses {
        ($parser:expr, $input:expr) => {{
            let parser = $parser;
            match parser.parse($input) {
                Ok(ast) => ast,
                Err(e) => panic!("Failed to parse input: {:?}\nError: {:?}", $input, e),
            }
        }};
    }

    // Helper macro to parse and expect failure
    macro_rules! assert_fails {
        ($parser:expr, $input:expr) => {{
            let parser = $parser;
            assert!(
                parser.parse($input).is_err(),
                "Parser unexpectedly succeeded on input: {:?}",
                $input
            );
        }};
    }

    #[test]
    fn test_empty_program() {
        let input = r#"
            pragma bithoven version 0.0.1;
            pragma bithoven target segwit;
            {}
        "#;
        let ast = assert_parses!(BithovenParser::new(), input);

        assert_eq!(ast.pragma.language, "bithoven");
        assert_eq!(ast.pragma.version, "0.0.1");
        assert_eq!(ast.pragma.target, Target::Segwit);
        assert!(ast.input_stack.is_empty());
        assert!(ast.output_script.is_empty());
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
                parser.parse(&input).unwrap_or_else(|e| {
                    panic!(
                        "\n\nFailed to parse example file: {}\n\nParse Error: {:?}\n\n",
                        file_path_str, e
                    )
                });
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
    fn test_stack_param_order() {
        // Your grammar for StackParamList:
        // <first:StackParam> <mut more:MoreStackParams*> => {
        //     more.reverse();
        //     more.push(first);
        //     more
        // },
        // This will parse (a, b, c) into a vec![c, b, a]
        // This test validates that behavior.

        let input = r#"(a: bool, b: string, c: number)"#;
        let ast = assert_parses!(StackParser::new(), input);

        assert_eq!(ast.len(), 3);
        assert_eq!(ast[0].identifier, Identifier("c".to_string()));
        assert_eq!(ast[0].ty, Type::Number);

        assert_eq!(ast[1].identifier, Identifier("b".to_string()));
        assert_eq!(ast[1].ty, Type::String);

        assert_eq!(ast[2].identifier, Identifier("a".to_string()));
        assert_eq!(ast[2].ty, Type::Boolean);
    }

    #[test]
    fn test_empty_stack() {
        let input = r#"()"#;
        let ast = assert_parses!(StackParser::new(), input);
        assert!(ast.is_empty());
    }

    #[test]
    fn test_expression_associativity() {
        // `1 + 2 - 3` should be parsed as `(1 + 2) - 3`
        // due to the left-recursive structure of your grammar.
        let input = "1 + 2 - 3";
        let ast = assert_parses!(Expression0Parser::new(), input);

        if let Expression::BinaryMathExpression { loc, lhs, op, rhs } = ast {
            assert_eq!(op, BinaryMathOp::Sub);

            // Check RHS
            if let Expression::NumberLiteral(_, 3) = *rhs {
            } else {
                panic!("RHS should be 3");
            }

            // Check LHS
            if let Expression::BinaryMathExpression {
                loc,
                lhs: lhs2,
                op: op2,
                rhs: rhs2,
            } = *lhs
            {
                assert_eq!(op2, BinaryMathOp::Add);
                if let Expression::NumberLiteral(_, 1) = *lhs2 {
                } else {
                    panic!("LHS of inner expression should be 1");
                }
                if let Expression::NumberLiteral(_, 2) = *rhs2 {
                } else {
                    panic!("RHS of inner expression should be 2");
                }
            } else {
                panic!("LHS should be '1 + 2'");
            }
        } else {
            panic!("Expected BinaryMathExpression");
        }
    }

    #[test]
    fn test_multisig_factor() {
        let input = "[2, (sig1, pk1), (sig2, pk2), (sig3, pk3)]";
        let ast = assert_parses!(MultiSigFactorParser::new(), input);

        if let Factor::MultiSigFactor { m, ref n, .. } = ast {
            // Added ref to n
            assert_eq!(m, 2);
            assert_eq!(n.len(), 3);

            // Check the first SingleSigFactor
            if let Factor::SingleSigFactor { sig, pubkey, .. } = &n[0] {
                // Borrow n[0]

                // Use 'ref id' to bind by reference, not move
                if let Expression::Variable(_, ref id) = **sig {
                    assert_eq!(*id, Identifier("sig1".to_string()));
                } else {
                    panic!("Expected sig1");
                }

                // Use 'ref id' here too
                if let Expression::Variable(_, ref id) = **pubkey {
                    assert_eq!(*id, Identifier("pk1".to_string()));
                } else {
                    panic!("Expected pk1");
                }
            } else {
                panic!("Expected SingleSigFactor");
            }
        } else {
            panic!("Expected MultiSigFactor");
        }
    }

    #[test]
    fn test_number_literals() {
        let pos = assert_parses!(NumberLiteralParser::new(), "12345");
        assert_eq!(pos, 12345);

        let neg = assert_parses!(NumberLiteralParser::new(), "-42");
        assert_eq!(neg, -42);
    }

    #[test]
    fn test_string_literal() {
        let input = r#""hello world""#;
        let ast = assert_parses!(StringLiteralParser::new(), input);
        assert_eq!(ast, "hello world");

        // This input is now valid according to your grammar
        let input_escaped = r#""hello \"world\" \\n""#; // <-- Note the double backslash
        let ast_escaped = assert_parses!(StringLiteralParser::new(), input_escaped);
        assert_eq!(ast_escaped, r#"hello \"world\" \\n"#);
    }

    #[test]
    fn test_invalid_syntax_bad_version() {
        let input = r#"
            pragma bithoven version 1.x.3;
            pragma bithoven target segwit;
            {}
        "#;
        assert_fails!(BithovenParser::new(), input);
    }

    #[test]
    fn test_invalid_syntax_missing_semicolon() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            {
                return 1 // <-- missing semicolon
            }
        "#;
        assert_fails!(BithovenParser::new(), input);
    }

    #[test]
    fn test_invalid_syntax_bad_target() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target btrfs; // <-- invalid target
            {}
        "#;
        assert_fails!(BithovenParser::new(), input);
    }

    // --- NEW TESTS START HERE ---

    #[test]
    fn test_pragma_legacy_target() {
        let input = r#"
            pragma bithoven version 0.0.1;
            pragma bithoven target legacy;
            {}
        "#;
        let ast = assert_parses!(BithovenParser::new(), input);
        assert_eq!(ast.pragma.target, Target::Legacy);
    }

    #[test]
    fn test_if_statement_no_else() {
        let input = "if true { return 1; }";
        let ast = assert_parses!(StatementParser::new(), input);
        if let Statement::IfStatement { else_block, .. } = ast {
            assert!(else_block.is_none());
        } else {
            panic!("Expected IfStatement");
        }
    }

    #[test]
    fn test_verify_statement() {
        let input = "verify true;";
        let ast = assert_parses!(StatementParser::new(), input);
        if let Statement::VerifyStatement(_, expr) = ast {
            if let Expression::BooleanLiteral(_, true) = expr {
            } else {
                panic!("Expected 'true'");
            }
        } else {
            panic!("Expected VerifyStatement");
        }
    }

    #[test]
    fn test_locktime_statements() {
        let input_older = "older 144;";
        let ast_older = assert_parses!(StatementParser::new(), input_older);
        if let Statement::LocktimeStatement { op, operand, .. } = ast_older {
            assert_eq!(op, LocktimeOp::Csv);
            assert_eq!(operand, 144);
        } else {
            panic!("Expected LocktimeStatement for older");
        }

        let input_after = "after 500000;";
        let ast_after = assert_parses!(StatementParser::new(), input_after);
        if let Statement::LocktimeStatement { op, operand, .. } = ast_after {
            assert_eq!(op, LocktimeOp::Cltv);
            assert_eq!(operand, 500000);
        } else {
            panic!("Expected LocktimeStatement for after");
        }
    }

    #[test]
    fn test_logical_or_expression() {
        let input = "true || false";
        let ast = assert_parses!(Expression0Parser::new(), input);
        if let Expression::LogicalExpression { op, .. } = ast {
            assert_eq!(op, BinaryLogicalOp::BoolOr);
        } else {
            panic!("Expected LogicalExpression");
        }
    }

    #[test]
    fn test_comparison_expressions() {
        let ops = [
            ("==", BinaryCompareOp::Equal),
            ("!=", BinaryCompareOp::NotEqual),
            (">", BinaryCompareOp::Greater),
            (">=", BinaryCompareOp::GreaterOrEqual),
            ("<", BinaryCompareOp::Less),
            ("<=", BinaryCompareOp::LessOrEqual),
        ];

        for (op_str, op_enum) in ops.iter() {
            let input = format!("a {} b", op_str);
            let ast = assert_parses!(Expression0Parser::new(), &input);
            if let Expression::CompareExpression { op, .. } = ast {
                assert_eq!(op, *op_enum);
            } else {
                panic!("Expected CompareExpression for {}", op_str);
            }
        }
    }

    #[test]
    fn test_postfix_math_expressions() {
        let input_max = "max(a, b)";
        let ast_max = assert_parses!(Expression0Parser::new(), input_max);
        if let Expression::BinaryMathExpression { op, .. } = ast_max {
            assert_eq!(op, BinaryMathOp::Max);
        } else {
            panic!("Expected BinaryMathExpression for max");
        }

        let input_min = "min(1, 2)";
        let ast_min = assert_parses!(Expression0Parser::new(), input_min);
        if let Expression::BinaryMathExpression { op, .. } = ast_min {
            assert_eq!(op, BinaryMathOp::Min);
        } else {
            panic!("Expected BinaryMathExpression for min");
        }
    }

    #[test]
    fn test_unary_math_expressions() {
        let ops = [
            ("++a", UnaryMathOp::Add),
            ("--a", UnaryMathOp::Sub),
            ("negate a", UnaryMathOp::Negate),
            ("abs a", UnaryMathOp::Abs),
            ("!a", UnaryMathOp::Not),
        ];

        for (op_str, op_enum) in ops.iter() {
            let input = op_str;
            let ast = assert_parses!(Expression0Parser::new(), input);
            if let Expression::UnaryMathExpression { op, .. } = ast {
                assert_eq!(op, *op_enum);
            } else {
                panic!("Expected UnaryMathExpression for {}", op_str);
            }
        }
    }

    #[test]
    fn test_unary_crypto_expressions() {
        let input_sha = "sha256 a";
        let ast_sha = assert_parses!(Expression0Parser::new(), input_sha);
        if let Expression::UnaryCryptoExpression { op, .. } = ast_sha {
            assert_eq!(op, UnaryCryptoOp::Sha256);
        } else {
            panic!("Expected UnaryCryptoExpression for sha256");
        }

        let input_ripemd = "ripemd160 a";
        let ast_ripemd = assert_parses!(Expression0Parser::new(), input_ripemd);
        if let Expression::UnaryCryptoExpression { op, .. } = ast_ripemd {
            assert_eq!(op, UnaryCryptoOp::Ripemd160);
        } else {
            panic!("Expected UnaryCryptoExpression for ripemd160");
        }
    }

    #[test]
    fn test_byte_expression() {
        let input = "len a";
        let ast = assert_parses!(Expression0Parser::new(), input);
        if let Expression::ByteExpression { op, .. } = ast {
            assert_eq!(op, ByteOp::Size);
        } else {
            panic!("Expected ByteExpression for len");
        }
    }

    #[test]
    fn test_checksig_with_multisig() {
        let input = "checksig [2, (s1, p1), (s2, p2)]";
        let ast = assert_parses!(Expression0Parser::new(), input);
        if let Expression::CheckSigExpression { operand, .. } = ast {
            if let Factor::MultiSigFactor { m, n, .. } = *operand {
                assert_eq!(m, 2);
                assert_eq!(n.len(), 2);
            } else {
                panic!("Expected MultiSigFactor inside checksig");
            }
        } else {
            panic!("Expected CheckSigExpression");
        }
    }

    #[test]
    fn test_parentheses_precedence() {
        // Test `true && (false || true)`
        let input = "true && (false || true)";
        let ast = assert_parses!(Expression0Parser::new(), input);
        if let Expression::LogicalExpression { loc, lhs, op, rhs } = ast {
            assert_eq!(op, BinaryLogicalOp::BoolAnd);
            if let Expression::BooleanLiteral(_, true) = *lhs {
            } else {
                panic!("LHS should be 'true'");
            }
            if let Expression::LogicalExpression { op: op2, .. } = *rhs {
                assert_eq!(op2, BinaryLogicalOp::BoolOr);
            } else {
                panic!("RHS should be '(false || true)'");
            }
        } else {
            panic!("Expected outer LogicalExpression (&&)");
        }
    }

    #[test]
    fn test_boolean_literal_false() {
        let input = "false";
        let ast = assert_parses!(BooleanLiteralParser::new(), input);
        assert_eq!(ast, false);
    }

    #[test]
    fn test_invalid_syntax_mismatched_brace() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            {
                return 1;
            // <-- missing closing brace
        "#;
        assert_fails!(BithovenParser::new(), input);
    }

    #[test]
    fn test_invalid_syntax_mismatched_paren_stack() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            (a: bool // <-- missing closing paren
            {}
        "#;
        assert_fails!(BithovenParser::new(), input);
    }

    #[test]
    fn test_invalid_syntax_mismatched_paren_expr() {
        let input = r#"
            pragma bithoven version 1.0.0;
            pragma bithoven target segwit;
            {
                return (1 + 2;
            }
        "#;
        assert_fails!(BithovenParser::new(), input);
    }
}

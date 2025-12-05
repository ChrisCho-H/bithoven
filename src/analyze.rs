use std::collections::HashMap;

use crate::ast::*;
use crate::source::*;

/// A Scope holds all the contextual information for a single block of code.
#[derive(Debug, Clone)]
pub struct Scope {
    /// The symbol table containing all variables declared in *this specific scope*.
    pub symbol_table: HashMap<String, Symbol>,

    /// What kind of scope is this? (Global, a conditional branch, a function, etc.)
    pub branch: usize,
}

// Symbol to build symbol table from stack
#[derive(Debug, Clone)]
pub struct Symbol {
    /// The type of the variable (e.g., bool, signature).
    pub ty: Type,

    /// How many times the variable has been consumed.
    /// Consumed to enforce "use exactly once" rules.
    pub consume_count: usize,

    /// The initial depth on the stack (0 = top).
    /// Used to verify consumption order.
    pub stack_position: usize,
}

// To do. need to check multiple stacks and whether the order is accurate(following execution path)
// Check the duplication here.
// Check whether it has signature or not, which is crucial security property.
pub fn build_symbol_table(
    stack_vec: &Vec<StackParam>,
) -> Result<HashMap<String, Symbol>, CompileError> {
    // Key is identifier
    let mut symbol_table: HashMap<String, Symbol> = HashMap::new();
    let mut has_sig: bool = false;
    for (i, stack_item) in stack_vec.iter().enumerate().rev() {
        let item = stack_item.to_owned();

        if item.ty == Type::Signature {
            has_sig = true;
        }

        if symbol_table.get(&stack_item.identifier.0).is_some() {
            return Err(CompileError {
                loc: item.loc,
                kind: ErrorKind::DuplicateVariable(format!(
                    "The name of argument cannot be duplicate: {:?} already exists.",
                    item.identifier.0,
                )),
            });
        }
        symbol_table.insert(
            item.to_owned().identifier.0,
            Symbol {
                ty: item.ty,
                consume_count: 0,
                stack_position: i,
            },
        );
    }
    if has_sig {
        Ok(symbol_table)
    } else {
        Err(CompileError {
            loc: stack_vec[0].clone().loc,
            kind: ErrorKind::NoSigRequired(format!(
                "At least one signature required for stack but: {:?}.",
                stack_vec,
            )),
        })
    }
}

pub fn analyze(
    ast: &Vec<Statement>,
    input: Vec<Vec<StackParam>>,
    target: &Target,
) -> Result<(), CompileError> {
    let mut scope_vec: Vec<Scope> = vec![];
    for (branch, stack) in input.iter().enumerate() {
        scope_vec.push(Scope {
            symbol_table: build_symbol_table(&stack)?,
            branch: branch,
        });
    }

    analyze_statement(ast, &mut scope_vec, target, 0)?;
    check_flow(ast)?;

    // Check unused variable at last.
    for (i, stack) in input.iter().enumerate() {
        check_unused_variable(&stack, &scope_vec[i].symbol_table)?;
    }

    Ok(())
}

pub fn analyze_statement(
    ast: &Vec<Statement>,
    scope_vec: &mut Vec<Scope>,
    target: &Target,
    mut branch: usize,
) -> Result<usize, CompileError> {
    // Check statements in global scope of current branch.
    for stmt in ast {
        match stmt {
            Statement::LocktimeStatement { loc, operand, op } => {}
            Statement::VerifyStatement(loc, expr) => {
                check_variable(expr, &mut scope_vec[branch].symbol_table)?;
                check_type(expr, &mut scope_vec[branch].symbol_table)?;
                check_security(expr)?
            }
            Statement::ExpressionStatement(loc, expr) => {
                check_variable(expr, &mut scope_vec[branch].symbol_table)?;
                check_type(expr, &mut scope_vec[branch].symbol_table)?;
                check_security(expr)?
            }
            Statement::IfStatement {
                loc,
                condition_expr,
                if_block,
                else_block,
            } => {
                check_variable(condition_expr, &mut scope_vec[branch].symbol_table)?;
                check_type(condition_expr, &mut scope_vec[branch].symbol_table)?;
                check_security(condition_expr)?;

                branch = analyze_statement(&if_block, scope_vec, target, branch)?;
                if else_block.is_some() {
                    branch += 1;
                    // Mark consumed variable before checkout to new stack branch.
                    let [before, current]: &mut [Scope; 2] = (&mut scope_vec[branch - 1..=branch])
                        .try_into()
                        .expect("Non existing stack look up.");
                    let before_stack = &mut before.symbol_table;
                    let current_stack = &mut current.symbol_table;
                    mark_consumed_stack(before_stack, current_stack)?;

                    branch = analyze_statement(
                        else_block.to_owned().unwrap().as_ref(),
                        scope_vec,
                        target,
                        branch,
                    )?;
                }
            }
        }
    }
    Ok(branch)
}

pub fn check_unused_variable(
    stack_vec: &Vec<StackParam>,
    stack_table: &HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    for e in stack_vec {
        // If consume count is 0, it's unconsumed.
        if stack_table
            .get(&e.identifier.0)
            .is_some_and(|v| v.consume_count == 0)
        {
            return Err(CompileError {
                loc: e.to_owned().loc(),
                kind: ErrorKind::UnusedVariable(format!("Variable unsed: {:?}.", e.identifier)),
            });
        }
    }
    return Ok(());
}

pub fn mark_consumed_stack(
    before_stack: &mut HashMap<String, Symbol>,
    current_stack: &mut HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    for (k, v) in before_stack {
        if current_stack.get(k).is_some() {
            let consumed_item = current_stack.get(k).unwrap().clone();

            // Counter consume_count consumed in before stack(shared item).
            current_stack.insert(
                k.to_string(),
                Symbol {
                    ty: consumed_item.ty,
                    consume_count: 1,
                    stack_position: consumed_item.stack_position,
                },
            );
        }
    }

    return Ok(());
}

// No sequential if/else block && No statement after if/else block.
// Unreachable Code Detection(No statement after return statement).
// Final Statement must be expression statement.
pub fn check_flow(ast: &Vec<Statement>) -> Result<(), CompileError> {
    // No sequential if/else block && No statement after if/else block
    // Check No statement after return statement.
    for (i, statement) in ast.iter().enumerate() {
        match statement {
            Statement::IfStatement { .. } => {
                // Check No statement after if/else block,
                // as it can be placed before if/else block.
                if i != ast.len() - 1 {
                    let next = ast[i + 1].to_owned();
                    return Err(CompileError {
                        loc: next.to_owned().loc(),
                        kind: ErrorKind::UnreachableCode(format!(
                            "No statement after if/else block but: {:?}.",
                            next
                        )),
                    });
                }
            }
            Statement::ExpressionStatement(..) => {
                // Check No statement after return statement.
                if i != ast.len() - 1 {
                    let next = ast[i + 1].to_owned();
                    return Err(CompileError {
                        loc: next.to_owned().loc(),
                        kind: ErrorKind::UnreachableCode(format!(
                            "Unreachable code after return statement: {:?}. Move return statement at the last scope of execution path",
                            next
                        )),
                    });
                }
            }
            _ => (),
        }
    }
    let last = ast.last().unwrap().to_owned();
    // Final Statement must be expression statement.
    match last {
        Statement::IfStatement {
            if_block,
            else_block,
            ..
        } => {
            check_flow(&if_block)?;
            if else_block.is_some() {
                check_flow(&else_block.unwrap())?;
            }
        }
        Statement::ExpressionStatement(..) => (),
        _ => {
            return Err(CompileError {
                loc: last.to_owned().loc(),
                kind: ErrorKind::NoReturn(format!(
                    "Return statement must exist for each possible execution path: {:?}.",
                    last
                )),
            });
        }
    }

    Ok(())
}

// Undefined Variable Check
// Consumed Variable Check
// Scope Enforcement
// Unconsumed Variable Check
// Check order of consumption(stack position)
pub fn check_variable(
    expression: &Expression,
    symbol_table: &mut HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    match expression {
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            // 1. Check the existence of variable
            if symbol_table.get(&id_string).is_none() {
                return Err(CompileError {
                    loc: expression.to_owned().loc(),
                    kind: ErrorKind::UndefinedVariable(format!(
                        "Undefined variable: {:?}.",
                        id_string
                    )),
                });
            }
            let item = symbol_table.get(&id_string).unwrap().to_owned();
            // 2. Check the consumption of variable
            if item.consume_count != 0 {
                return Err(CompileError {
                    loc: expression.to_owned().loc(),
                    kind: ErrorKind::VariableConsumed(format!(
                        "Consumed variable: {:?}.",
                        id_string
                    )),
                });
            }
            // 3. Counter consume_count
            symbol_table.insert(
                id_string,
                Symbol {
                    ty: item.ty,
                    consume_count: 1,
                    stack_position: item.stack_position,
                },
            );

            Ok(())
        }
        Expression::CheckSigExpression {
            loc: _,
            operand,
            op: _,
        } => match &**operand {
            Factor::SingleSigFactor {
                loc: _,
                sig,
                pubkey,
            } => {
                check_variable(&sig, symbol_table)?;
                check_variable(&pubkey, symbol_table)
            }
            Factor::MultiSigFactor { loc: _, m: _, n } => {
                for factor in n {
                    match factor {
                        Factor::SingleSigFactor {
                            loc: _,
                            sig,
                            pubkey,
                        } => {
                            check_variable(&sig, symbol_table)?;
                            check_variable(&pubkey, symbol_table)?
                        }
                        _ => continue,
                    }
                }

                return Ok(());
            }
        },
        Expression::UnaryCryptoExpression {
            loc: _,
            operand,
            op,
        } => check_variable(&operand, symbol_table),
        Expression::LogicalExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_variable(&lhs, symbol_table)?;
            check_variable(&rhs, symbol_table)
        }
        Expression::CompareExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_variable(&lhs, symbol_table)?;
            check_variable(&rhs, symbol_table)
        }
        Expression::UnaryMathExpression {
            loc: _,
            operand,
            op,
        } => check_variable(&operand, symbol_table),
        Expression::BinaryMathExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_variable(&lhs, symbol_table)?;
            check_variable(&rhs, symbol_table)
        }
        Expression::ByteExpression {
            loc: _,
            operand,
            op: _,
        } => check_variable(&operand, symbol_table),
        _ => Ok(()),
    }
}

// Check type(e.g. operand of expression).
// Every arithmetic op takes 32bit integer including boolean.
// Every bytes op can takes string or signature.
// "==" and "!=" of CompareExpression branches OP_EQUAL(string) and OP_NUMEQUAL(number) up to type.
pub fn check_type(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    match expression {
        Expression::CheckSigExpression {
            loc: _,
            operand,
            op: _,
        } => match &**operand {
            Factor::SingleSigFactor {
                loc: _,
                sig,
                pubkey,
            } => check_type_sig_pubkey(sig, pubkey, symbol_table),
            Factor::MultiSigFactor { loc: _, m: _, n } => {
                for factor in n {
                    match factor {
                        Factor::SingleSigFactor {
                            loc: _,
                            sig,
                            pubkey,
                        } => check_type_sig_pubkey(sig, pubkey, symbol_table)?,
                        _ => continue,
                    }
                }

                return Ok(());
            }
        },
        Expression::LogicalExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_type_numeric(lhs, symbol_table)?;
            check_type_numeric(rhs, symbol_table)
        }
        Expression::CompareExpression { loc, lhs, op, rhs } => {
            // compare string/signature to string/signature
            if check_type_string(&lhs, symbol_table).is_ok()
                && check_type_string(&rhs, symbol_table).is_ok()
            {
                if *op != BinaryCompareOp::Equal && *op != BinaryCompareOp::NotEqual {
                    return Err(CompileError {
                        loc: loc.to_owned(),
                        kind: ErrorKind::InvalidOperation(format!(
                            "Compare opeation for string must be either == or != but: {:?}.",
                            op
                        )),
                    });
                }
                return Ok(());
            }
            // compare boolean/number to boolean/number
            if check_type_numeric(&lhs, symbol_table).is_ok()
                && check_type_numeric(&rhs, symbol_table).is_ok()
            {
                return Ok(());
            }

            Err(CompileError {
                loc: loc.to_owned(),
                kind: ErrorKind::InvalidOperation(format!(
                    "Compare type must be same but: {:?} to {:?}.",
                    lhs, rhs
                )),
            })
        }
        Expression::UnaryMathExpression {
            loc: _,
            operand,
            op,
        } => check_type_numeric(&operand, symbol_table),
        Expression::BinaryMathExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            check_type_numeric(&lhs, symbol_table)?;
            check_type_numeric(&rhs, symbol_table)
        }
        // Allow only ascii encoded string.
        // UTF-8 string's char has various byte size, which makes use of OP_SIZE hard.
        Expression::ByteExpression {
            loc: _,
            operand,
            op: _,
        } => {
            check_type_string(&operand, symbol_table)?;
            // Further check whether ascii or not.
            match *operand.to_owned() {
                Expression::StringLiteral(loc, val) => {
                    if !(val.is_ascii()) {
                        return Err(CompileError {
                            loc: loc,
                            kind: ErrorKind::InvalidOperation(format!(
                                "Operand must be ascii string but: {:?}.",
                                val,
                            )),
                        });
                    }
                    Ok(())
                }
                _ => Ok(()),
            }
        }
        _ => Ok(()),
    }
}

pub fn check_type_numeric(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    match expression.to_owned() {
        // Throw error for non-numeric evaluated expression.
        Expression::UnaryCryptoExpression { loc, .. } => {
            return Err(CompileError {
                loc: loc,
                kind: ErrorKind::InvalidOperation(format!(
                    "Operand must be number or boolean but: {:?}.",
                    expression,
                )),
            });
        }
        Expression::StringLiteral(loc, ..) => {
            return Err(CompileError {
                loc: loc,
                kind: ErrorKind::InvalidOperation(format!(
                    "Operand must be number or boolean but: {:?}.",
                    expression,
                )),
            });
        }
        // For variable, look up symbol table.
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            let var_type = symbol_table.get(&id_string).unwrap().ty.to_owned();
            if var_type == Type::Signature || var_type == Type::String {
                return Err(CompileError {
                    loc: loc,
                    kind: ErrorKind::InvalidOperation(format!(
                        "Operand must be number or boolean but: {:?}.",
                        expression,
                    )),
                });
            }
            Ok(())
        }
        // ByteExpression and CheckSigExpression are evaluated to number.
        // However, it needs to check operand expression.
        // Call check_type().
        Expression::ByteExpression { loc, operand, op } => check_type(&expression, symbol_table),
        Expression::CheckSigExpression { loc, operand, op } => {
            check_type(&expression, symbol_table)
        }
        // Compare expression is evaluated to number.
        // However, it needs to check type equivalence of two operands.
        Expression::CompareExpression { loc, lhs, op, rhs } => {
            check_type(&expression, symbol_table)
        }
        // Otherwise, recursive check_type_numeric().
        Expression::LogicalExpression { loc, lhs, op, rhs } => {
            check_type_numeric(&lhs, symbol_table)?;
            check_type_numeric(&rhs, symbol_table)
        }
        Expression::BinaryMathExpression { loc, lhs, op, rhs } => {
            check_type_numeric(&lhs, symbol_table)?;
            check_type_numeric(&rhs, symbol_table)
        }
        Expression::UnaryMathExpression { loc, operand, op } => {
            check_type_numeric(&operand, symbol_table)
        }
        _ => Ok(()),
    }
}

pub fn check_type_string(
    expression: &Expression,
    symbol_table: &HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    match expression.to_owned() {
        // StringLiteral is just string.
        Expression::StringLiteral(loc, val) => Ok(()),
        // UnaryCryptoExpression ouputs ascii string.
        // UnaryCryptoExpression doesn't need to check operand.
        Expression::UnaryCryptoExpression { .. } => Ok(()),
        // For variable, look up symbol table.
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            let var_type = symbol_table.get(&id_string).unwrap().ty.to_owned();
            if var_type == Type::Boolean || var_type == Type::Number {
                return Err(CompileError {
                    loc: loc,
                    kind: ErrorKind::InvalidOperation(format!(
                        "Operand must be string but: {:?}.",
                        expression,
                    )),
                });
            }
            Ok(())
        }
        // Throw error for non-string evaluated expression.
        // Remaining expressions are all evaluated to number.
        _ => {
            return Err(CompileError {
                loc: expression.to_owned().loc(),
                kind: ErrorKind::InvalidOperation(format!(
                    "Operand must be string but: {:?}.",
                    expression,
                )),
            });
        }
    }
}

pub fn check_type_sig_pubkey(
    sig: &Expression,
    pubkey: &Expression,
    symbol_table: &HashMap<String, Symbol>,
) -> Result<(), CompileError> {
    // Only variable of type "signature" can be sig.
    match sig {
        Expression::Variable(loc, id) => {
            let id_string = id.0.to_owned();
            let var_type = symbol_table.get(&id_string).unwrap().ty.to_owned();
            if var_type != Type::Signature {
                return Err(CompileError {
                    loc: sig.to_owned().loc(),
                    kind: ErrorKind::InvalidOperation(format!(
                        "Signature must be type of signature but: {:?}.",
                        sig,
                    )),
                });
            }
        }
        _ => {
            return Err(CompileError {
                loc: sig.to_owned().loc(),
                kind: ErrorKind::TypeMismatch(format!(
                    "Signature must be from arguments but: {:?}.",
                    sig
                )),
            });
        }
    };
    // Only string literal can be pubkey.
    // Public key safety check on ECC.
    match pubkey {
        Expression::StringLiteral(loc, data) => {
            // Try decoding hex.
            let hex_pubkey = hex::decode(&data);
            if hex_pubkey.is_ok() {
                let pubkey_bytes = hex_pubkey.unwrap();

                // Extract XOnlyPubkey as it could be ECDSA public key.
                if bitcoin::XOnlyPublicKey::from_slice(
                    // Check whether prefix is 02 or 03.
                    if pubkey_bytes.len() == 33 && (pubkey_bytes[0] == 2 || pubkey_bytes[0] == 3) {
                        &pubkey_bytes[1..]
                    } else {
                        &pubkey_bytes
                    },
                )
                .is_ok()
                {
                    return Ok(());
                }
            }

            Err(CompileError {
                loc: loc.to_owned(),
                kind: ErrorKind::MalformedPubkey(format!("Public key is malformed: {:?}.", data)),
            })
        }
        _ => {
            return Err(CompileError {
                loc: pubkey.to_owned().loc(),
                kind: ErrorKind::TypeMismatch(format!(
                    "Public Key must be from string literal but: {:?}.",
                    pubkey
                )),
            });
        }
    }
}

// Check any possible vulnerability.
pub fn check_security(expression: &Expression) -> Result<(), CompileError> {
    check_overflow(expression)?;
    check_useless_sig(expression)?;

    // Recursive check.
    match expression {
        Expression::BinaryMathExpression { loc, lhs, op, rhs } => {
            check_security(&lhs)?;
            check_security(&rhs)?;
        }
        Expression::ByteExpression { loc, operand, op } => {
            check_security(&operand)?;
        }
        Expression::CompareExpression { loc, lhs, op, rhs } => {
            check_security(&lhs)?;
            check_security(&rhs)?;
        }
        Expression::LogicalExpression { loc, lhs, op, rhs } => {
            check_security(&lhs)?;
            check_security(&rhs)?;
        }
        Expression::UnaryMathExpression { loc, operand, op } => {
            check_security(&operand)?;
        }
        Expression::UnaryCryptoExpression { loc, operand, op } => {
            check_security(&operand)?;
        }
        _ => (),
    }

    Ok(())
}

pub fn check_overflow(expression: &Expression) -> Result<(), CompileError> {
    match expression.to_owned() {
        // Number is 32 bit sign magnitude int, except when used as locktime.
        // To determine whether locktime or not is beyond context-free grammar.
        // Can be addressed when context analysis done
        Expression::NumberLiteral(loc, val) => {
            if val > i32::MAX as i64 || val <= i32::MIN as i64 {
                return Err(CompileError {
                    loc: loc,
                    kind: ErrorKind::IntegerOverflow(format!(
                        "Number is 32 bit sign magnitude int: {:?}.",
                        val,
                    )),
                });
            }
            Ok(())
        }
        _ => Ok(()),
    }
}

// To do. need to handle more complex useless sig expression.
pub fn check_useless_sig(expression: &Expression) -> Result<(), CompileError> {
    match expression.to_owned() {
        // OP_NOT with OP_CHECKSIG makes sig verification useless.
        Expression::UnaryMathExpression { loc, operand, op } => {
            if op == UnaryMathOp::Not && matches!(*operand, Expression::CheckSigExpression { .. }) {
                return Err(CompileError {
                    loc: loc,
                    kind: ErrorKind::UselessSig(format!(
                        "! makes checksig operation useless: {:?}.",
                        expression,
                    )),
                });
            }
            Ok(())
        }
        _ => Ok(()),
    }
}

/*
This layer checks if the compiled script will be valid according to the strict rules of the Bitcoin network. The goal is to catch errors before deployment.
Stack Depth Analysis: The Bitcoin stack is limited to 1000 items. Your analyzer must track the maximum possible stack depth for every execution path and throw an error if any path could exceed this limit.
Opcode Count Limit: A script is limited to 201 opcodes per branch. The analyzer must count the opcodes generated for each path and enforce this limit.
Script Size Limit: The final compiled script must be under a certain size (e.g., 520 bytes for P2SH, 10,000 bytes for SegWit). Your analyzer should check this.
Signature Operation (SigOps) Limit: Transactions have a limit on the number of signature-checking operations. The analyzer must count the number of checksig calls in each path and ensure it doesn't exceed the limit.
Minimal Push Enforcement: The analyzer should ensure that all data pushed to the stack uses the smallest possible opcode (e.g., OP_1 instead of pushing the byte 0x01). This is a standardness rule that prevents malleability and reduces fees.
Target-Specific Rule Checking: The analyzer must know which "target" it's compiling for (legacy, segwit, taproot) and enforce the rules for that environment.
Example: If targeting Taproot, it must throw an error if the script tries to use a disabled opcode like OP_CHECKMULTISIG.
*/
pub fn check_consensus() {}

pub fn check_fee() {}

/*
/// Defines the kind of block this scope represents. This is crucial for
/// context-sensitive rules (e.g., a `return` is only valid in a `Function` scope).
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum ScopeKind {
    /// The top-level scope of the entire contract.
    Global,

    /// The scope for a specific conditional branch (e.g., an `if` or `else` block).
    /// It holds an ID that links it to a specific declared input stack.
    Branch { path_id: usize },
}
 */

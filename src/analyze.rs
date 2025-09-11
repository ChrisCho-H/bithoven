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

    /// The value of being evaluated(returning) in this scope
    pub return_value: Option<Statement>,
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
// Currently, check the duplication, and the existence in the process of parsing expression
pub fn build_symbol_table(
    stack_vec: &Vec<StackParam>,
) -> Result<HashMap<String, Symbol>, CompileError> {
    // Key is identifier
    let mut symbol_table: HashMap<String, Symbol> = HashMap::new();

    for (i, stack_item) in stack_vec.iter().enumerate().rev() {
        let item = stack_item.to_owned();

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
    Ok(symbol_table)
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
            return_value: None,
        });
    }

    analyze_statement(ast, &mut scope_vec, target, 0)?;

    for scope in scope_vec {
        println!("SCOPE: {:?}", scope);
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
    for (i, stmt) in ast.iter().enumerate() {
        check_flow(stmt.to_owned(), scope_vec, branch)?;
        match stmt {
            Statement::LocktimeStatement { loc, operand, op } => {}
            Statement::VerifyStatement(loc, expr) => {
                check_variable(expr, &mut scope_vec[branch].symbol_table)?
            }
            Statement::ExpressionStatement(loc, expr) => {
                check_variable(expr, &mut scope_vec[branch].symbol_table)?;
            }
            Statement::IfStatement {
                loc,
                condition_expr,
                if_block,
                else_block,
            } => {
                // Check No statement after if/else block,
                // as it can be placed before if/else block.
                let last = ast.last().unwrap().to_owned();
                if i != ast.len() - 1 {
                    return Err(CompileError {
                        loc: last.to_owned().loc(),
                        kind: ErrorKind::UnreachableCode(format!(
                            "No statement after if/else block but: {:?}.",
                            last
                        )),
                    });
                }
                check_variable(condition_expr, &mut scope_vec[branch].symbol_table)?;
                branch = analyze_statement(&if_block, scope_vec, target, branch)?;
                if else_block.is_some() {
                    branch += 1;
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
                            check_variable(&pubkey, symbol_table)?;
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

// Check type(e.g. operand of expression)
pub fn check_type(expression: Expression) {}

// Final Statement must be expression statement
// Unreachable Code Detection
// No sequential if/else block
// No statement after if/else block
// No statement after return statement
pub fn check_flow(
    statement: Statement,
    scope_vec: &mut Vec<Scope>,
    branch: usize,
) -> Result<(), CompileError> {
    // Check return statment exists.
    if branch != 0 && scope_vec[branch - 1].return_value.is_none() {
        return Err(CompileError {
            loc: statement.to_owned().loc(),
            kind: ErrorKind::NoReturn(format!(
                "Return statement must exist for each possible execution path: {:?}.",
                statement
            )),
        });
    }
    //
    if scope_vec[branch].return_value.is_some() {
        return Err(CompileError {
            loc: statement.to_owned().loc(),
            kind: ErrorKind::UnreachableCode(format!(
                "Unreachable code after return statement: {:?}. Move return statement at the last scope of execution path",
                statement
            )),
        });
    }
    match statement {
        Statement::ExpressionStatement(_, _) => {
            scope_vec[branch].return_value = Some(statement);
            Ok(())
        }
        _ => Ok(()),
    }
}

// Any possible vulnerability
pub fn check_security() {}

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

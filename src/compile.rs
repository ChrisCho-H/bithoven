use crate::ast::*;
use std::{collections::HashMap, io::Read};

/*
    1. Pure Push
    - Don't see the stack item.
    - Push new single stack item.
*/

// OP_0...OP_16, OP_1NEGATE, and other int in range of [-2147483647, 2147483647].
// Reference: <https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#numbers>
pub fn push_int(script: &mut Vec<u8>, data: i64) {
    let builder = bitcoin::script::Builder::new().push_int(data);

    script.extend_from_slice(builder.as_bytes());
}

// Push any type of byte. Some are overlapped with push_int.
// Reference: <https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#push-operators>
pub fn push_bytes(script: &mut Vec<u8>, data: String) {
    let bytes =
        <&bitcoin::script::PushBytes>::try_from(data.as_bytes()).expect("String to bytes error");
    let builder = bitcoin::script::Builder::new().push_slice(bytes);

    script.extend_from_slice(builder.as_bytes());
}

/*
    2. Control Push
    - See the top 1 stack item.
*/

// Control: OP_IF, OP_NOTIF, OP_ELSE, OP_ENDIF, and OP_VERIFY.
pub fn push_control_verify(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new().push_verify();

    script.extend_from_slice(builder.as_bytes());
}

// Control: OP_IF, OP_NOTIF, OP_ELSE, OP_ENDIF, and OP_VERIFY.
pub fn push_control_if(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_IF);

    script.extend_from_slice(builder.as_bytes());
}

// Control: OP_IF, OP_NOTIF, OP_ELSE, OP_ENDIF, and OP_VERIFY.
pub fn push_control_else(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_ELSE);

    script.extend_from_slice(builder.as_bytes());
}
// Control: OP_IF, OP_NOTIF, OP_ELSE, OP_ENDIF, and OP_VERIFY.
pub fn push_control_end(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_ENDIF);

    script.extend_from_slice(builder.as_bytes());
}

/*
    3. Length push
    - See the top 1 stack item.
    - Push new single stack item.
*/

// OP_SIZE.
// This consumes operand here, while OP_SIZE itself doesn't consume.
pub fn push_bytes_len(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new()
        .push_opcode(bitcoin::opcodes::all::OP_SIZE)
        .push_opcode(bitcoin::opcodes::all::OP_SWAP)
        .push_opcode(bitcoin::opcodes::all::OP_DROP);

    script.extend_from_slice(builder.as_bytes());
}

/*
    4. Compare push
    - See the top 2 stack item.
    - Pop the top 2 stack item.
    - Push new single stack item.
*/

// OP_EQUAL, OP_BOOLAND, OP_BOOLOR, (OP_NUMEQUAL, OP_NUMNOTEQUAL,)
// OP_LESSTHAN, OP_GREATERTHAN, OP_LESSTHANOREQUAL, and OP_GREATERTHANOREQUAL.
pub fn push_compare(script: &mut Vec<u8>, operand: BinaryCompareOp) {
    match operand {
        BinaryCompareOp::Equal => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_EQUAL);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::NotEqual => {
            let builder = bitcoin::script::Builder::new()
                .push_opcode(bitcoin::opcodes::all::OP_EQUAL)
                .push_opcode(bitcoin::opcodes::all::OP_NOT);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::Greater => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_GREATERTHAN);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::GreaterOrEqual => {
            let builder = bitcoin::script::Builder::new()
                .push_opcode(bitcoin::opcodes::all::OP_GREATERTHANOREQUAL);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::Less => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_LESSTHAN);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::LessOrEqual => {
            let builder = bitcoin::script::Builder::new()
                .push_opcode(bitcoin::opcodes::all::OP_LESSTHANOREQUAL);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::BoolOr => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_BOOLOR);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::BoolAnd => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_BOOLAND);

            script.extend_from_slice(builder.as_bytes());
        }
    }
}

/*
    4. Math push unary
    - See the top 1 stack item.
    - Pop the top 1 stack item.
    - Push new single stack item.
*/

// OP_1ADD, OP_1SUB, OP_NEGATE, OP_ABS, OP_NOT, (and OP_0NOTEQUAL).
pub fn push_math_unary(script: &mut Vec<u8>, operand: UnaryMathOp) {
    match operand {
        UnaryMathOp::Add => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_1ADD);

            script.extend_from_slice(builder.as_bytes());
        }
        UnaryMathOp::Sub => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_1SUB);

            script.extend_from_slice(builder.as_bytes());
        }
        UnaryMathOp::Negate => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_NEGATE);

            script.extend_from_slice(builder.as_bytes());
        }
        UnaryMathOp::Abs => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_ABS);

            script.extend_from_slice(builder.as_bytes());
        }
        UnaryMathOp::Not => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_NOT);

            script.extend_from_slice(builder.as_bytes());
        }
    }
}

/*
    5. Math push binary
    - See the top 2 stack item.
    - Pop the top 2 stack item.
    - Push new single stack item.
*/

// OP_ADD, OP_SUB, OP_MIN, OP_MAX
pub fn push_math_binary(script: &mut Vec<u8>, operand: BinaryMathOp) {
    match operand {
        BinaryMathOp::Add => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_ADD);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryMathOp::Sub => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_SUB);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryMathOp::Max => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_MAX);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryMathOp::Min => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_MIN);

            script.extend_from_slice(builder.as_bytes());
        }
    }
}

/*
    6. Math push ternary
    - See the top 3 stack item.
    - Pop the top 3 stack item.
    - Push new single stack item.
*/

// OP_WITHIN
pub fn push_math_ternary() {}

/*
    7. Crypto push
    - See the top 1 stack item.
    - Pop the top 1 stack item.
    - Push new single stack item.
*/

// OP_RIPEMD160, OP_SHA1, OP_SHA256, OP_HASH160, OP_HASH256,
// OP_CHECKSIG, OP_CHECKMULTISIG, OP_CHECKSIGADD
pub fn push_crypto(script: &mut Vec<u8>, op: CryptoOp) {
    match op {
        CryptoOp::CheckSig => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_CHECKSIG);

            script.extend_from_slice(builder.as_bytes());
        }
        CryptoOp::Sha256 => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_SHA256);

            script.extend_from_slice(builder.as_bytes());
        }
        CryptoOp::Ripemd160 => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_RIPEMD160);

            script.extend_from_slice(builder.as_bytes());
        }
    }
}

/*
    8. Locktime push
    - See the top 1 stack item.
    - Pop the top 1 stack item.
*/

// OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY
pub fn push_locktime(script: &mut Vec<u8>, operand: u32, op: LocktimeOp) {
    match op {
        LocktimeOp::Cltv => {
            let height = bitcoin::locktime::absolute::Height::from_consensus(operand)
                .expect("failed to parse block");
            let builder = bitcoin::script::Builder::new()
                .push_lock_time(bitcoin::locktime::absolute::LockTime::Blocks(height))
                .push_opcode(bitcoin::opcodes::all::OP_CLTV)
                .push_opcode(bitcoin::opcodes::all::OP_DROP);

            script.extend_from_slice(builder.as_bytes());
        }
        LocktimeOp::Csv => {
            let height = bitcoin::locktime::relative::Height::from_height(operand as u16);
            let builder = bitcoin::script::Builder::new()
                .push_sequence(bitcoin::locktime::relative::LockTime::Blocks(height).to_sequence())
                .push_opcode(bitcoin::opcodes::all::OP_CSV)
                .push_opcode(bitcoin::opcodes::all::OP_DROP);

            script.extend_from_slice(builder.as_bytes());
        }
    }
}

// From compiled opcodes, add stack ops or re-order opcodes.
pub fn stack_resolver() {}

// From compiled opcodes, optimize opcodes.
// e.g. OP_EQUAL + OP_VERIFY => OP_EQUALVERIFY
pub fn opcode_optimizer() {}

pub fn stack_table(stack: Vec<StackParam>) -> HashMap<String, Type> {
    let mut stack_table: HashMap<String, Type> = HashMap::new();

    for input in stack {
        stack_table.insert(input.identifier.0, input.ty);
    }

    stack_table
}

pub fn compile(ast: Vec<Statement>) -> Vec<u8> {
    let mut bitcoin_script: Vec<u8> = Vec::new();

    for node in ast {
        compile_statement(&mut bitcoin_script, node);
    }
    let script = bitcoin::Script::from_bytes(&bitcoin_script);
    println!("{:?}", script);
    return bitcoin_script;
}

pub fn compile_statement(bitcoin_script: &mut Vec<u8>, stmt: Statement) {
    match stmt {
        Statement::BitcoinStatement(BitcoinStatement::LocktimeStatement { operand, op }) => {
            push_locktime(bitcoin_script, operand, op);
        }
        Statement::BitcoinStatement(BitcoinStatement::VerifyStatement(condition_expr)) => {
            // compile expression first
            compile_expression(bitcoin_script, condition_expr);
            // push verify at last
            push_control_verify(bitcoin_script);
        }
        Statement::IfStatement {
            condition_expr,
            if_block,
            else_block,
        } => {
            // compile expression first
            compile_expression(bitcoin_script, condition_expr);
            push_control_if(bitcoin_script);
            // recursive to compile expression inside if block
            for if_stmt in if_block {
                compile_statement(bitcoin_script, if_stmt);
            }
            if else_block.is_some() {
                push_control_else(bitcoin_script);
                // recursive to compile expression inside else block
                for else_stmt in else_block.unwrap() {
                    compile_statement(bitcoin_script, else_stmt);
                }
            }
            push_control_end(bitcoin_script);
        }
        _ => (),
    }
}

pub fn compile_expression(bitcoin_script: &mut Vec<u8>, expr: Expression) {
    match expr {
        Expression::CryptoExpression { operand, op } => {
            match *operand {
                Expression::StringLiteral(_) => {
                    compile_expression(bitcoin_script, *operand);
                }
                Expression::NumberLiteral(_) => {
                    compile_expression(bitcoin_script, *operand);
                }
                Expression::Variable(_) => {
                    compile_expression(bitcoin_script, *operand);
                }
                Expression::BinaryMathExpression {
                    lhs: _,
                    op: _,
                    rhs: _,
                } => {
                    compile_expression(bitcoin_script, *operand);
                }
                Expression::CryptoExpression { op: _, operand: _ } => {
                    compile_expression(bitcoin_script, *operand);
                }
                _ => {
                    panic!("Wrong operand for crypto operation.")
                }
            }
            push_crypto(bitcoin_script, op);
        }
        Expression::StringLiteral(data) => {
            push_bytes(bitcoin_script, data);
        }
        Expression::BooleanLiteral(data) => {
            push_int(bitcoin_script, data.into());
        }
        Expression::NumberLiteral(data) => {
            push_int(bitcoin_script, data);
        }
        Expression::CompareExpression { lhs, op, rhs } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *lhs);
            compile_expression(bitcoin_script, *rhs);
            // push compare opcode
            push_compare(bitcoin_script, op);
        }
        Expression::UnaryMathExpression { operand, op } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *operand);
            // push math unary opcode
            push_math_unary(bitcoin_script, op);
        }
        Expression::BinaryMathExpression { lhs, op, rhs } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *lhs);
            compile_expression(bitcoin_script, *rhs);
            // push math binary opcode
            push_math_binary(bitcoin_script, op);
        }
        Expression::ByteExpression { operand, op: _ } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *operand);
            // push byte opcode
            push_bytes_len(bitcoin_script);
        }
        _ => (),
    }
}

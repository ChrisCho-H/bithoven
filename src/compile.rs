use bitcoin::opcodes::all::{
    OP_CHECKMULTISIG, OP_CHECKMULTISIGVERIFY, OP_CHECKSIG, OP_CHECKSIGVERIFY, OP_EQUAL,
    OP_EQUALVERIFY, OP_HASH160, OP_HASH256, OP_NUMEQUAL, OP_NUMEQUALVERIFY, OP_PUSHDATA1,
    OP_PUSHDATA2, OP_PUSHDATA4, OP_RIPEMD160, OP_SHA256, OP_VERIFY,
};

use crate::ast::*;

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
    // Try decoding hex, and then utf-8
    let hex_or_utf8 = hex::decode(&data).unwrap_or(data.into_bytes());
    let bytes = <&bitcoin::script::PushBytes>::try_from(hex_or_utf8.as_slice())
        .expect("String to bytes error");
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
    4. Compare push: logical and relational
    - See the top 2 stack item.
    - Pop the top 2 stack item.
    - Push new single stack item.
*/

// OP_BOOLAND, OP_BOOLOR
pub fn push_logical(script: &mut Vec<u8>, operand: BinaryLogicalOp) {
    match operand {
        BinaryLogicalOp::BoolOr => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_BOOLOR);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryLogicalOp::BoolAnd => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_BOOLAND);

            script.extend_from_slice(builder.as_bytes());
        }
    }
}

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
        BinaryCompareOp::NumEqual => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_NUMEQUAL);

            script.extend_from_slice(builder.as_bytes());
        }
        BinaryCompareOp::NumNotEqual => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_NUMNOTEQUAL);

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
pub fn push_crypto_unary(script: &mut Vec<u8>, op: UnaryCryptoOp) {
    match op {
        UnaryCryptoOp::Sha256 => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_SHA256);

            script.extend_from_slice(builder.as_bytes());
        }
        UnaryCryptoOp::Ripemd160 => {
            let builder =
                bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_RIPEMD160);

            script.extend_from_slice(builder.as_bytes());
        }
    }
}

#[derive(Clone, Debug, PartialEq)]
pub enum CheckSigType {
    Single,
    Multi,
    Add,
}

/*
    8. Check Signature push
    - See the top m + n stack item.
    - Pop the top m + n stack item.
    - Push new single stack item.
*/

// OP_CHECKSIG, OP_CHECKMULTISIG, OP_CHECKSIGADD
pub fn push_checksig(script: &mut Vec<u8>, check_sig_ty: CheckSigType) {
    let builder = bitcoin::script::Builder::new().push_opcode(match check_sig_ty {
        CheckSigType::Single => bitcoin::opcodes::all::OP_CHECKSIG,
        CheckSigType::Multi => bitcoin::opcodes::all::OP_CHECKMULTISIG,
        CheckSigType::Add => bitcoin::opcodes::all::OP_CHECKSIGADD,
    });

    script.extend_from_slice(builder.as_bytes());
}

/*
    9. Locktime push
    - See the top 1 stack item.
    - Pop the top 1 stack item.
*/

// OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY
pub fn push_locktime(script: &mut Vec<u8>, operand: i64, op: LocktimeOp) {
    match op {
        LocktimeOp::Cltv => {
            let locktime = bitcoin::locktime::absolute::LockTime::from_consensus(operand as u32);
            let builder = bitcoin::script::Builder::new()
                .push_lock_time(locktime)
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

pub fn push_to_alt_stack(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new().push_opcode(bitcoin::opcodes::all::OP_TOALTSTACK);

    script.extend_from_slice(builder.as_bytes());
}

pub fn push_from_alt_stack(script: &mut Vec<u8>) {
    let builder = bitcoin::script::Builder::new()
        .push_opcode(bitcoin::opcodes::all::OP_FROMALTSTACK)
        .push_opcode(bitcoin::opcodes::all::OP_SWAP);

    script.extend_from_slice(builder.as_bytes());
}

pub fn compile(ast: Vec<Statement>, target: &Target) -> Vec<u8> {
    let mut bitcoin_script: Vec<u8> = Vec::new();

    for node in ast {
        compile_statement(&mut bitcoin_script, node, target);
    }
    let optimized_script = opcode_optimizer(bitcoin_script);

    return optimized_script;
}

pub fn compile_statement(bitcoin_script: &mut Vec<u8>, stmt: Statement, target: &Target) {
    match stmt {
        Statement::LocktimeStatement {
            loc: _,
            operand,
            op,
        } => {
            push_locktime(bitcoin_script, operand, op);
        }
        Statement::VerifyStatement(_loc, condition_expr) => {
            // compile expression first
            compile_expression(bitcoin_script, condition_expr, target);
            // push verify at last
            push_control_verify(bitcoin_script);
        }
        Statement::IfStatement {
            loc: _,
            condition_expr,
            if_block,
            else_block,
        } => {
            // compile expression first
            compile_expression(bitcoin_script, condition_expr, target);
            push_control_if(bitcoin_script);
            // recursive to compile expression inside if block
            for if_stmt in if_block {
                compile_statement(bitcoin_script, if_stmt, target);
            }
            if else_block.is_some() {
                push_control_else(bitcoin_script);
                // recursive to compile expression inside else block
                for else_stmt in else_block.unwrap() {
                    compile_statement(bitcoin_script, else_stmt, target);
                }
            }
            push_control_end(bitcoin_script);
        }
        Statement::ExpressionStatement(_loc, expr) => {
            compile_expression(bitcoin_script, expr, target);
        }
    }
}

// Bitcoin script follows Reverse Polish Notation.
// Therefore, we should push operands first, then op.
// The challenge is when we face the identifier, the given inputs.
pub fn compile_expression(bitcoin_script: &mut Vec<u8>, expr: Expression, target: &Target) {
    match expr {
        Expression::CheckSigExpression {
            loc: _,
            operand,
            op: _,
        } => {
            compile_factor(bitcoin_script, *operand.to_owned(), target);
            match *operand {
                Factor::SingleSigFactor {
                    loc: _,
                    sig: _,
                    pubkey: _,
                } => {
                    push_checksig(bitcoin_script, CheckSigType::Single);
                }
                Factor::MultiSigFactor { loc: _, m: _, n: _ } => {
                    match *target {
                        Target::Taproot => {
                            // Final Key OP_NUMEQUAL
                            // OP_NUMEQUAL
                            push_compare(bitcoin_script, BinaryCompareOp::NumEqual);
                        }
                        // Legacy & Segwit
                        _ => {
                            push_checksig(bitcoin_script, CheckSigType::Multi);
                        }
                    }
                }
            }
        }
        Expression::UnaryCryptoExpression {
            loc: _,
            operand,
            op,
        } => {
            // To do. need to panic for wrong operand for crypto op
            compile_expression(bitcoin_script, *operand, target);
            push_crypto_unary(bitcoin_script, op);
        }
        Expression::LogicalExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *lhs, target);
            push_to_alt_stack(bitcoin_script);
            compile_expression(bitcoin_script, *rhs, target);
            push_from_alt_stack(bitcoin_script);
            // push logical opcode
            push_logical(bitcoin_script, op);
        }
        Expression::CompareExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *lhs, target);
            push_to_alt_stack(bitcoin_script);
            compile_expression(bitcoin_script, *rhs, target);
            push_from_alt_stack(bitcoin_script);
            // push compare opcode
            push_compare(bitcoin_script, op);
        }
        Expression::UnaryMathExpression {
            loc: _,
            operand,
            op,
        } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *operand, target);
            // push math unary opcode
            push_math_unary(bitcoin_script, op);
        }
        Expression::BinaryMathExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *lhs, target);
            push_to_alt_stack(bitcoin_script);
            compile_expression(bitcoin_script, *rhs, target);
            push_from_alt_stack(bitcoin_script);
            // push math binary opcode
            push_math_binary(bitcoin_script, op);
        }
        Expression::ByteExpression {
            loc: _,
            operand,
            op: _,
        } => {
            // recursive to compile condition expression
            compile_expression(bitcoin_script, *operand, target);
            // push byte opcode
            push_bytes_len(bitcoin_script);
        }
        Expression::StringLiteral(_loc, data) => {
            push_bytes(bitcoin_script, data);
        }
        Expression::BooleanLiteral(_loc, data) => {
            push_int(bitcoin_script, data.into());
        }
        Expression::NumberLiteral(_loc, data) => {
            push_int(bitcoin_script, data);
        }
        _ => (),
    }
}

pub fn compile_factor(bitcoin_script: &mut Vec<u8>, factor: Factor, target: &Target) {
    match factor {
        Factor::SingleSigFactor {
            loc: _,
            sig,
            pubkey,
        } => {
            // For sig, no need to push any but check the type(must be from stack)
            match *sig {
                Expression::Variable(..) => (),
                _ => {
                    panic!("Signature should be from argument(stack).")
                }
            }
            match *pubkey {
                Expression::StringLiteral(..) => {
                    compile_expression(bitcoin_script, *pubkey, target);
                }
                _ => {
                    // Could be changed to embrace variable later
                    panic!("Public key should be from string literal.")
                }
            }
        }
        Factor::MultiSigFactor { loc, m, n } => {
            match target {
                Target::Taproot => {
                    // push pubkey
                    for (i, e) in n.iter().enumerate() {
                        let data = e.to_owned();
                        compile_factor(bitcoin_script, data, target);
                        push_checksig(
                            bitcoin_script,
                            // 1st key pushes OP_CHECKSIG
                            if i == 0 {
                                CheckSigType::Single
                            } else {
                                // Other push OP_CHECKSIGADD
                                CheckSigType::Add
                            },
                        )
                    }
                    // push m
                    push_int(bitcoin_script, m as i64);
                }
                // Legacy & Segwit
                _ => {
                    let num = n.len() as i64;
                    // push m
                    push_int(bitcoin_script, m as i64);
                    // push pubkey in reverse order.
                    // If args are (sig1, ..., sig_n),
                    // and expression is checksig [m, (sig1, pub1), ..., (sig_n, pub_n)]
                    // OP_CHECKMULTISIG requires the sig list in the same order of pubkeys.
                    for e in n.iter().rev() {
                        let data = e.to_owned();
                        compile_factor(bitcoin_script, data, target);
                    }
                    // push n
                    push_int(bitcoin_script, num);
                }
            }
        }
    }
}

// From compiled opcodes, optimize opcodes.
// e.g. OP_EQUAL + OP_VERIFY => OP_EQUALVERIFY
pub fn opcode_optimizer(bitcoin_script: Vec<u8>) -> Vec<u8> {
    let mut optimized_script: Vec<u8> = vec![];
    let mut i = 0;
    // loop
    while i < bitcoin_script.len() {
        let op = bitcoin_script[i];

        // if last element, just push and break;
        if i == bitcoin_script.len() - 1 {
            optimized_script.push(op);
            break;
        }

        // Skip OP_PUSHBYTES_N
        if op <= 0x4b {
            optimized_script.extend_from_slice(&bitcoin_script[i..=i + op as usize]);
            i += (op + 1) as usize;
            continue;
        }

        match bitcoin::Opcode::from(op) {
            // Skip OP_PUSHDATAN
            OP_PUSHDATA1 => {
                let num_to_read = bitcoin::script::read_scriptint(&[bitcoin_script[i + 1]])
                    .expect("Script number is wrongly encoded.");
                optimized_script
                    .extend_from_slice(&bitcoin_script[i..=i + (num_to_read + 1) as usize]);
                i += (num_to_read + 1 + 1) as usize;
                continue;
            }
            OP_PUSHDATA2 => {
                let num_to_read = bitcoin::script::read_scriptint(&bitcoin_script[i + 1..=i + 2])
                    .expect("Script number is wrongly encoded.");
                optimized_script
                    .extend_from_slice(&bitcoin_script[i..=i + (num_to_read + 2) as usize]);
                i += (num_to_read + 1 + 2) as usize;
                continue;
            }
            OP_PUSHDATA4 => {
                let num_to_read = bitcoin::script::read_scriptint(&bitcoin_script[i + 1..=i + 4])
                    .expect("Script number is wrongly encoded.");
                optimized_script
                    .extend_from_slice(&bitcoin_script[i..=i + (num_to_read + 4) as usize]);
                i += (num_to_read + 1 + 4) as usize;
                continue;
            }
            // else try optimizing
            OP_EQUAL => {
                let next = bitcoin::Opcode::from(bitcoin_script[i + 1]);
                if next == OP_VERIFY {
                    optimized_script.push(OP_EQUALVERIFY.to_u8());
                    i += 2;
                    continue;
                }
            }
            OP_NUMEQUAL => {
                let next = bitcoin::Opcode::from(bitcoin_script[i + 1]);
                if next == OP_VERIFY {
                    optimized_script.push(OP_NUMEQUALVERIFY.to_u8());
                    i += 2;
                    continue;
                }
            }
            OP_CHECKSIG => {
                let next = bitcoin::Opcode::from(bitcoin_script[i + 1]);
                if next == OP_VERIFY {
                    optimized_script.push(OP_CHECKSIGVERIFY.to_u8());
                    i += 2;
                    continue;
                }
            }
            OP_CHECKMULTISIG => {
                let next = bitcoin::Opcode::from(bitcoin_script[i + 1]);
                if next == OP_VERIFY {
                    optimized_script.push(OP_CHECKMULTISIGVERIFY.to_u8());
                    i += 2;
                    continue;
                }
            }
            OP_SHA256 => {
                let next = bitcoin::Opcode::from(bitcoin_script[i + 1]);
                if next == OP_RIPEMD160 {
                    optimized_script.push(OP_HASH160.to_u8());
                    i += 2;
                    continue;
                }
                if next == OP_SHA256 {
                    optimized_script.push(OP_HASH256.to_u8());
                    i += 2;
                    continue;
                }
            }
            //OP_NOT => {},
            _ => {}
        }
        optimized_script.push(op);
        i += 1;
    }

    return optimized_script;
}

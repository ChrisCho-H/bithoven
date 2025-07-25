use crate::ast::*;
use std::collections::HashMap;

/*
    1. Pure Push
    - Don't see the stack item.
    - Push new single stack item.
*/

// OP_0...OP_16, OP_1NEGATE, and other int in range of [-2147483647, 2147483647].
// Reference: <https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#numbers>
pub fn push_int() {}

// Push any type of byte. Some are overlapped with push_int.
// Reference: <https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#push-operators>
pub fn push_bytes() {}

/*
    2. Control Push
    - See the top 1 stack item.
*/

// Control: OP_IF, OP_NOTIF, OP_ELSE, OP_ENDIF, and OP_VERIFY.
pub fn push_control_verify(script: &mut Vec<u8>, condition_expr: Expression) {
    let builder = bitcoin::script::Builder::new().push_verify();

    script.extend_from_slice(builder.as_bytes());
}

// Control: OP_IF, OP_NOTIF, OP_ELSE, OP_ENDIF, and OP_VERIFY.
pub fn push_control_if(
    script: &mut Vec<u8>,
    condition_expr: Expression,
    if_block: Vec<Statement>,
    else_block: Option<Vec<Statement>>,
) {
    if else_block.is_none() {
        let builder = bitcoin::script::Builder::new()
            .push_opcode(bitcoin::opcodes::all::OP_IF)
            .push_opcode(bitcoin::opcodes::all::OP_ENDIF);

        script.extend_from_slice(builder.as_bytes());
    } else {
        let builder = bitcoin::script::Builder::new()
            .push_opcode(bitcoin::opcodes::all::OP_IF)
            .push_opcode(bitcoin::opcodes::all::OP_ELSE)
            .push_opcode(bitcoin::opcodes::all::OP_ENDIF);

        script.extend_from_slice(builder.as_bytes());
    }
}

/*
    3. Length push
    - See the top 1 stack item.
    - Push new single stack item.
*/

// OP_SIZE.
pub fn push_bytes_len() {}

/*
    4. Compare push
    - See the top 2 stack item.
    - Pop the top 2 stack item.
    - Push new single stack item.
*/

// OP_EQUAL, OP_BOOLAND, OP_BOOLOR, (OP_NUMEQUAL, OP_NUMNOTEQUAL,)
// OP_LESSTHAN, OP_GREATERTHAN, OP_LESSTHANOREQUAL, and OP_GREATERTHANOREQUAL.
pub fn push_compare() {}

/*
    4. Math push unary
    - See the top 1 stack item.
    - Pop the top 1 stack item.
    - Push new single stack item.
*/

// OP_1ADD, OP_1SUB, OP_NEGATE, OP_ABS, OP_NOT, (and OP_0NOTEQUAL).
pub fn push_math_unary() {}

/*
    5. Math push binary
    - See the top 2 stack item.
    - Pop the top 2 stack item.
    - Push new single stack item.
*/

// OP_ADD, OP_SUB, OP_MIN, OP_MAX
pub fn push_math_binary() {}

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
pub fn push_crypto() {}

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
        match node {
            Statement::BitcoinStatement(BitcoinStatement::LocktimeStatement { operand, op }) => {
                push_locktime(&mut bitcoin_script, operand, op);
            }
            Statement::BitcoinStatement(BitcoinStatement::VerifyStatement(condition_expr)) => {
                push_control_verify(&mut bitcoin_script, condition_expr);
            }
            Statement::IfStatement {
                condition_expr,
                if_block,
                else_block,
            } => {
                push_control_if(&mut bitcoin_script, condition_expr, if_block, else_block);
            }
            _ => (),
        }
    }
    let script = bitcoin::Script::from_bytes(&bitcoin_script);
    println!("{:?}", script);
    return bitcoin_script;
}

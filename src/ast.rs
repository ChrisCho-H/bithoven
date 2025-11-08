use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq)]
pub struct Bithoven {
    pub pragma: Pragma,
    pub input_stack: Vec<Vec<StackParam>>,
    pub output_script: Vec<Statement>,
}

#[derive(Debug, PartialEq)]
pub struct Pragma {
    pub language: String,
    pub version: String,
    pub target: Target,
}

#[derive(Clone, Debug, PartialEq)]
pub enum Target {
    Legacy,
    Segwit,
    Taproot,
}

#[derive(Clone, Debug, Eq, Hash, PartialEq)]
pub struct StackParam {
    pub loc: Location,
    pub identifier: Identifier,
    pub ty: Type,
}

#[derive(Clone, Debug, Eq, Hash, PartialEq, Serialize, Deserialize)]
pub struct Location {
    pub start: usize,
    pub end: usize,
    pub line: usize,
    pub column: usize,
}

#[derive(Clone, Debug, Eq, Hash, PartialEq)]

pub struct Identifier(pub String);

#[derive(Clone, Debug, Eq, Hash, PartialEq)]

pub enum Type {
    Signature,
    Number,
    String,
    Boolean,
}

#[derive(Clone, Debug, PartialEq)]
pub enum Statement {
    IfStatement {
        loc: Location,
        condition_expr: Expression,
        if_block: Vec<Statement>,
        else_block: Option<Vec<Statement>>,
    },
    LocktimeStatement {
        loc: Location,
        operand: u32,
        op: LocktimeOp,
    },
    VerifyStatement(Location, Expression),
    ExpressionStatement(Location, Expression),
}

#[derive(Clone, Debug, PartialEq)]
pub enum Expression {
    Variable(Location, Identifier),
    NumberLiteral(Location, i64),
    BooleanLiteral(Location, bool),
    StringLiteral(Location, String),
    LogicalExpression {
        loc: Location,
        lhs: Box<Expression>,
        op: BinaryLogicalOp,
        rhs: Box<Expression>,
    },
    CompareExpression {
        loc: Location,
        lhs: Box<Expression>,
        op: BinaryCompareOp,
        rhs: Box<Expression>,
    },
    UnaryMathExpression {
        loc: Location,
        operand: Box<Expression>,
        op: UnaryMathOp,
    },
    BinaryMathExpression {
        loc: Location,
        lhs: Box<Expression>,
        op: BinaryMathOp,
        rhs: Box<Expression>,
    },
    UnaryCryptoExpression {
        loc: Location,
        operand: Box<Expression>,
        op: UnaryCryptoOp,
    },
    CheckSigExpression {
        loc: Location,
        operand: Box<Factor>,
        op: CheckSigOp,
    },
    ByteExpression {
        loc: Location,
        operand: Box<Expression>,
        op: ByteOp,
    },
}

#[derive(Clone, Debug, PartialEq)]
pub enum BinaryLogicalOp {
    BoolOr,
    BoolAnd,
}

#[derive(Clone, Debug, PartialEq)]
pub enum BinaryCompareOp {
    Equal,
    NotEqual,
    Greater,
    GreaterOrEqual,
    Less,
    LessOrEqual,
    NumEqual,
    NumNotEqual,
}

#[derive(Clone, Debug, PartialEq)]
pub enum BinaryMathOp {
    Add,
    Sub,
    Max,
    Min,
}

#[derive(Clone, Debug, PartialEq)]
pub enum UnaryMathOp {
    Add,
    Sub,
    Negate,
    Abs,
    Not,
}

#[derive(Clone, Debug, PartialEq)]
pub enum CheckSigOp {
    CheckSig,
}

#[derive(Clone, Debug, PartialEq)]
pub enum UnaryCryptoOp {
    Sha256,
    Ripemd160,
}

#[derive(Clone, Debug, PartialEq)]
pub enum ByteOp {
    Size,
}

#[derive(Clone, Debug, PartialEq)]
pub enum LocktimeOp {
    Cltv,
    Csv,
}

#[derive(Clone, Debug, PartialEq)]
pub enum Factor {
    SingleSigFactor {
        loc: Location,
        sig: Box<Expression>,
        pubkey: Box<Expression>,
    },
    MultiSigFactor {
        loc: Location,
        m: u32,
        n: Vec<Factor>,
    },
}

#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct CompileError {
    pub loc: Location,
    pub kind: ErrorKind,
}

#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub enum ErrorKind {
    // Parsing Error
    ParseError(String),

    // Variable and Scope Errors
    DuplicateVariable(String),
    UndefinedVariable(String),
    VariableConsumed(String),
    InvalidConsumptionOrder(String),

    // Type Errors
    TypeMismatch(String),
    InvalidOperation(String),

    // Bitcoin Consensus Errors
    StackDepthExceeded(String),
    OpcodeCountExceeded(String),
    DustOutputCreated(String),

    // Flow Errors
    MultipleReturn(String),
    NoReturn(String),
    UnreachableCode(String),
    DeadPath,

    // Security Errors
    IntegerOverflow(String),
    UselessSig(String),
    MalformedPubkey(String),
    NoSigRequired(String),
}

use std::fmt;
use wasm_bindgen::JsValue;

// (Optional but recommended) Create a display implementation for a clean error message.
impl fmt::Display for CompileError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "Error at line {}:{}: {:?}",
            self.loc.line, self.loc.column, self.kind
        )
    }
}

// The magic happens here! 🧙‍♂️
impl From<CompileError> for JsValue {
    fn from(error: CompileError) -> Self {
        // Create a new JS Error object.
        // The error message will be the string from our Display impl.
        let js_error = js_sys::Error::new(&error.to_string());

        // Serialize the structured error data into a JsValue (a JS object).
        let details = serde_wasm_bindgen::to_value(&error).unwrap_or(JsValue::NULL);

        // Attach the structured details to the JS Error object.
        // In JS, you'll be able to access this with `error.details`.
        js_sys::Reflect::set(&js_error, &JsValue::from_str("details"), &details)
            .unwrap_or_default(); // Or handle the error if setting fails

        // Return the JS Error object as a JsValue.
        js_error.into()
    }
}

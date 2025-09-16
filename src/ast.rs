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

#[derive(Clone, Debug, Eq, Hash, PartialEq)]
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

#[derive(Clone, Debug, PartialEq)]
pub struct CompileError {
    pub loc: Location,
    pub kind: ErrorKind,
}

#[derive(Clone, Debug, PartialEq)]
pub enum ErrorKind {
    // Variable and Scope Errors
    DuplicateVariable(String),
    UndefinedVariable(String),
    VariableConsumed(String),
    InvalidConsumptionOrder { expected: String, found: String },

    // Type Errors
    TypeMismatch(String),
    InvalidOperation(String),
    IntegerOverflow(String),

    // Bitcoin-Specific Errors
    StackDepthExceeded { limit: usize, found: usize },
    OpcodeCountExceeded { limit: usize, path_name: String },
    DustOutputCreated { path_name: String },

    // Flow Errors
    MultipleReturn(String),
    NoReturn(String),
    UnreachableCode(String),
    DeadPath,
}

#[derive(Debug, PartialEq)]
pub struct Bithoven {
    pub pragma: Pragma,
    pub input_stack: Vec<StackParam>,
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

#[derive(Clone, Debug, PartialEq)]
pub struct StackParam {
    pub identifier: Identifier,
    pub ty: Type,
    pub value: Option<LiteralExpression>,
}

#[derive(Clone, Debug, PartialEq)]
pub enum Type {
    Signature,
    Number,
    String,
    Boolean,
}

#[derive(Clone, Debug, PartialEq)]
pub enum Statement {
    IfStatement {
        condition_expr: Expression,
        if_block: Vec<Statement>,
        else_block: Option<Vec<Statement>>,
    },
    LocktimeStatement {
        operand: u32,
        op: LocktimeOp,
    },
    VerifyStatement(Expression),
    ExpressionStatement(Expression),
}

#[derive(Clone, Debug, PartialEq)]
pub struct IfStatement {
    pub condition_expr: Expression,
    pub if_block: Vec<Statement>,
    pub else_block: Option<Vec<Statement>>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct LocktimeStatement {
    pub operand: u32,
    pub op: LocktimeOp,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Identifier(pub String);

#[derive(Clone, Debug, PartialEq)]
pub enum Expression {
    Variable(Identifier),
    NumberLiteral(i64),
    BooleanLiteral(bool),
    StringLiteral(String),
    MultiSigExpression {
        m: i64,
        n: Vec<String>,
    },
    CompareExpression {
        lhs: Box<Expression>,
        op: BinaryCompareOp,
        rhs: Box<Expression>,
    },
    UnaryMathExpression {
        operand: Box<Expression>,
        op: UnaryMathOp,
    },
    BinaryMathExpression {
        lhs: Box<Expression>,
        op: BinaryMathOp,
        rhs: Box<Expression>,
    },
    CryptoExpression {
        operand: Box<Expression>,
        op: CryptoOp,
    },
    ByteExpression {
        operand: Box<Expression>,
        op: ByteOp,
    },
}

#[derive(Clone, Debug, PartialEq)]
pub enum LiteralExpression {
    NumberLiteral(i64),
    BooleanLiteral(bool),
    StringLiteral(String),
}

#[derive(Clone, Debug, PartialEq)]
pub struct MultiSigExpression {
    pub m: i64,
    pub n: Vec<String>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct UnaryMathExpression {
    pub operand: Box<Expression>,
    pub op: UnaryMathOp,
}

#[derive(Clone, Debug, PartialEq)]
pub struct BinaryMathExpression {
    pub lhs: Box<Expression>,
    pub op: BinaryMathOp,
    pub rhs: Box<Expression>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct CompareExpression {
    pub lhs: Box<Expression>,
    pub op: BinaryCompareOp,
    pub rhs: Box<Expression>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct CryptoExpression {
    pub operand: Box<Expression>,
    pub op: CryptoOp,
}

#[derive(Clone, Debug, PartialEq)]
pub struct ByteExpression {
    pub operand: Box<Expression>,
    pub op: ByteOp,
}

#[derive(Clone, Debug, PartialEq)]
pub enum BinaryCompareOp {
    Equal,
    NotEqual,
    Greater,
    GreaterOrEqual,
    Less,
    LessOrEqual,
    BoolOr,
    BoolAnd,
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
pub enum CryptoOp {
    CheckSig,
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

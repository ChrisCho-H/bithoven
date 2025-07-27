#[derive(Debug, PartialEq)]
pub struct UTXO {
    pub input_stack: Vec<StackParam>,
    pub output_script: Vec<Statement>,
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
    //ExprStatement(Expression),
    IfStatement {
        condition_expr: Expression,
        if_block: Vec<Statement>,
        else_block: Option<Vec<Statement>>,
    },
    BlockStatement(Vec<Statement>),
    BitcoinStatement(BitcoinStatement),
}

#[derive(Clone, Debug, PartialEq)]
pub enum BitcoinStatement {
    LocktimeStatement { operand: u32, op: LocktimeOp },
    VerifyStatement(Expression),
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
    ConditionExpression(ConditionExpression),
    MathExpression {
        lhs: Box<Expression>,
        op: BinaryMathOp,
        rhs: Box<Expression>,
    },
    CryptoExpression {
        operand: CryptoOperand,
        op: CryptoOp,
    },
}

#[derive(Clone, Debug, PartialEq)]
pub enum LiteralExpression {
    NumberLiteral(i64),
    BooleanLiteral(bool),
    StringLiteral(String),
}

#[derive(Clone, Debug, PartialEq)]
pub struct CryptoExpression {
    pub operand: CryptoOperand,
    pub op: CryptoOp,
}

#[derive(Clone, Debug, PartialEq)]
pub enum CryptoOperand {
    Variable(Identifier),
    StringLiteral(String),
}

#[derive(Clone, Debug, PartialEq)]
pub struct ConditionExpression {
    pub unary: Option<UnaryMathOp>,
    pub compare_expr: CompareExpression,
}

#[derive(Clone, Debug, PartialEq)]
pub struct CompareExpression {
    pub lhs: Box<Expression>,
    pub op: BinaryCompareOp,
    pub rhs: Box<Expression>,
}

#[derive(Clone, Debug, PartialEq)]
pub enum BinaryCompareOp {
    Equal,
    NotEqual,
    Greater,
    GreaterOrEqual,
    Less,
    LessOrEqual,
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
pub enum BinaryMathOp {
    Add,
    Sub,
    Max,
    Min,
}

#[derive(Clone, Debug, PartialEq)]
pub enum CryptoOp {
    CheckSig,
    Sha256,
    Ripemd160,
}

#[derive(Clone, Debug, PartialEq)]
pub enum LocktimeOp {
    Cltv,
    Csv,
}

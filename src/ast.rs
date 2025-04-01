#[derive(Debug, PartialEq)]
pub struct UTXO {
    pub input_stack: Vec<StackParam>,
    pub output_script: Vec<Statement>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct StackParam {
    pub identifier: Identifier,
    pub ty: Type,
    pub value: Option<Literal>,
}

#[derive(Clone, Debug, PartialEq)]
pub enum Type {
    Signature,
    Number,
    String,
    Boolean,
}

#[derive(Clone, Debug, PartialEq)]
pub enum Literal {
    NumberLiteral(i64),
    BooleanLiteral(bool),
    StringLiteral(String),
}

#[derive(Clone, Debug, PartialEq)]
pub enum Statement {
    ExprStatement(Expression),
    IfStatement {
        condition_expr: ConditionExpression,
        if_block: Vec<Statement>,
        else_block: Option<Vec<Statement>>,
    },
    BlockStatement(Vec<Statement>),
    BitcoinStatement(BitcoinStatement),
}

#[derive(Clone, Debug, PartialEq)]
pub enum BitcoinStatement {
    AfterStatement(u32),
    OlderStatement(u32),
    VerifyStatement(Expression),
}

#[derive(Clone, Debug, PartialEq)]
pub struct Identifier(pub String);

#[derive(Clone, Debug, PartialEq)]
pub enum Expression {
    Variable(Identifier),
    NumberLiteral(i64),
    BooleanLiteral(bool),
    StringLiteral(String),
    MathExpression {
        lhs: Box<Expression>,
        op: BinaryMathOp,
        rhs: Box<Expression>,
    },
    BitcoinExpression(BitcoinExpression),
}

#[derive(Clone, Debug, PartialEq)]
pub enum BitcoinExpression {
    CheckSigExpr(BitcoinExprArgs),
    Sha256Expr(BitcoinExprArgs),
    Ripemd160Expr(BitcoinExprArgs),
}

#[derive(Clone, Debug, PartialEq)]
pub enum BitcoinExprArgs {
    Variable(Identifier),
    StringLiteral(String),
}

#[derive(Clone, Debug, PartialEq)]
pub struct ConditionExpression {
    pub negate: bool,
    pub compare_expr: CompareExpression,
}

#[derive(Clone, Debug, PartialEq)]
pub struct CompareExpression {
    pub lhs: Expression,
    pub op: BinaryCompareOp,
    pub rhs: Expression,
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
pub enum BinaryMathOp {
    Add,
    Sub,
}

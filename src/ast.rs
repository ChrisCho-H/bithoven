#[derive(Debug, PartialEq)]
pub struct UTXO {
    pub input_stack: Vec<StackParam>,
    pub output_script: Vec<Statement>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct StackParam {
    pub identifier: Identifier,
    pub ty: Type,
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
    VarDeclarationStatement {
        identifier: Identifier,
        expr: Expression,
    },
    ExprStatement(Expression),
    IfStatement {
        condition_expr: ConditionExpression,
        if_block: Vec<Statement>,
        else_block: Option<Vec<Statement>>,
    },
    BlockStatement(Vec<Statement>),
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
    CheckSigExpr(BitcoinExprArgs),
    Sha256Expr(BitcoinExprArgs),
    Ripemd160Expr(BitcoinExprArgs),
    MathExpression {
        lhs: Box<Expression>,
        op: BinaryMathOp,
        rhs: Box<Expression>,
    },
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

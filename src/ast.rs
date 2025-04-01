#[derive(Debug, PartialEq)]
pub struct UTXO {
    pub input_stack: Vec<StackParam>,
    pub output_script: Vec<Statement>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct StackParam {
    pub identifier: String,
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
        identifier: String,
        expr: String,
    },
    ExprStatement(String),
    IfStatement {
        condition_expr: ConditionExpression,
        if_block: Vec<Statement>,
        else_block: Option<Vec<Statement>>,
    },
    BlockStatement(Vec<Statement>),
    AfterStatement(u32),
    OlderStatement(u32),
    VerifyStatement(String),
}

#[derive(Clone, Debug, PartialEq)]
pub enum Expression {
    Variable(String),
    NumberLiteral(i64),
    BoolLiteral(bool),
    StringLiteral(String),
    MathExpression {
        lhs: Box<Expression>,
        operator: BinaryMathOp,
        rhs: Box<Expression>,
    },
}

#[derive(Clone, Debug, PartialEq)]
pub struct ConditionExpression {
    pub negate: bool,
    pub compare_expr: CompareExpression,
}

#[derive(Clone, Debug, PartialEq)]
pub struct CompareExpression {
    pub lhs: String,
    pub operator: BinaryCompareOp,
    pub rhs: String,
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

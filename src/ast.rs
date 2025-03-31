#[derive(Clone, Debug, PartialEq)]
pub enum Statement {
    VarDeclarationStatement {
        identifier: String,
        expr: String,
    },
    ExprStatement(String),
    IfStatement {
        condition_expr: String,
        if_block: Vec<Statement>,
        else_block: Option<Vec<Statement>>,
    },
    BlockStatement(Vec<Statement>),
    PushDataStatement(String),
    PanicStatement(String),
}

#[derive(Clone, Debug, PartialEq)]
pub enum Expression {
    Integer(i64),
    Variable(String),
    BinaryOperation {
        lhs: Box<Expression>,
        operator: Operator,
        rhs: Box<Expression>,
    },
}

#[derive(Clone, Debug, PartialEq)]
pub enum Operator {
    Add,
    Sub,
    Mul,
    Div,
}

use logos::Logos;
use std::collections::HashSet;
use std::fmt; // to implement the Display trait
use std::num::ParseIntError;

#[derive(Default, Debug, Clone, PartialEq)]
pub enum LexicalError {
    InvalidInteger(ParseIntError),
    #[default]
    InvalidToken,
}

impl From<ParseIntError> for LexicalError {
    fn from(err: ParseIntError) -> Self {
        LexicalError::InvalidInteger(err)
    }
}

#[derive(Logos, Clone, Debug, PartialEq)]
#[logos(skip r"[ \t\n\f]+", skip r"#.*\n?", error = LexicalError)]

pub enum Token {
    /// Literal
    Boolean(bool),
    Number(i32),    // i32::MIN -> Overflow | has .abs() method
    String(String), // Size Limit varies upon context | has .size() method
    Array(Vec<String>),
    Object(String),
    /// Operator
    Plus(String), // +
    Minus(String),          // -
    Equal(String),          // ==
    NotEqual(String),       // !=
    Greater(String),        // >
    GreaterOrEqual(String), // >=
    Less(String),           // <
    LessOrEqual(String),    // <=
    Assign(String),         // =
    And(String),            // &&
    Or(String),             // ||
    Not(String),            // !
    Negation(String),       // ~
    /// Punctuation
    Paren(String), // () grouping, function call
    Brace(String),          // {} code block, object literal
    Bracket(String),        // [] array, property access
    Comma(String),          // , separator
    Dot(String),            // . member access
    Colon(String),          // object property
    /// keyword
    If(String),
    Else(String),
    True(String),
    False(String),
    For(String),
    In(String),
    Let(String),
    Const(String),
    Static(String),
    Throw(String),
    Function(String),
    This(String),
    // identifier
    Identifier(String),
}

impl fmt::Display for Token {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

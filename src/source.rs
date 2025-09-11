use crate::ast::*;

pub trait Locatable {
    fn loc_mut(&mut self) -> &mut Location;
    fn loc(self) -> Location;
}

impl Locatable for Statement {
    fn loc_mut(&mut self) -> &mut Location {
        match self {
            // For struct variants with a named `loc` field
            Statement::IfStatement { loc, .. } => loc,
            Statement::LocktimeStatement { loc, .. } => loc,

            // For tuple-struct variants, access by index
            Statement::VerifyStatement(loc, ..) => loc,
            Statement::ExpressionStatement(loc, ..) => loc,
        }
    }
    fn loc(self) -> Location {
        match self {
            // For struct variants with a named `loc` field
            Statement::IfStatement { loc, .. } => loc,
            Statement::LocktimeStatement { loc, .. } => loc,

            // For tuple-struct variants, access by index
            Statement::VerifyStatement(loc, ..) => loc,
            Statement::ExpressionStatement(loc, ..) => loc,
        }
    }
}

impl Locatable for Expression {
    fn loc_mut(&mut self) -> &mut Location {
        match self {
            Expression::Variable(loc, ..) => loc,
            Expression::NumberLiteral(loc, ..) => loc,
            Expression::BooleanLiteral(loc, ..) => loc,
            Expression::StringLiteral(loc, ..) => loc,
            Expression::LogicalExpression { loc, .. } => loc,
            Expression::CompareExpression { loc, .. } => loc,
            Expression::UnaryMathExpression { loc, .. } => loc,
            Expression::BinaryMathExpression { loc, .. } => loc,
            Expression::UnaryCryptoExpression { loc, .. } => loc,
            Expression::CheckSigExpression { loc, .. } => loc,
            Expression::ByteExpression { loc, .. } => loc,
        }
    }
    fn loc(self) -> Location {
        match self {
            Expression::Variable(loc, ..) => loc,
            Expression::NumberLiteral(loc, ..) => loc,
            Expression::BooleanLiteral(loc, ..) => loc,
            Expression::StringLiteral(loc, ..) => loc,
            Expression::LogicalExpression { loc, .. } => loc,
            Expression::CompareExpression { loc, .. } => loc,
            Expression::UnaryMathExpression { loc, .. } => loc,
            Expression::BinaryMathExpression { loc, .. } => loc,
            Expression::UnaryCryptoExpression { loc, .. } => loc,
            Expression::CheckSigExpression { loc, .. } => loc,
            Expression::ByteExpression { loc, .. } => loc,
        }
    }
}

impl Locatable for Factor {
    fn loc_mut(&mut self) -> &mut Location {
        match self {
            Factor::SingleSigFactor { loc, .. } => loc,
            Factor::MultiSigFactor { loc, .. } => loc,
        }
    }
    fn loc(self) -> Location {
        match self {
            Factor::SingleSigFactor { loc, .. } => loc,
            Factor::MultiSigFactor { loc, .. } => loc,
        }
    }
}

// 1. Get line and column for each statement's location(span)

/// Builds an index of the starting byte offset for each line in the source code.
/// This should be called only once per source file for efficiency.
pub fn build_line_index(source: &str) -> Vec<usize> {
    std::iter::once(0)
        .chain(source.match_indices('\n').map(|(i, _)| i + 1))
        .collect()
}

/// Finds the 1-based line and column numbers for a given byte offset
/// using a pre-built line index.
pub fn get_line_and_column(line_index: &[usize], byte_offset: usize) -> (usize, usize) {
    let line = line_index
        .iter()
        .rposition(|&start| start <= byte_offset)
        .map_or(1, |i| i + 1);
    let column = byte_offset - line_index[line - 1] + 1;
    (line, column)
}

pub fn set_ast_location(ast: &mut Vec<Statement>, line_index: &[usize]) {
    for stmt in ast {
        set_stmt_location(stmt, line_index);
    }
}

/// Recursively walks the AST and populates the line and column numbers.
pub fn set_stmt_location(stmt: &mut Statement, line_index: &[usize]) {
    // Get a mutable reference to the location using our new trait method.
    let loc = stmt.loc_mut();

    // Perform the update logic once.
    let (line, column) = get_line_and_column(line_index, loc.start);
    loc.line = line;
    loc.column = column;

    match stmt {
        Statement::VerifyStatement(_loc, expr) => {
            set_expr_location(expr, line_index);
        }
        Statement::ExpressionStatement(_loc, expr) => {
            set_expr_location(expr, line_index);
        }
        Statement::IfStatement {
            loc: _,
            condition_expr: expr,
            if_block,
            else_block,
        } => {
            set_expr_location(expr, line_index);
            // recursive
            for if_stmt in if_block {
                set_stmt_location(if_stmt, line_index);
            }
            if let Some(else_b) = else_block.as_mut() {
                for else_stmt in else_b {
                    set_stmt_location(else_stmt, line_index);
                }
            }
        }
        _ => (),
    }
}

/// Recursively walks the AST and populates the line and column numbers.
pub fn set_expr_location(expr: &mut Expression, line_index: &[usize]) {
    // Get a mutable reference to the location using our new trait method.
    let loc = expr.loc_mut();

    // Perform the update logic once.
    let (line, column) = get_line_and_column(line_index, loc.start);
    loc.line = line;
    loc.column = column;

    // Set factor for expression which does have factor as child node
    match expr {
        Expression::CheckSigExpression {
            loc: _,
            operand,
            op: _,
        } => {
            set_factor_location(&mut *operand, line_index);
        }
        Expression::UnaryCryptoExpression {
            loc: _,
            operand,
            op,
        } => set_expr_location(operand, line_index),
        Expression::LogicalExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            set_expr_location(lhs, line_index);
            set_expr_location(rhs, line_index);
        }
        Expression::CompareExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            set_expr_location(lhs, line_index);
            set_expr_location(rhs, line_index);
        }
        Expression::UnaryMathExpression {
            loc: _,
            operand,
            op,
        } => set_expr_location(operand, line_index),
        Expression::BinaryMathExpression {
            loc: _,
            lhs,
            op,
            rhs,
        } => {
            set_expr_location(lhs, line_index);
            set_expr_location(rhs, line_index);
        }
        Expression::ByteExpression {
            loc: _,
            operand,
            op: _,
        } => set_expr_location(operand, line_index),
        _ => (),
    }
}

/// Recursively walks the AST and populates the line and column numbers.
pub fn set_factor_location(factor: &mut Factor, line_index: &[usize]) {
    // Get a mutable reference to the location using our new trait method.
    let loc = factor.loc_mut();

    // Perform the update logic once.
    let (line, column) = get_line_and_column(line_index, loc.start);
    loc.line = line;
    loc.column = column;
    match factor {
        Factor::SingleSigFactor {
            loc: _,
            sig,
            pubkey,
        } => {
            set_expr_location(sig, line_index);
            set_expr_location(pubkey, line_index);
        }
        Factor::MultiSigFactor { loc: _, m: _, n } => {
            for factor in n {
                match factor {
                    Factor::SingleSigFactor {
                        loc: _,
                        sig,
                        pubkey,
                    } => {
                        set_expr_location(sig, line_index);
                        set_expr_location(pubkey, line_index);
                    }
                    _ => continue,
                }
            }
        }
    }
}

// 2. Remove all the comments from source code
use lazy_static::lazy_static;
use regex::Regex;

/// Removes all single-line (`//`) and multi-line (`/* ... */`) comments from a source string.
pub fn strip_comments(source: &str) -> String {
    lazy_static! {
        // This regex pattern finds both single-line and multi-line comments.
        // It correctly handles nested asterisks in multi-line comments.
        static ref COMMENT_REGEX: Regex = Regex::new(r"(//[^\n\r]*)|(/\*[^*]*\*+(?:[^/*][^*]*\*+)*/)").unwrap();
    }
    COMMENT_REGEX.replace_all(source, "").to_string()
}

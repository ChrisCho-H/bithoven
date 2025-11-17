pub mod analyze;
pub mod analyze_test;
pub mod ast;
pub mod compile;
pub mod parser_test;
pub mod source;

use ast::*;
use compile::*;
use lalrpop_util::lalrpop_mod;

use serde::{Deserialize, Serialize};

use wasm_bindgen::prelude::*;

use crate::analyze::*;
use crate::source::*;

use lalrpop_util::ParseError;

use std::fmt::Debug;
use std::result::Result;

lalrpop_mod!(pub bithoven); // synthesized by LALRPOP

// Define the data structure you want to write to JSON
#[derive(Serialize, Deserialize, Debug, Clone)]
#[wasm_bindgen]
pub struct BithovenOutput {
    asm: String,
    hex: String,
    bytes: Vec<u8>,
}

#[wasm_bindgen]
impl BithovenOutput {
    #[wasm_bindgen(constructor)]
    pub fn new(asm: String, hex: String, bytes: Vec<u8>) -> Self {
        BithovenOutput { asm, hex, bytes }
    }
    #[wasm_bindgen]
    pub fn to_object(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self).unwrap()
    }
    #[wasm_bindgen]
    pub fn from_object(object: JsValue) -> BithovenOutput {
        serde_wasm_bindgen::from_value(object)
            .map_err(|e| JsValue::from_str(&format!("Failed to deserialize: {}", e)))
            .unwrap()
    }
    #[wasm_bindgen(getter)]
    pub fn asm(&self) -> String {
        self.asm.clone()
    }
    #[wasm_bindgen(getter)]
    pub fn hex(&self) -> String {
        self.hex.clone()
    }
    #[wasm_bindgen(getter)]
    pub fn bytes(&self) -> Vec<u8> {
        self.bytes.clone()
    }
}

pub fn parse(source: String) -> Result<Bithoven, CompileError> {
    let line_index = build_line_index(&source);
    match bithoven::BithovenParser::new().parse(&source) {
        Ok(mut utxo) => {
            set_stack_location(&mut utxo.input_stack, &line_index);
            set_ast_location(&mut utxo.output_script, &line_index);
            Ok(utxo)
        }
        Err(e) => {
            // FAILURE PATH: Use the index to report the parse error location.
            let location = match &e {
                ParseError::InvalidToken { location } => *location,
                ParseError::UnrecognizedEof { location, .. } => *location,
                ParseError::UnrecognizedToken { token, .. } => token.0,
                ParseError::ExtraToken { token, .. } => token.0,
                // Handle other error variants...
                _ => 0,
            };

            let (line, column) = get_line_and_column(&line_index, location);
            let invalid_statement = source[if line != line_index.len() {
                line_index[line - 1]..line_index[line]
            } else {
                line_index[line - 1]..source.len()
            }]
            .trim();

            Err(CompileError {
                loc: Location {
                    start: 0,
                    end: 0,
                    line,
                    column,
                },
                kind: ErrorKind::ParseError(format!(
                    "Invalid Statement: \"{}\"",
                    invalid_statement
                )),
            })
        }
    }
}

#[wasm_bindgen]
pub fn parse_compile_analyze(source: String) -> Result<BithovenOutput, JsValue> {
    // UTXO: stack + scripts - bitcoin HTLC
    let utxo: Bithoven = parse(source)?;

    analyze(
        &utxo.output_script,
        utxo.input_stack.clone(),
        &utxo.pragma.target,
    )?;

    let script = compile(utxo.output_script.clone(), &utxo.pragma.target);

    Ok(BithovenOutput::new(
        bitcoin::Script::from_bytes(&script).to_asm_string(),
        bitcoin::Script::from_bytes(&script).to_hex_string(),
        bitcoin::Script::from_bytes(&script).to_bytes(),
    ))
}

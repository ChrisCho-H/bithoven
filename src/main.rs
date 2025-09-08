pub mod analyze;
pub mod ast;
pub mod compile;
pub mod source;

use ast::*;
use compile::*;
use lalrpop_util::lalrpop_mod;

use clap::Parser;
use lalrpop_util::ParseError;
use serde::Serialize;
use std::fs;
use std::path;
use std::result::Result;

use crate::source::*;

lalrpop_mod!(pub bithoven); // synthesized by LALRPOP

/// A simple program to demonstrate argument parsing
#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    /// path to file to compile
    #[arg(short, long)]
    path: String,
}

// Define the data structure you want to write to JSON
#[derive(Serialize)]
struct BithovenOutput {
    asm: String,
    hex: String,
    bytes: Vec<u8>,
}

fn parse(source: String) -> Result<Bithoven, ()> {
    let line_index = build_line_index(&source);
    match bithoven::BithovenParser::new().parse(&source) {
        Ok(mut utxo) => {
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
            eprintln!("Syntax Error at line {}, column {}:", line, column);
            eprintln!(
                "Invalid Statement: \"{}\"",
                &source[if line != line_index.len() {
                    line_index[line - 1]..line_index[line]
                } else {
                    line_index[line - 1]..source.len()
                }]
                .trim()
            );
            eprintln!("{:?}", e);
            Err(())
        }
    }
}

fn main() {
    let args = Args::parse();

    let source = read_bithoven(&args.path);
    // UTXO: stack + scripts - bitcoin HTLC
    let utxo: Bithoven = parse(source).unwrap();

    let script = compile(utxo.output_script.clone(), &utxo.pragma.target);

    // 1. Create an instance of your struct
    let output: BithovenOutput = BithovenOutput {
        hex: bitcoin::Script::from_bytes(&script).to_hex_string(),
        asm: bitcoin::Script::from_bytes(&script).to_asm_string(),
        bytes: bitcoin::Script::from_bytes(&script).to_bytes(),
    };

    // 2. Get the file name using path
    let file_name = path::Path::new(&args.path)
        .file_name()
        .expect("Incorrect file name for Bithoven")
        .to_str()
        .expect("Incorrect file name for Bithoven")
        .to_owned();

    // 3. Create a file to write to.
    let file = fs::File::create(file_name + ".json").unwrap();

    serde_json::to_writer_pretty(file, &output).unwrap();

    println!("PRAGMA: {:?}", utxo.pragma);
    println!("STACK: {:?}", utxo.input_stack);
    println!("AST: {:?}", utxo.output_script);

    println!("{:?}", bitcoin::Script::from_bytes(&script).to_asm_string());
}

fn read_bithoven(file_path: &String) -> String {
    // Attempt to read the file
    let bytes = fs::read(file_path).expect("Not Bithoven file.");

    str::from_utf8(&bytes)
        .expect("Bithoven file should consist of utf8.")
        .to_string()
}

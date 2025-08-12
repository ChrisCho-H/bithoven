pub mod ast;
pub mod compile;

use ast::*;
use compile::*;
use lalrpop_util::lalrpop_mod;

use clap::Parser;
use std::fs;

lalrpop_mod!(pub bithoven); // synthesized by LALRPOP

/// A simple program to demonstrate argument parsing
#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    /// path to file to compile
    #[arg(short, long)]
    path: String,
}

fn main() {
    let args = Args::parse();

    let bithoven = read_bithoven(args.path);
    // UTXO: stack + scripts - bitcoin HTLC
    let utxo: Bithoven = bithoven::BithovenParser::new().parse(&bithoven).unwrap();

    let script = compile(utxo.output_script.clone(), &utxo.pragma.target);
    println!("PRAGMA: {:?}", utxo.pragma);
    println!("STACK: {:?}", utxo.input_stack);
    println!("AST: {:?}", utxo.output_script);

    println!("{:?}", bitcoin::Script::from_bytes(&script).to_asm_string());
}

fn read_bithoven(file_path: String) -> String {
    // Attempt to read the file
    let bytes = fs::read(file_path).expect("Not Bithoven file.");

    str::from_utf8(&bytes)
        .expect("Bithoven file should consist of utf8.")
        .to_string()
}

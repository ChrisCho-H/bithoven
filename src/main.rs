use std::{collections::HashMap, string};

pub mod ast;
pub mod compile;

use ast::*;
use compile::*;
use lalrpop_util::lalrpop_mod;

use clap::Parser;
use std::fs;
use std::io;

lalrpop_mod!(pub bitcoin); // synthesized by LALRPOP

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

    let bitcom = read_bitcom(args.path);
    // UTXO: stack + scripts - bitcoin HTLC
    let mut utxo: Bitcom = bitcoin::BitcomParser::new().parse(&bitcom).unwrap();

    compile(utxo.output_script.clone());
    println!("PRAGMA: {:?}", utxo.pragma);
    println!("STACK: {:?}", utxo.input_stack);
    println!("AST: {:?}", utxo.output_script);
}

fn read_bitcom(file_path: String) -> String {
    // Attempt to read the file
    let bytes = fs::read(file_path).expect("Not Bitcom file.");

    str::from_utf8(&bytes)
        .expect("Bitcom file should consist of utf8.")
        .to_string()
}

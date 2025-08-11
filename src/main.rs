use std::{collections::HashMap, string};

pub mod ast;
pub mod compile;

use ast::*;
use compile::*;
use lalrpop_util::lalrpop_mod;

use std::fs;
use std::io;

lalrpop_mod!(pub bitcoin); // synthesized by LALRPOP

#[test]
fn bitcoin() {}

fn main() {
    let bitcom = read_bitcom("./p2pkh.bitcom".to_string());
    // UTXO: stack + scripts - bitcoin HTLC
    let mut utxo: UTXO = bitcoin::UTXOParser::new().parse(&bitcom).unwrap();

    compile(utxo.output_script.clone());
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

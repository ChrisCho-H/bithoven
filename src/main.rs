use std::{collections::HashMap, string};

pub mod ast;
pub mod compile;

use ast::*;
use compile::*;
use lalrpop_util::lalrpop_mod;

lalrpop_mod!(pub bitcoin); // synthesized by LALRPOP

#[test]
fn bitcoin() {}

fn main() {
    // UTXO: stack + scripts - bitcoin HTLC
    let mut utxo: UTXO = bitcoin::UTXOParser::new()
        .parse(
            r#"
                UTXO (first: bool, second: string, third: signature, fourth: number) {
                    older 2576085;
                    after 122;

                    verify checksig "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";

                    verify sha256 "scret secrt" != sha256 second;
                    verify !(sha256 "scret secrt" != sha256 second);

                    verify fourth >= 200;
                    verify "abc";
                    verify 16;
                    verify 17;
                    verify true;

                    if fourth {
                        verify checksig third;
                    }

                    if second == "aaaaaaddddd" {
                        older 2576085;
                        verify checksig "0345a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5211";
                    } else {
                        verify sha256 "scret secrt" != sha256 second;
                        verify checksig "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5213";
                    }

                    verify ! abs negate -- ++ sha256 ripemd160 sha256 (2 + ripemd160 sha256 3 + fourth);
                    verify (3 > 4) + (3 > 4) + (3 > 4) + (3 < 4) >= 2;

                    if (second == "abc") && (fourth >= 4) {
                        older 222;
                    }

                    verify 2 - (-- -4);

                    verify max(-2+3, len "abc");
                }
                "#,
        )
        .unwrap();

    compile(utxo.output_script.clone());
    println!("STACK: {:?}", utxo.input_stack);
    println!("AST: {:?}", utxo.output_script);
}

use std::collections::HashMap;

pub mod ast;

use ast::*;
use lalrpop_util::lalrpop_mod;

lalrpop_mod!(pub bitcoin); // synthesized by LALRPOP

#[test]
fn bitcoin() {
    assert!(bitcoin::ExprParser::new().parse("22").is_ok());
    assert!(bitcoin::ExprParser::new().parse("(22)").is_ok());
    assert!(bitcoin::ExprParser::new().parse("((((22))))").is_ok());
    assert!(bitcoin::ExprParser::new().parse("((22)").is_err());
}

fn main() {
    // number overflow
    println!(
        "{:?}",
        bitcoin::ExprParser::new().parse("2147483648").unwrap()
    );
    println!("{:?}", bitcoin::ExprParser::new().parse("1").unwrap());
    // math
    println!(
        "{:?}",
        bitcoin::ExprParser::new()
            .parse("-1+2-(4+7)+(7-4)")
            .unwrap()
    );
    // assign
    println!(
        "{:?}",
        bitcoin::StatementParser::new()
            .parse(
                r#"let _private_z_123 = " 안여누아ㅓㅁ 231#@$@!  /₩12 ㅓ2'''ㅣ;ㅣ x y z123AS S";"#
            )
            .unwrap()
    );
    // skip all the whitespace
    println!(
        "{:?}",
        bitcoin::StatementParser::new()
            .parse(
                r#"
                let _private_z_123 
                    =
                          " 안여누아ㅓㅁ 231#@$@!  /₩12 ㅓ2'''ㅣ;ㅣ x y z123AS S";
                "#
            )
            .unwrap()
    );
    // declaration is evaluated to expr
    println!(
        "{:?}",
        bitcoin::StatementParser::new()
            .parse(
                "
                let _private_z_123 
                    = 123 - 123 +23-(-23) +1;
                    "
            )
            .unwrap()
    );
    // declaration is evaluated to expr(boolean)
    println!(
        "{:?}",
        bitcoin::StatementParser::new()
            .parse(
                "
                let _private_z_123 
                     = false;
                    "
            )
            .unwrap()
    );

    // program can parse any
    println!(
        "{:?}",
        bitcoin::ScriptParser::new()
            .parse(
                r#"
                older 213;
                after 2131231;
                sha256 "abc";
                ripemd160 "abc";
                let num = -1+2-(4+7)+(7-4);
                let _private_z_123 = false;
                verify "03_public_key";
                
                    let num = -1+2-(4+7)+(7-4);
                    let _private_z_123 = false;
                    verify "03_public_key";
                    if (2+3-4 <= 1) {
                        if 3-4 > 2 {
                            verify "02_public_key";
                        } else {
                            verify "03_public_key";
                        }
                    } else {
                        verify "03_public_key";
                        push "nft";
                    } 
                
                "#
            )
            .unwrap()
    );

    // bitcoin syntax as expr
    println!(
        "{:?}",
        bitcoin::ScriptParser::new()
            .parse(
                r#"
                let proved = verify "03_public_key";

                if verify "03_public_key" == true {
                    let digest = sha256 "abc";
                    if sha256 "abc" == "digest" {
                        push "data yeah go";
                    }
                }

                if older 213 == true {
                    if after 2131231 == true {
                        push "data data";
                    }
                }
                "#
            )
            .unwrap()
    );

    // comment skip
    println!(
        "{:?}",
        bitcoin::CommentParser::new()
            .parse(
                "
    //aa
    "
            )
            .unwrap()
    );
    println!(
        "{:?}",
        bitcoin::CommentParser::new()
            .parse(
                "
    /*
                hello
                be careful
            this is it?
            */
    "
            )
            .unwrap()
    );

    // bitcoin HTLC
    let ast = bitcoin::ScriptParser::new()
        .parse(
            r#"
                let pubkey_alice = "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";
                let pubkey_bob = "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";
                let secret = "secretRandomHex";
                
                if "stack![1]" == true {
                    older 2576085;
                    verify "pubkey_alice";
                } else {
                    if sha256 "secret" != sha256 "stack![0]" {
                    }
                    verify "pubkey_bob";   
                }
                "#,
        )
        .unwrap();

    for node in ast {
        println!("{:?}", node);
    }

    // UTXO: stack + scripts - bitcoin HTLC
    let mut tuple: (Vec<String>, Vec<Statement>) = bitcoin::UTXOParser::new()
        .parse(
            r#"
                UTXO 
                (first, second)
                let pubkey_alice = "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";
                let pubkey_bob = "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";
                let secret = "secretRandomHex";
                
                if "first" == true {
                    older 2576085;
                    verify "pubkey_alice";
                } else {
                    if sha256 "secret" != sha256 "second" {
                    }
                    verify "pubkey_bob";   
                }
                "#,
        )
        .unwrap();
    println!("stack: {:?}", tuple.0.reverse());
    println!("ast: {:?}", tuple.1);
}

fn symbol_table(ast: Vec<Statement>) -> HashMap<String, String> {
    let symbol_table: HashMap<String, String> = HashMap::new();

    symbol_table
}

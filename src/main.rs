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
                let num = -1+2-(4+7)+(7-4);
                let _private_z_123 = false;
                verify "03_public_key";
                {
                    let num = -1+2-(4+7)+(7-4);
                    let _private_z_123 = false;
                    verify "03_public_key";
                    if 2+3-4 {
                        verify "03_public_key";
                    } else {
                        verify "03_public_key";
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
}

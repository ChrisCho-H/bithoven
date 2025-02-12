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
    println!("{:?}", bitcoin::ExprParser::new().parse("1").unwrap());
    println!(
        "{:?}",
        bitcoin::ExprParser::new()
            .parse("-1+2-(4+7)+(7-4)")
            .unwrap()
    );

    println!(
        "{:?}",
        bitcoin::ExprParser::new()
            .parse(r#"let z = "x y z""#)
            .unwrap()
    )
}

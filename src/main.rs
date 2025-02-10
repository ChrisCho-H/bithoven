use lalrpop_util::lalrpop_mod;

lalrpop_mod!(pub bitcoin); // synthesized by LALRPOP

#[test]
fn bitcoin() {
    assert!(bitcoin::TermParser::new().parse("22").is_ok());
    assert!(bitcoin::TermParser::new().parse("(22)").is_ok());
    assert!(bitcoin::TermParser::new().parse("((((22))))").is_ok());
    assert!(bitcoin::TermParser::new().parse("((22)").is_err());
}

fn main() {
    println!(
        "{:?}",
        bitcoin::TermParser::new().parse("(-2147483648)").unwrap()
    )
}

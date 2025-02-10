use std::{collections::HashSet, fmt::Error};

pub struct TerminalFromJS {
    /// Literal
    pub boolean: bool,
    pub number: i32,    // i32::MIN -> Overflow | has .abs() method
    pub string: String, // Size Limit varies upon context | has .size() method
    pub array: Vec<String>,
    pub object: HashSet<String, String>,
    /// Operator
    pub plus: String, // +
    pub minus: String,            // -
    pub equal: String,            // ==
    pub not_equal: String,        // !=
    pub greater: String,          // >
    pub greater_or_equal: String, // >=
    pub less: String,             // <
    pub less_or_equal: String,    // <=
    pub assign: String,           // =
    pub and: String,              // &&
    pub or: String,               // ||
    pub not: String,              // !
    pub negation: String,         // ~
    /// Punctuation
    pub paren: String, // () grouping, function call
    pub brace: String,            // {} code block, object literal
    pub bracket: String,          // [] array, property access
    pub comma: String,            // , separator
    pub dot: String,              // . member access
    pub colon: String,            // object property
    /// keyword
    pub r#if: String,
    pub r#else: String,
    pub r#true: String,
    pub r#false: String,
    pub r#for: String,
    pub r#in: String,
    pub r#let: String,
    pub r#const: String,
    pub r#static: String,
    pub throw: String,
    pub function: String,
    pub this: String,
    // identifier
    pub identifier: String,
}

pub struct TerminalFromOp {
    pub block: Block,
    pub crypto: Crypto,
    pub coin: Coin,
    pub storage: Storage,
    pub math: Math,
}

pub struct Storage {}

pub struct Crypto {}

pub struct Block {}

pub struct Coin {}

pub struct Math {}

impl Storage {
    /// write in output(will be readable right after publishing contract)
    pub fn write(key: u8, value: String) {}
    /// write in input(will be readable only after contract spent(revealed))
    /// problem is this data will be not in UTXO set, only in witness
    pub fn commit(key: u8, value: String) {}
}

impl Crypto {
    pub fn verify(pubkey: String) -> bool {
        true
    }
    pub fn sha256(data: String) -> String {
        String::from("dummy")
    }
    pub fn ripemd160(data: String) -> String {
        String::from("dummy")
    }
    pub fn sha1(data: String) -> String {
        String::from("dummy")
    }
}

impl Block {
    pub fn height() -> i32 {
        1
    }
}

impl Coin {
    pub fn amount() -> i32 {
        1
    }
    pub fn confirmed_count() -> i32 {
        1
    }
}

impl Math {
    pub fn abs(num: i32) -> i32 {
        num.abs()
    }
    pub fn max(a: i32, b: i32) -> i32 {
        if a > b {
            return a;
        } else {
            return b;
        }
    }
    pub fn min(a: i32, b: i32) -> i32 {
        if a > b {
            return b;
        } else {
            return a;
        }
    }
}

pub struct Contract {}

impl Contract {
    fn lock(input: Vec<String>, input_num: Vec<i32>) {
        let alice = String::from("dummy");
        let bob = String::from("dummy");
        let block = 2000;
        let num1 = 1;
        let num2 = 2;
        let data = String::from("abc");
        let mut vec: Vec<String> = Vec::new();

        // contract
        {
            // single sig
            if !Crypto::verify(alice.clone()) {
                panic!()
            }
            // multisig
            let mut threshold_musig = 2;
            let muti_pubkey_vec = [alice.clone(), bob.clone()];
            for i in 0..2 {
                if Crypto::verify(muti_pubkey_vec[i].clone()) {
                    threshold_musig -= 1;
                }
            }
            if threshold_musig != 0 {
                panic!()
            }

            // absoulte timelock
            if Block::height() < 100000 {
                panic!()
            }

            // relative timelock
            if Coin::confirmed_count() < 100 {
                panic!()
            }

            // HTLC
            if !(Block::height() < 100000 || Crypto::verify(alice.clone())) {
                panic!()
            } else if !(Crypto::sha256(input[0].clone()) == String::from("hash")
                || Crypto::verify(bob.clone()))
            {
                panic!()
            }

            // number operation
            if (input_num[0] + 3) * input_num[2] / 7 != 32 {
                panic!()
            }

            // string operation
            let new_string = input[0].to_owned();
            if new_string != data {
                panic!()
            };

            // permanent storage
            Storage::write(0, data.clone());
            Storage::write(1, data.clone());

            // inscription
            Storage::commit(2, data.clone());
        }
    }
}

fn main() {
    println!("Hello, world!");
}

//! BIP448 (OP_TEMPLATEHASH, OP_CHECKSIGFROMSTACK, OP_INTERNALKEY) under
//! `pragma bithoven target bip448;`. Opcode bytes, stack order and gating follow
//! BIP446/348/349 and bitcoin-inquisition's interpreter (29.x).
#[cfg(all(test, feature = "bip448"))]
mod tests {
    use crate::{compile_program, ErrorKind};

    const K: &str = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798";
    const K2: &str = "c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5";
    const K33: &str = "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798";
    const H: &str = "5f16f3c9c3c660498ddb6d10afc83627cb3ffe67f5cfd9aee0f2a5c1d8b1e8c2";

    const INTERNALKEY: u8 = 0xcb;
    const CSFS: u8 = 0xcc;
    const TEMPLATEHASH: u8 = 0xce;
    const OP_CHECKSIG: u8 = 0xac;
    const OP_CHECKSIGADD: u8 = 0xba;
    const OP_EQUAL: u8 = 0x87;
    const OP_VERIFY: u8 = 0x69;
    const OP_TOALTSTACK: u8 = 0x6b;
    const OP_FROMALTSTACK: u8 = 0x6c;
    const OP_SWAP: u8 = 0x7c;

    fn src(target: &str, decls: &str, body: &str) -> String {
        format!(
            "pragma bithoven version 0.0.1;\npragma bithoven target {};\n{}\n{{\n{}\n}}\n",
            target, decls, body
        )
    }

    fn bytes(target: &str, decls: &str, body: &str) -> Vec<u8> {
        match compile_program(src(target, decls, body)) {
            Ok(out) => out.bytes(),
            Err(e) => panic!("expected to compile, got {}", e),
        }
    }

    fn err(target: &str, decls: &str, body: &str) -> ErrorKind {
        match compile_program(src(target, decls, body)) {
            Ok(out) => panic!("expected a compile error, got {}", out.asm()),
            Err(e) => e.kind,
        }
    }

    fn push32(hex_str: &str) -> Vec<u8> {
        let mut v = vec![0x20];
        v.extend(hex::decode(hex_str).unwrap());
        v
    }

    // --- Code generation --------------------------------------------------

    /// The canonical rebindable-signature leaf: <sig> | TEMPLATEHASH INTERNALKEY CSFS.
    #[test]
    fn rebindable_signature_over_internal_key() {
        let b = bytes(
            "bip448",
            "(sig: signature)",
            "return checksigfromstack(sig, templatehash, internalkey);",
        );
        assert_eq!(b, vec![TEMPLATEHASH, INTERNALKEY, CSFS]);
    }

    #[test]
    fn rebindable_signature_over_key_literal() {
        let b = bytes(
            "bip448",
            "(sig: signature)",
            &format!("return checksigfromstack(sig, templatehash, \"{}\");", K),
        );
        let mut want = vec![TEMPLATEHASH];
        want.extend(push32(K));
        want.push(CSFS);
        assert_eq!(b, want);
    }

    /// A witness message must be swapped under the signature: BIP348 reads the
    /// signature third from the top and the message second.
    #[test]
    fn csfs_with_witness_message_orders_sig_below_msg() {
        let b = bytes(
            "bip448",
            "(sig_o: signature, msg: string, sig_u: signature)",
            &format!(
                "verify checksigfromstack(sig_o, msg, \"{}\");\nreturn checksig(sig_u, internalkey);",
                K
            ),
        );
        let mut want = vec![OP_TOALTSTACK, OP_FROMALTSTACK, OP_SWAP];
        want.extend(push32(K));
        want.extend([CSFS, OP_VERIFY, INTERNALKEY, OP_CHECKSIG]);
        assert_eq!(b, want);
    }

    #[test]
    fn checksig_against_internal_key() {
        let b = bytes(
            "bip448",
            "(sig: signature)",
            "return checksig(sig, internalkey);",
        );
        assert_eq!(b, vec![INTERNALKEY, OP_CHECKSIG]);
    }

    #[test]
    fn multisig_with_internal_key_uses_checksigadd() {
        let b = bytes(
            "bip448",
            "(s1: signature, s2: signature)",
            &format!("return checksig[2, (s1, internalkey), (s2, \"{}\")];", K),
        );
        let mut want = vec![INTERNALKEY, OP_CHECKSIG];
        want.extend(push32(K));
        want.extend([OP_CHECKSIGADD, 0x52, 0x9c]); // OP_2 OP_NUMEQUAL
        assert_eq!(b, want);
    }

    /// A keyless template commitment, the shape of Inquisition's
    /// `feature_templatehash.py` "basic" script.
    #[test]
    fn template_commitment_is_a_binding_path() {
        let b = bytes(
            "bip448",
            "()",
            &format!("return templatehash == \"{}\";", H),
        );
        let mut want = vec![TEMPLATEHASH, OP_TOALTSTACK];
        want.extend(push32(H));
        want.extend([OP_FROMALTSTACK, OP_SWAP, OP_EQUAL]);
        assert_eq!(b, want);
    }

    /// Ark-style output: owner exit after a delay, or a pre-committed tx.
    #[test]
    fn exit_or_template() {
        let b = bytes(
            "bip448",
            "(exit: bool, sig: signature)\n(exit: bool)",
            &format!(
                "if exit {{ older 144; return checksig(sig, \"{}\"); }} else {{ return templatehash == \"{}\"; }}",
                K, H
            ),
        );
        assert!(b.contains(&TEMPLATEHASH));
    }

    #[test]
    fn asm_uses_bip448_names() {
        let out = compile_program(src(
            "bip448",
            "(sig: signature)",
            "return checksigfromstack(sig, templatehash, internalkey);",
        ))
        .unwrap();
        assert_eq!(
            out.asm(),
            "OP_TEMPLATEHASH OP_INTERNALKEY OP_CHECKSIGFROMSTACK"
        );
    }

    /// `bip448` is a superset of `taproot`: a contract without the new opcodes
    /// compiles to the same bytes under both.
    #[test]
    fn bip448_is_taproot_for_existing_contracts() {
        let body = format!(
            "if c {{ older 10; return checksig(a, \"{}\"); }} else {{ return checksig[2, (x, \"{}\"), (y, \"{}\")]; }}",
            K, K, K2
        );
        let decls = "(c: bool, a: signature)\n(c: bool, x: signature, y: signature)";
        assert_eq!(
            bytes("taproot", decls, &body),
            bytes("bip448", decls, &body)
        );
    }

    // --- Target gating ----------------------------------------------------

    #[test]
    fn opcodes_rejected_outside_bip448() {
        let cases = [
            ("()", format!("return templatehash == \"{}\";", H)),
            (
                "(sig: signature)",
                "return checksig(sig, internalkey);".to_string(),
            ),
            (
                "(sig: signature)",
                format!("return checksigfromstack(sig, templatehash, \"{}\");", K),
            ),
            (
                "(sig: signature, m: string)",
                format!("return checksigfromstack(sig, m, \"{}\");", K),
            ),
        ];
        for target in ["legacy", "segwit", "taproot"] {
            for (decls, body) in &cases {
                match err(target, decls, body) {
                    ErrorKind::InvalidOperation(msg) => {
                        assert!(msg.contains("target bip448"), "{}", msg)
                    }
                    other => panic!(
                        "{} / {}: expected InvalidOperation, got {:?}",
                        target, body, other
                    ),
                }
            }
        }
    }

    #[test]
    fn taproot_rejection_names_op_success() {
        match err(
            "taproot",
            "()",
            &format!("return templatehash == \"{}\";", H),
        ) {
            ErrorKind::InvalidOperation(msg) => assert!(msg.contains("OP_SUCCESS"), "{}", msg),
            other => panic!("{:?}", other),
        }
    }

    // --- Signature necessity ---------------------------------------------

    #[test]
    fn negated_template_commitment_rejected() {
        let k = err(
            "bip448",
            "()",
            &format!("return templatehash != \"{}\";", H),
        );
        assert!(matches!(k, ErrorKind::NoSigRequired(_)), "{:?}", k);
    }

    #[test]
    fn template_hash_against_witness_rejected() {
        let k = err("bip448", "(h: string)", "return templatehash == h;");
        assert!(matches!(k, ErrorKind::NoSigRequired(_)), "{:?}", k);
    }

    /// An attestation over an arbitrary message is replayable: alone it does
    /// not authorise the spend.
    #[test]
    fn csfs_over_witness_message_alone_rejected() {
        let k = err(
            "bip448",
            "(sig: signature, m: string)",
            &format!("return checksigfromstack(sig, m, \"{}\");", K),
        );
        match k {
            ErrorKind::UselessSig(msg) => assert!(msg.contains("templatehash"), "{}", msg),
            other => panic!("expected UselessSig, got {:?}", other),
        }
    }

    #[test]
    fn csfs_over_literal_message_alone_rejected() {
        let k = err(
            "bip448",
            "(sig: signature)",
            &format!("return checksigfromstack(sig, \"{}\", \"{}\");", H, K),
        );
        assert!(matches!(k, ErrorKind::UselessSig(_)), "{:?}", k);
    }

    #[test]
    fn inverted_rebindable_signature_rejected() {
        let k = err(
            "bip448",
            "(sig: signature)",
            "return !checksigfromstack(sig, templatehash, internalkey);",
        );
        assert!(matches!(k, ErrorKind::UselessSig(_)), "{:?}", k);
    }

    #[test]
    fn template_commitment_or_flag_rejected() {
        let k = err(
            "bip448",
            "(f: bool)",
            &format!("return templatehash == \"{}\" || f;", H),
        );
        assert!(matches!(k, ErrorKind::NoSigRequired(_)), "{:?}", k);
    }

    #[test]
    fn dead_template_path_rejected() {
        let k = err(
            "bip448",
            "()",
            &format!("verify false; return templatehash == \"{}\";", H),
        );
        assert!(matches!(k, ErrorKind::DeadPath(_)), "{:?}", k);
    }

    // --- Types and literals ----------------------------------------------

    #[test]
    fn template_hash_literal_must_be_32_bytes() {
        let k = err("bip448", "()", "return templatehash == \"abcd\";");
        assert!(matches!(k, ErrorKind::InvalidOperation(_)), "{:?}", k);
    }

    #[test]
    fn internal_key_is_only_a_key() {
        let k = err(
            "bip448",
            "(sig: signature)",
            &format!(
                "verify sha256(internalkey) == \"{}\"; return checksig(sig, internalkey);",
                H
            ),
        );
        assert!(matches!(k, ErrorKind::InvalidOperation(_)), "{:?}", k);
    }

    #[test]
    fn csfs_key_must_be_x_only() {
        let k = err(
            "bip448",
            "(sig: signature)",
            &format!("return checksigfromstack(sig, templatehash, \"{}\");", K33),
        );
        assert!(matches!(k, ErrorKind::MalformedPubkey(_)), "{:?}", k);
    }

    #[test]
    fn csfs_key_must_not_come_from_the_witness() {
        let k = err(
            "bip448",
            "(sig: signature, pk: string)",
            "return checksigfromstack(sig, templatehash, pk);",
        );
        assert!(matches!(k, ErrorKind::TypeMismatch(_)), "{:?}", k);
    }

    #[test]
    fn csfs_signature_must_be_a_signature() {
        let k = err(
            "bip448",
            "(sig: string)",
            "return checksigfromstack(sig, templatehash, internalkey);",
        );
        assert!(matches!(k, ErrorKind::InvalidOperation(_)), "{:?}", k);
    }

    #[test]
    fn csfs_signature_consumed_once() {
        let k = err(
            "bip448",
            "(sig: signature)",
            "verify checksigfromstack(sig, templatehash, internalkey); return checksig(sig, internalkey);",
        );
        assert!(matches!(k, ErrorKind::VariableConsumed(_)), "{:?}", k);
    }

    #[test]
    fn template_hash_is_not_a_number() {
        let k = err(
            "bip448",
            "(sig: signature)",
            "verify len(templatehash) + templatehash == 32; return checksig(sig, internalkey);",
        );
        assert!(matches!(k, ErrorKind::InvalidOperation(_)), "{:?}", k);
    }
}

/// A default build (no `bip448` feature) behaves as today's consensus: the
/// extension pack is refused, and plain taproot still compiles.
#[cfg(all(test, not(feature = "bip448")))]
mod disabled {
    use crate::{compile_program, ErrorKind};

    const K: &str = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798";

    #[test]
    fn bip448_target_refused_without_the_feature() {
        let src = "pragma bithoven version 0.0.1;\npragma bithoven target bip448;\n(sig: signature)\n{ return checksigfromstack(sig, templatehash, internalkey); }\n";
        match compile_program(src.to_string()) {
            Err(e) => assert!(
                matches!(e.kind, ErrorKind::ExtensionDisabled(_)),
                "{:?}",
                e.kind
            ),
            Ok(out) => panic!("compiled without the feature: {}", out.asm()),
        }
    }

    #[test]
    fn bip448_opcodes_refused_under_taproot_without_the_feature() {
        let src = "pragma bithoven version 0.0.1;\npragma bithoven target taproot;\n(sig: signature)\n{ return checksig(sig, internalkey); }\n";
        match compile_program(src.to_string()) {
            Err(e) => assert!(
                matches!(e.kind, ErrorKind::InvalidOperation(_)),
                "{:?}",
                e.kind
            ),
            Ok(out) => panic!("compiled: {}", out.asm()),
        }
    }

    #[test]
    fn plain_taproot_unaffected() {
        let src = format!("pragma bithoven version 0.0.1;\npragma bithoven target taproot;\n(sig: signature)\n{{ return checksig(sig, \"{}\"); }}\n", K);
        assert!(compile_program(src).is_ok());
    }
}

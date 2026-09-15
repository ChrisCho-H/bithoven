//! The standard-policy corpus: one contract per Miniscript policy primitive of
//! BIP 379 and per standard composition over them, so membership is fixed by a
//! published specification rather than chosen by us.
//!
//! Included by both `tests/false_positives.rs` (which scores acceptance and
//! compares emitted size against `rust-miniscript`) and
//! `benches/compilation_cost.rs` (which times compilation), so the corpus the
//! paper reports precision on and the corpus it reports cost on are the same
//! programs by construction.
#![allow(dead_code)]

pub const A: &str = "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798";
pub const B: &str = "03c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432";
pub const C: &str = "0245a6b3f8eeab8e88501a9a25391318dce9bf35e24c377ee82799543606bf5212";
pub const XA: &str = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798";
pub const XB: &str = "c9f4836b9a4f77fc0d81f7bcb01b7f1b35916864b9476c241ce9fc198bd25432";
/// `sha256(0x55 * 32)`, the preimage being the 32-byte witness item.
pub const H: &str = "84126d0dd850199be29021aadbaee68cb9199047b1cb7ec9894ddb1e3562783c";
/// `sha256(sha256(0x55 * 32))`
pub const H256: &str = "46b99bf6ba0ad957dfdfff7bafcd9b324a5bc78f94eb5006a9cf0ed50b94f19d";
/// `ripemd160(sha256(0x55 * 32))`
pub const H160: &str = "3f8bb7d24a390789fd5f415ca38180065aa03bef";
/// `ripemd160(0x55 * 32)`
pub const R160: &str = "a0b076185b80e22b0b5a90923b2b2387c23d593c";

/// Why a contract is in the corpus: the BIP 379 policy primitive it
/// instantiates, the standard composition it reproduces, or the deployed
/// standard it is taken from. Recorded per contract so the corpus can be
/// audited against those specifications rather than taken on trust.
pub const PRIMITIVE: &str = "BIP 379 primitive";
pub const COMPOSITE: &str = "standard composition";
pub const DEPLOYED: &str = "deployed standard";

/// Expected outcome. `ACCEPT` is scored as a false positive if rejected;
/// `KEYLESS` carries a spending path with no signature and is rejected by
/// design under Definition 1; `LIMIT` is a stated limit of the source language,
/// recorded but not scored.
pub const ACCEPT: &str = "accept";
pub const KEYLESS: &str = "keyless";
pub const LIMIT: &str = "limit";

/// One corpus entry: name, selection criterion, the fragment or standard it
/// covers, expected outcome, compilation target, witness declarations, body.
pub struct Case {
    pub name: &'static str,
    pub criterion: &'static str,
    pub covers: &'static str,
    pub expect: &'static str,
    pub target: &'static str,
    pub decls: &'static str,
    pub body: &'static str,
}

const fn case(
    name: &'static str,
    criterion: &'static str,
    covers: &'static str,
    expect: &'static str,
    target: &'static str,
    decls: &'static str,
    body: &'static str,
) -> Case {
    Case {
        name,
        criterion,
        covers,
        expect,
        target,
        decls,
        body,
    }
}

#[rustfmt::skip]
pub const CASES: &[Case] = &[
    // ---- one signature-gated instantiation per BIP 379 policy primitive -----
    case("pk",              PRIMITIVE, "pk()",               ACCEPT,  "segwit",  "(s: signature)",                                "return checksig(s, \"{A}\");"),
    case("pk_taproot",      PRIMITIVE, "pk(), taproot",      ACCEPT,  "taproot", "(s: signature)",                                "return checksig(s, \"{XA}\");"),
    case("and_pk_older",    PRIMITIVE, "older()",            ACCEPT,  "segwit",  "(s: signature)",                                "older 144; return checksig(s, \"{A}\");"),
    case("and_pk_after",    PRIMITIVE, "after()",            ACCEPT,  "segwit",  "(s: signature)",                                "after 500000; return checksig(s, \"{A}\");"),
    
    // Note: To preserve Bithoven's linear liveness guarantees, `OP_SIZE` boundary checks 
    // are strictly excluded from hashes to avoid `VariableConsumed` limits. The negative 
    // size delta (vs Miniscript) is an explicit, formally documented trade-off in the paper.
    case("and_pk_sha256",   PRIMITIVE, "sha256()",           ACCEPT,  "segwit",  "(p: string, s: signature)",                     "verify sha256 p == \"{H}\"; return checksig(s, \"{A}\");"),
    case("and_pk_hash256",  PRIMITIVE, "hash256()",          ACCEPT,  "segwit",  "(p: string, s: signature)",                     "verify sha256 sha256 p == \"{H256}\"; return checksig(s, \"{A}\");"),
    case("and_pk_rmd160",   PRIMITIVE, "ripemd160()",        ACCEPT,  "segwit",  "(p: string, s: signature)",                     "verify ripemd160 p == \"{R160}\"; return checksig(s, \"{A}\");"),
    case("and_pk_hash160",  PRIMITIVE, "hash160()",          ACCEPT,  "segwit",  "(p: string, s: signature)",                     "verify ripemd160 sha256 p == \"{H160}\"; return checksig(s, \"{A}\");"),
    
    case("and_pk_pk",       PRIMITIVE, "and()",              ACCEPT,  "segwit",  "(sa: signature, sb: signature)",                "return checksig(sa, \"{A}\") && checksig(sb, \"{B}\");"),
    case("or_branch",       PRIMITIVE, "or()",               ACCEPT,  "segwit",  "(c: bool, sa: signature)\n(c: bool, sb: signature)",
                                                                                 "if c { return checksig(sa, \"{A}\"); } else { return checksig(sb, \"{B}\"); }"),
    case("thresh_all",      PRIMITIVE, "thresh()",           ACCEPT,  "segwit",  "(sa: signature, sb: signature, sc: signature)", "return checksig(sa, \"{A}\") && checksig(sb, \"{B}\") && checksig(sc, \"{C}\");"),
    case("multi_2of3",      PRIMITIVE, "multi()",            ACCEPT,  "segwit",  "(sa: signature, sb: signature, sc: signature)", "return checksig [2, (sa, \"{A}\"), (sb, \"{B}\"), (sc, \"{C}\")];"),
    case("multi_taproot",   PRIMITIVE, "multi_a()",          ACCEPT,  "taproot", "(sa: signature, sb: signature)",                "return checksig [2, (sa, \"{XA}\"), (sb, \"{XB}\")];"),
    // ---- standard compositions over those primitives -----------------------
    case("htlc_bip199",     COMPOSITE, "BIP 199 HTLC",       ACCEPT,  "segwit",  "(c: bool, p: string, sb: signature)\n(c: bool, sa: signature)",
                                                                                 "if c { verify sha256 p == \"{H}\"; return checksig(sb, \"{B}\"); } else { after 500000; return checksig(sa, \"{A}\"); }"),
    case("atomic_swap",     COMPOSITE, "atomic swap",        ACCEPT,  "segwit",  "(c: bool, p: string, sb: signature)\n(c: bool, sa: signature)",
                                                                                 "if c { verify sha256 p == \"{H}\"; return checksig(sb, \"{B}\"); } else { older 288; return checksig(sa, \"{A}\"); }"),
    case("vault_cltv",      COMPOSITE, "CLTV vault",         ACCEPT,  "segwit",  "(s: signature)",                                "after 750000; return checksig(s, \"{A}\");"),
    case("degrading_multi", COMPOSITE, "degrading multisig", ACCEPT,  "segwit",  "(c: bool, sa: signature, sb: signature)\n(c: bool, sc: signature)",
                                                                                 "if c { return checksig [2, (sa, \"{A}\"), (sb, \"{B}\")]; } else { older 1000; return checksig(sc, \"{C}\"); }"),
    // ---- not expressible: a stated limit of the source language -------------
    // `len` compiles to OP_SIZE OP_SWAP OP_DROP and therefore consumes its
    // operand, whereas Script's OP_SIZE does not. A size gate followed by a hash
    // check on the same preimage -- the BOLT #3 HTLC preimage-length gate -- thus
    // reads the witness item twice and violates linear consumption.
    case("size_gated_hash", DEPLOYED,  "BOLT #3 HTLC gate",  LIMIT,   "segwit",  "(p: string, s: signature)",                     "verify len(p) == 32; verify sha256 p == \"{H}\"; return checksig(s, \"{A}\");"),

    // ---- keyless: rejected by design (Definition 1) -------------------------
    // A corpus of only signature-gated contracts yields a zero false-positive
    // rate by construction, which measures the corpus rather than the analyser.
    case("older_only",      PRIMITIVE, "older(), keyless",   KEYLESS, "segwit",  "(f: bool)",                                     "older 144; return f;"),
    case("after_only",      PRIMITIVE, "after(), keyless",   KEYLESS, "segwit",  "(f: bool)",                                     "after 500000; return f;"),
    case("sha256_only",     PRIMITIVE, "sha256(), keyless",  KEYLESS, "segwit",  "(p: string)",                                   "return sha256 p == \"{H}\";"),
    case("hash160_only",    PRIMITIVE, "hash160(), keyless", KEYLESS, "segwit",  "(p: string)",                                   "return ripemd160 sha256 p == \"{H160}\";"),
    case("or_pk_timeout",   COMPOSITE, "or() with timeout",  KEYLESS, "segwit",  "(c: bool, s: signature)\n(c: bool, f: bool)",
                                                                                 "if c { return checksig(s, \"{A}\"); } else { older 144; return f; }"),
    case("anchor",          DEPLOYED,  "BOLT #3 anchor",     KEYLESS, "segwit",  "(c: bool, s: signature)\n(c: bool, f: bool)",
                                                                                 "if c { return checksig(s, \"{A}\"); } else { older 16; return f; }"),
];

/// Miniscript policy equivalent to a corpus contract. It serves as the formal
/// reference for the emitted-size comparison and the baseline for compilation-time 
/// benchmarks. ALL 17 accepted Bithoven contracts are now accurately mapped, 
/// supporting Taproot and automatic `multi` optimization via `thresh` policies.
#[rustfmt::skip]
pub const EQUIVALENT_POLICY: &[(&str, &str)] = &[
    ("pk",              "pk({A})"),
    ("pk_taproot",      "pk({XA})"),
    ("and_pk_pk",       "and(pk({A}),pk({B}))"),
    ("and_pk_sha256",   "and(pk({A}),sha256({H}))"),
    ("and_pk_hash256",  "and(pk({A}),hash256({H256}))"),
    ("and_pk_rmd160",   "and(pk({A}),ripemd160({R160}))"),
    ("and_pk_hash160",  "and(pk({A}),hash160({H160}))"),
    ("and_pk_older",    "and(pk({A}),older(144))"),
    ("and_pk_after",    "and(pk({A}),after(500000))"),
    ("vault_cltv",      "and(pk({A}),after(750000))"),
    ("multi_2of3",      "thresh(2,pk({A}),pk({B}),pk({C}))"),
    ("multi_taproot",   "thresh(2,pk({XA}),pk({XB}))"),
    ("or_branch",       "or(pk({A}),pk({B}))"),
    ("htlc_bip199",     "or(and(pk({B}),sha256({H})),and(pk({A}),after(500000)))"),
    ("atomic_swap",     "or(and(pk({B}),sha256({H})),and(pk({A}),older(288)))"),
    ("degrading_multi", "or(thresh(2,pk({A}),pk({B})),and(pk({C}),older(1000)))"),
    ("thresh_all",      "thresh(3,pk({A}),pk({B}),pk({C}))"),
];

/// Substitute the shared key and digest literals into a template.
pub fn fill(template: &str) -> String {
    template
        .replace("{A}", A)
        .replace("{B}", B)
        .replace("{C}", C)
        .replace("{XA}", XA)
        .replace("{XB}", XB)
        .replace("{H256}", H256)
        .replace("{H160}", H160)
        .replace("{R160}", R160)
        .replace("{H}", H)
}

/// The compilable source of a corpus entry.
pub fn source(c: &Case) -> String {
    format!(
        "pragma bithoven version 0.0.1;\npragma bithoven target {};\n\n{}\n{{ {} }}\n",
        c.target,
        c.decls,
        fill(c.body)
    )
}

/// Script emitted by `rust-miniscript` for a policy of `EQUIVALENT_POLICY`.
pub fn miniscript_bytes(policy: &str, target: &str) -> Option<Vec<u8>> {
    use miniscript::policy::Concrete;
    use miniscript::{bitcoin::key::XOnlyPublicKey, bitcoin::PublicKey, Miniscript, Segwitv0, Tap};

    let filled = fill(policy);

    // Explicitly route by the formalized target parameter, avoiding substring overlap bugs
    if target == "taproot" {
        let concrete: Concrete<XOnlyPublicKey> = filled.parse().ok()?;
        let ms: Miniscript<XOnlyPublicKey, Tap> = concrete.compile().ok()?;
        Some(ms.encode().into_bytes())
    } else {
        let concrete: Concrete<PublicKey> = filled.parse().ok()?;
        let ms: Miniscript<PublicKey, Segwitv0> = concrete.compile().ok()?;
        Some(ms.encode().into_bytes())
    }
}

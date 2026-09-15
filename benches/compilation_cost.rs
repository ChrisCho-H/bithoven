//! Compilation cost of Bithoven on the standard-policy corpus of
//! `tests/corpus/standard_suite.rs` -- the same twenty-four contracts scored
//! for false positives in `tests/false_positives.rs`, over both compilation
//! targets. Reports end-to-end time through the public entry point
//! `compile_program`, peak resident memory of the process, the
//! `rust-miniscript` baseline on the equivalent policies of that corpus, and
//! the two variables of the cost model (`|Pi(P)|` and `beta`, cost being
//! `O(|Pi(P)| * 2^beta)`).
//!
//! Run: `cargo bench --bench compilation_cost`

use std::time::{Duration, Instant};

use bithoven::{compile_program, program_complexity, MAX_FREE_ATOMS};

#[path = "../tests/corpus/standard_suite.rs"]
mod suite;
use suite::*;

/// Median of a sorted-able sample.
fn percentile(values: &mut Vec<f64>, p: f64) -> f64 {
    values.sort_by(|a, b| a.partial_cmp(b).unwrap());
    let idx = ((values.len() - 1) as f64 * p).round() as usize;
    values[idx]
}

/// Milliseconds per call, averaged over enough repetitions to exceed 100ms.
fn time_ms(mut run: impl FnMut()) -> f64 {
    run(); // warm up
    let (mut iterations, mut elapsed) = (1u32, Duration::ZERO);
    while elapsed < Duration::from_millis(100) {
        iterations *= 2;
        let start = Instant::now();
        for _ in 0..iterations {
            run();
        }
        elapsed = start.elapsed();
    }
    elapsed.as_secs_f64() * 1000.0 / iterations as f64
}

/// A single path carrying exactly `beta` free atoms: each `verify`ed boolean
/// becomes one free atom, so the security pass enumerates `2^beta` assignments.
fn free_atom_source(beta: usize) -> String {
    let declarations: Vec<String> = (1..=beta)
        .map(|i| format!("b{i}: bool"))
        .chain(["s: signature".to_string()])
        .collect();
    let verify = (1..=beta)
        .map(|i| format!("b{i}"))
        .collect::<Vec<_>>()
        .join(" && ");
    let body = if beta == 0 {
        format!("return checksig(s, \"{A}\");")
    } else {
        format!("verify {verify}; return checksig(s, \"{A}\");")
    };
    format!(
        "pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n\n({})\n{{ {body} }}\n",
        declarations.join(", ")
    )
}

/// `paths` terminating paths with `beta = 0` on each, so cost varies in
/// `|Pi(P)|` alone. The discriminants are `checksig`s: a boolean discriminant
/// would be a free atom and vary `beta` in lockstep with the path count.
fn path_scaling_source(paths: usize) -> String {
    let mut declarations = String::new();
    for i in 1..=paths {
        let taken = if i == paths { paths - 1 } else { i };
        let items: Vec<String> = (1..=taken)
            .map(|j| format!("d{j}: signature"))
            .chain([format!("s{i}: signature")])
            .collect();
        declarations.push_str(&format!("({})\n", items.join(", ")));
    }
    let mut body = format!("return checksig(s{paths}, \"{A}\");");
    for i in (1..paths).rev() {
        body = format!(
            "if checksig(d{i}, \"{A}\") {{ return checksig(s{i}, \"{A}\"); }} else {{ {body} }}"
        );
    }
    format!("pragma bithoven version 0.0.1;\npragma bithoven target segwit;\n\n{declarations}{{ {body} }}\n")
}

/// Least-squares slope of `log t` against `log paths`: the measured growth
/// exponent, reported instead of asserting a shape the data need not have.
fn log_log_slope(points: &[(usize, f64)]) -> f64 {
    let n = points.len() as f64;
    let (xs, ys): (Vec<f64>, Vec<f64>) = points
        .iter()
        .map(|(x, y)| ((*x as f64).ln(), y.ln()))
        .unzip();
    let (mx, my) = (xs.iter().sum::<f64>() / n, ys.iter().sum::<f64>() / n);
    let cov: f64 = xs.iter().zip(&ys).map(|(x, y)| (x - mx) * (y - my)).sum();
    let var: f64 = xs.iter().map(|x| (x - mx).powi(2)).sum();
    cov / var
}

fn main() {
    // End-to-end cost over the standard-policy corpus, and the complexity the
    // cost is reported against. Accepted contracts run the whole pipeline;
    // contracts rejected by design stop at the pass that rejects them, so the
    // two are reported apart rather than pooled.
    let (mut accepted, mut rejected) = (vec![], vec![]);
    let (mut pi_max, mut beta_max, mut betas) = (0usize, 0usize, vec![]);
    println!("| contract | target | verdict | pi | beta | t (ms) |");
    for c in CASES {
        let src = source(c);
        let ok = compile_program(src.clone()).is_ok();
        let complexity = program_complexity(src.clone()).expect("parses");
        let beta = complexity.iter().copied().max().unwrap_or(0);
        if ok {
            pi_max = pi_max.max(complexity.len());
            beta_max = beta_max.max(beta);
            betas.extend(complexity.iter().copied());
        }
        let t = time_ms(|| {
            let _ = compile_program(src.clone());
        });
        if ok {
            accepted.push(t)
        } else {
            rejected.push(t)
        }
        println!(
            "| {:16} | {:7} | {:8} | {} | {} | {t:.3} |",
            c.name,
            c.target,
            if ok { "accept" } else { "reject" },
            complexity.len(),
            beta
        );
    }
    let beta_50 = percentile(&mut betas.iter().map(|&b| b as f64).collect(), 0.5);
    println!(
        "\nn = {} contracts ({} accepted, {} rejected)",
        CASES.len(),
        accepted.len(),
        rejected.len()
    );
    println!("t_50 = {:.3} ms (accepted)", percentile(&mut accepted, 0.5));
    println!(
        "t_95 = {:.3} ms (accepted)",
        percentile(&mut accepted, 0.95)
    );
    println!("t_50 = {:.3} ms (rejected)", percentile(&mut rejected, 0.5));

    // Peak resident memory of the process after compiling the whole corpus.
    // `ru_maxrss` is KILOBYTES on Linux and BYTES on Darwin (Apple does not
    // follow the BSD convention here), so the two are normalised to kB.
    let peak_kb = {
        let mut usage: libc::rusage = unsafe { std::mem::zeroed() };
        if unsafe { libc::getrusage(libc::RUSAGE_SELF, &mut usage) } == 0 {
            let raw = usage.ru_maxrss as u64;
            Some(if cfg!(target_os = "macos") {
                raw / 1024
            } else {
                raw
            })
        } else {
            None
        }
    };
    match peak_kb {
        Some(kb) => println!("m    = {kb} kB"),
        None => println!("m    = unavailable"),
    }

    // Baseline: rust-miniscript on ALL 18 equivalent policies, using the target-aware
    // miniscript_bytes helper from standard_suite.rs.
    let mut baseline: Vec<f64> = EQUIVALENT_POLICY
        .iter()
        .map(|(name, policy)| {
            let case = CASES
                .iter()
                .find(|c| c.name == *name)
                .unwrap_or_else(|| panic!("{name} is not in the corpus"));
            let compile = || {
                miniscript_bytes(policy, case.target).unwrap_or_else(|| {
                    panic!(
                        "Fatal methodology error: Miniscript baseline failed to compile for {}",
                        name
                    )
                })
            };
            compile();
            time_ms(|| {
                let _ = compile();
            })
        })
        .collect();
    println!(
        "t_m  = {:.3} ms (rust-miniscript median over {} equivalent policies)",
        percentile(&mut baseline, 0.5),
        EQUIVALENT_POLICY.len()
    );

    // The two variables of the cost model.
    let t_beta = time_ms(|| {
        let _ = compile_program(free_atom_source(MAX_FREE_ATOMS));
    });
    let t_0 = time_ms(|| {
        let _ = compile_program(free_atom_source(beta_50 as usize));
    });
    println!("t_beta (beta=B={MAX_FREE_ATOMS}) = {t_beta:.3} ms");
    println!("t_0 (beta_50={beta_50}) = {t_0:.3} ms");
    let mut scaling = vec![];
    for paths in [2usize, 4, 8, 16, 32, 64] {
        let source = path_scaling_source(paths);
        assert!(
            compile_program(source.clone()).is_ok(),
            "{paths} paths compile"
        );
        let t = time_ms(|| {
            let _ = compile_program(source.clone());
        });
        scaling.push((paths, t));
        println!(
            "paths={paths:3} {t:8.3} ms  ({} source bytes)",
            source.len()
        );
    }

    // Over the whole range the fixed parse-and-typecheck cost still dominates,
    // so the exponent is also reported over the upper half, where it does not.
    println!(
        "path-scaling exponent = {:.2} over 2..64, {:.2} over 16..64",
        log_log_slope(&scaling),
        log_log_slope(&scaling[3..])
    );
    println!("pi_max = {pi_max}, beta_max = {beta_max}, beta_50 = {beta_50}, B = {MAX_FREE_ATOMS}");
    assert!(beta_max <= MAX_FREE_ATOMS, "a corpus contract exceeds B");
}

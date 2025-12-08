use bithoven::compile_program;
use clap::{Parser, Subcommand};
use std::fs;
use std::io::Write;
use std::path::PathBuf;

#[derive(Parser)]
#[command(name = "bithoven")]
#[command(about = "Bithoven Compiler CLI", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Compiles a .bithoven file to Bitcoin Script
    Compile {
        /// The source file to compile
        file: PathBuf,

        /// Output format.
        /// - "file" (default): Writes output to <filename>.bithoven.json
        /// - "json": Prints JSON to stdout
        /// - "asm": Prints ASM to stdout
        /// - "hex": Prints Hex to stdout
        #[arg(short, long, default_value = "file")]
        format: String,
    },
}

fn main() {
    let cli = Cli::parse();

    match cli.command {
        Commands::Compile { file, format } => {
            // 1. Read the source file
            let source = match fs::read_to_string(&file) {
                Ok(s) => s,
                Err(e) => {
                    eprintln!("Error reading file {:?}: {}", file, e);
                    std::process::exit(1);
                }
            };

            // 2. Compile using the library
            match compile_program(source) {
                Ok(output) => {
                    // 3. Serialize output to JSON (used for both 'json' and 'file' modes)
                    let json_output = serde_json::to_string_pretty(&output)
                        .expect("Failed to serialize output to JSON");

                    // 4. Handle output based on format flag
                    match format.as_str() {
                        "hex" => println!("{}", output.hex()),
                        "asm" => println!("{}", output.asm()),
                        "json" => println!("{}", json_output),
                        _ => {
                            // Default: Write to file "filename.bithoven.json"

                            // Construct output filename
                            // If input is "contract.bithoven", output becomes "contract.bithoven.json"
                            let mut output_path = file.clone();
                            if let Some(file_name) = output_path.file_name() {
                                let new_name = format!("{}.json", file_name.to_string_lossy());
                                output_path.set_file_name(new_name);
                            }

                            // Write file
                            match fs::File::create(&output_path) {
                                Ok(mut f) => {
                                    if let Err(e) = f.write_all(json_output.as_bytes()) {
                                        eprintln!("Error writing to file {:?}: {}", output_path, e);
                                        std::process::exit(1);
                                    }
                                    println!(
                                        "Success! Compiled artifact saved to: {:?}",
                                        output_path
                                    );
                                }
                                Err(e) => {
                                    eprintln!("Error creating file {:?}: {}", output_path, e);
                                    std::process::exit(1);
                                }
                            }
                        }
                    }
                }
                Err(e) => {
                    // Print compile error to stderr
                    eprintln!("{}", e);
                    std::process::exit(1);
                }
            }
        }
    }
}

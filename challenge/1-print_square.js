#!/usr/bin/node
/*
    Print a square with the character #
    The size of the square must be the first argument 
    of the program.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

const size = parseInt(process.argv[2], 10);

if (Number.isNaN(size) || size <= 0) {
    // Nothing to print for invalid or non-positive sizes (common expected behaviour)
    process.exit(0);
}

for (let i = 0; i < size; i++) {
    console.log("#".repeat(size));
}


"use strict";
let input = "banana";
let output = "";
for (let char of input) {
    if (!output.includes(char)) {
        output += char;
    }
}
console.log(output);

// 1-9 "사칙연산 10869번"
let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);

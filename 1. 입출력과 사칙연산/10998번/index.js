// 1-7 "A*B 10998번"
let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A * B);

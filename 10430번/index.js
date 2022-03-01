// 1-12 "나머지 10430번"

let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().split(" ");

const num1 = +input[0];
const num2 = +input[1];
const num3 = +input[2];

const result1 = (num1 + num2) % num3;
const result2 = ((num1 % num3) + (num2 % num3)) % num3;
const result3 = (num1 * num2) % num3;
const result4 = ((num1 % num3) * (num2 % num3)) % num3;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

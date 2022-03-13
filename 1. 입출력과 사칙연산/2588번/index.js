// 1-13 "곱셈 2588번"

let fs = require("fs");
let input = fs
  .readFileSync("index.txt")
  .toString()
  .split("\n")
  .map((x) => +x);

const result1 = input[0] * (input[1] % 10);
const result2 = input[0] * Math.floor((input[1] % 100) / 10);
const result3 = input[0] * Math.floor(input[1] / 100);

const result = result1 + result2 * 10 + result3 * 100;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result);

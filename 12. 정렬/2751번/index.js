//12-2 "수 정렬하기 2751번"
/*
문제푸는법

*/
//오답이유:

const input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

input.shift();
const sorted = input.sort((a, b) => a - b);

console.log(sorted.join("\n"));

//12-1 "수 정렬하기 2750번"
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

for (let num of sorted) {
  console.log(num);
}

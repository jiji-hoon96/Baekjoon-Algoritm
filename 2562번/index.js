//5-2"최댓값 2562번"
//문제푸는법:
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .split("\n")
  .map((x) => +x);

const maxValue = Math.max(...input);

console.log(maxValue);
console.log(input.indexOf(maxValue) + 1);

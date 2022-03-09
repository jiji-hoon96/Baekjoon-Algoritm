//5-4 "나머지  3052번"
//문제푸는법:
//오답이유:
let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

const resultNum = [];

input.forEach((x) => {
  const num = x % 42;
  if (resultNum.indexOf(num) === -1) {
    resultNum.push(num);
  }
});

console.log(resultNum.length);

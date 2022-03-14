//7-10 "그룹 단어 체커 1316번"
//문제푸는법:
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

let testCase = input.shift();
let count = testCase;

for (let i = 0; i < testCase; i++) {
  let arr = {};
  for (let j = 0; j < input[i].length; j++) {
    if (!arr[input[i][j]]) {
      arr[input[i][j]] = true;
    } else if (input[i][j] !== input[i][j - 1]) {
      count--;
      break;
    }
  }
}

console.log(count);

//7-6 "단어의 개수 1152번"
//문제푸는법:
//오답이유: trim()을 이용해서 양끝의 공백을 제거해줘야 한다.

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ");
let count = 0;

console.log(input);
for (let i = 0; i < input.length; i++) {
  if (input[i] === "") {
    continue;
  }
  count++;
}

console.log(count);

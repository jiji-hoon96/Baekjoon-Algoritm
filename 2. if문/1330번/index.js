// 2-1 "두 수 비교하기 1330번"
let fs = require("fs");
let input = fs
  .readFileSync("index.txt")
  .toString()
  .split(" ")
  .map((x) => +x);

if (input[0] > input[1]) {
  console.log(">");
} else if (input[0] < input[1]) {
  console.log("<");
} else {
  console.log("==");
}

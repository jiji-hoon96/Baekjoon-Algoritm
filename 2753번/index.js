// 2-3 "윤년 2753번"
let fs = require("fs");
let input = fs
  .readFileSync("index.txt")
  .toString()
  .split(" ")
  .map((x) => +x);

if (input[0] % 4 === 0 && input[0] % 400 === 0) {
  console.log("1");
} else if (input[0] % 4 === 0 && input[0] % 100 !== 0) {
  console.log("1");
} else {
  console.log("0");
}

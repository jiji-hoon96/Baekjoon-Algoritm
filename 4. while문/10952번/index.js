//4-1 "A+B-5" 10952번"
//문제푸는법:
//오답이유:
const input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(" ").map((v) => +v);
  console.log(numbers[0] + numbers[1]);
}

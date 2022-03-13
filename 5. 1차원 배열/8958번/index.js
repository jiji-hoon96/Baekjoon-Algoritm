//5-6 "OX퀴즈 8958번"
//문제푸는법:
//오답이유:
let input = require("fs").readFileSync("index.txt").toString().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let count = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}

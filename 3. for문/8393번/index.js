//3-3 "합 8393번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString();

let num = +input;
let sum = 0;

for (i = 1; i <= num; i++) {
  sum = sum + i;
}

console.log(sum);

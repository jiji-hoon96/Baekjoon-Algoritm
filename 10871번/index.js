//3-10 "X보다 작은 수 10871번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

let testCase = input[0].split(" ").map((x) => +x);
let test = input[1].split(" ").map((x) => +x);

let result = [];

for (i = 0; i < testCase[0]; i++) {
  if (test[i] < testCase[1]) {
    result.push(test[i]);
  }
}

console.log(result.join(" "));

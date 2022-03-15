//9-1 "소수 찾기 1978번"
/*
문제푸는법
1. 소수는 1과 자기자신만 있는게 소수다
2. 1은 제외다
*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

let testCase = input.shift();
let count = 0;
let num = input[0].split(" ");

function primeNumber(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  count++;
}

for (let i = 0; i < testCase; i++) {
  primeNumber(num[i]);
}

console.log(count);

//9-2"소수 2581번"
/*
문제푸는법

*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

let num1 = input[0];
let num2 = input[1];
let primeArr = [];
let primeSum = 0;

function primeNumber(n) {
  if (n < 2) {
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  primeArr.push(n);
}

for (let i = num1; i <= num2; i++) {
  primeNumber(i);
}

if (!primeArr.length) {
  console.log(-1);
} else {
  for (let i = 0; i < primeArr.length; i++) {
    primeSum += primeArr[i];
  }
  console.log(primeSum);
  console.log(Math.min(...primeArr));
}

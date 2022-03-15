//8-8 "큰수 A+B 10757번"
/*
문제푸는법
*/
/*
오답이유
1. Number 타입은 배정밀도 64비트 이진 형식 IEEE 754 값(-(2^53 − 1)부터 2^53 − 1까지의 수)
2. BigInt 타입은 임의 정밀도로 정수를 나타낼 수 있는 JavaScript 숫자 원시 값
*/

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ");

let num1 = BigInt(input[0]);
let num2 = BigInt(input[1]);
let result = String(num1 + num2);

console.log(result);

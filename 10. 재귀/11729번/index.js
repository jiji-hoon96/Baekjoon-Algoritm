//10-4 "하노이 탑 이동 순서 11729번"
/*
문제푸는법

*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

const num = input[0];

function hanoi(num, from, to, other) {
  if (num === 0) {
    return;
  }
  hanoi(num - 1, from, other, to);
  console.log(`${from} ${to}`);
  hanoi(num - 1, other, to, from);
}

console.log((Math.pow(2, num) - 1).toString());
hanoi(num, 1, 3, 2);

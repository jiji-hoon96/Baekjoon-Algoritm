//10-3 "별 찍기 -10 2447번"
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

let num = input;
let str = "";

function solution(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    str += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += "*";
    } else {
      solution(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    solution(i, j);
  }
  if (i !== num - 1) {
    str += "\n";
  }
}

console.log(str);

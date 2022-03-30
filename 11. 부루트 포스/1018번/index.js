//11-4 "체스판 다시 칠하기 1018번"
/*
문제푸는법
이해를 못하겠다 문제자체를
*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

const testNum = input.shift().split(" ");
const testX = Number(testNum.shift());
const testY = Number(testNum.shift());
const result = [];

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function paintWhite(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== whiteFirstBoard[i - y][j - x]) {
        count++;
      }
    }
  }

  return count;
}

function paintBlock(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== blackFirstBoard[i - y][j - x]) {
        count++;
      }
    }
  }

  return count;
}

for (let i = 0; i + 7 < testX; i++) {
  for (let j = 0; j + 7 < testY; j++) {
    result.push(paintWhite(j, i));
    result.push(paintBlock(j, i));
  }
}

console.log(Math.min(...result));

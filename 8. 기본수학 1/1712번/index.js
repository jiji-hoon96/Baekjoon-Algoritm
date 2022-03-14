//8-1 "손익분기점 1712번"
//문제푸는법: 손익분기점을 구하는 방법을 알아야함 고정비용/(판매가격 - 가변비용) +1 => 양수여야 손익분기점을 넘음
//오답이유:

// input[0] = 고정비용 / input[1] = 가변비용 / input[2] = 노트북 가격
let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ");

let fixNum = +input[0];
let changeNum = +input[1];
let price = +input[2];

let margin = price - changeNum;

let count = Math.floor(fixNum / margin) + 1;
console.log(margin <= 0 ? -1 : count);

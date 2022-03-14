//8-4 "달팽이는 올라가고 싶다 2869번"
//문제푸는법:
/*
오답이유
1. (높이-밤에 미끄러지는 수) 까지만 올라가면 됨
2.  마지막에 반올림해줘야됨
*/

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ");

let morning = +input[0]; //2
let night = +input[1]; //1
let height = +input[2]; // 5

console.log(Math.ceil((height - night) / (morning - night)));

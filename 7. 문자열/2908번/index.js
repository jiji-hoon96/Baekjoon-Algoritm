//7-7 "상수 2908번"
//문제푸는법:
//오답이유: trim()을 이용해서 앞뒤 빈칸을 제거해줘야 오류가 안생김

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ");

let num1 = [...input[0]].reverse().join("");
let num2 = [...input[1]].reverse().join("");

console.log(num1 > num2 ? num1 : num2);

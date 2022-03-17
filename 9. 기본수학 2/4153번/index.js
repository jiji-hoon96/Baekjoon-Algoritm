//9-9 "직각삼각형 4153번"

/*
오답이유
1. 핵심은 입력값에서 주지 않앗지만 sort해서 값을 정렬하지 않으면 오답이다
2. trim()해서 앞뒤 빈공간 제거해줘야함
*/

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

function solution(input) {
  for (let i = 0; i < input.length - 1; i++) {
    input[i].sort((x, y) => x - y);
    [a, b, c] = input[i];
    a ** 2 + b ** 2 === c ** 2 ? console.log("right") : console.log("wrong");
  }
}

solution(input);

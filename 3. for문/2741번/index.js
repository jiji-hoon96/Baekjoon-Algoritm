//3-4 "N 찍기 2741번"
//문제푸는법:
//오답이유: 한번에 출력하면 안됨 개행으로 해야함

let input = require("fs").readFileSync("index.txt").toString();

let num = Number(input);

let answer = "";

for (i = 1; i <= num; i++) {
  answer += i + "\n";
}

console.log(answer);

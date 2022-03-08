//3-5 "기찍 N 2742번"
//문제푸는법:
//오답이유: 한번에 출력하면 안됨 개행으로 해야함

let input = require("fs").readFileSync("index.txt").toString();

let num = Number(input);

let answer = "";

for (i = num; i > 0; i--) {
  answer += i + "\n";
}

console.log(answer);

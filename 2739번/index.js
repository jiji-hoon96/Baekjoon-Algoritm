//3-1 "구구단 2739번"
//문제푸는법:
//오답이유: 띄어쓰기 확실히

let input = require("fs").readFileSync("./index.txt").toString();

let num = Number(input[0]);

for (i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

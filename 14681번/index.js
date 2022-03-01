// 2-4 "사분면 고르기 14681번"
/*
오답이유: 여기서부터는 fs모듈로 문제를 풀면 런타임에러가 된다 // readline을 이용
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line);
});
rl.on("close", () => {
  const x = +input[0];
  const y = +input[1];
  if (x > 0 && y > 0) {
    console.log("1");
  } else if (x > 0 && y < 0) {
    console.log("4");
  } else if (x < 0 && y > 0) {
    console.log("2");
  } else {
    console.log("3");
  }
  process.exit();
});

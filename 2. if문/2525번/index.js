// 2-6 "오븐시계 2525번"
/*
오답이유: 문제를 잘읽어보면 분의 최대시간 0 ~1000분까지
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((x) => parseInt(x)));
});
rl.on("close", () => {
  let hour = input[0][0];
  let minute = input[0][1];
  let timer = input[1][0];
  let finishHour = Math.floor((hour * 60 + minute + timer) / 60);
  let finishMin = (hour * 60 + minute + timer) % 60;
  console.log(
    `${finishHour >= 24 ? finishHour - 24 : finishHour} ${finishMin}`
  );
});

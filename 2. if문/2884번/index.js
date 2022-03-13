// 2-5 "알람시계 2884번"
/*
오답이유: 
*/

/*
문제푸는 방법: 
1. 분이 45보다 작으면 시간에서 -1을 한다 분은 60-(x-45)이 된다
2. 분이 45보다 크면  분 -45를 한다.
3. 시간이 0이고 분이 45보다 작으면 시간은 23이된다.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((x) => parseInt(x));
}).on("close", function () {
  let hour = input[0];
  let minute = input[1];
  let fastAlarm = minute - Number(45);
  if (fastAlarm < 0) {
    hour = hour - 1;
    minute = 60 + fastAlarm;
    if (hour < 0) {
      hour = 23;
    }
  } else {
    minute = fastAlarm;
  }
  console.log(`${hour} ${minute}`);
  process.exit();
});

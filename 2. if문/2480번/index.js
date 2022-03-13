// 2-7 "주사위 세개 2480번"
/*
오답이유: 계산식이 까다로움 집중해서 봐야함
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((x) => +x);
});
rl.on("close", () => {
  const x = input[0];
  const y = input[1];
  const z = input[2];
  if (x === y && y === z && x === z) {
    console.log(10000 + x * 1000);
  } else if (x === y && z !== x && z !== y) {
    console.log(1000 + x * 100);
  } else if (y === z && x !== y && x !== z) {
    console.log(1000 + y * 100);
  } else if (z === x && y !== z && y !== x) {
    console.log(1000 + z * 100);
  } else {
    if ((x > y) & (x > z)) {
      console.log(x * 100);
    } else if (y > x && y > z) {
      console.log(y * 100);
    } else {
      console.log(z * 100);
    }
  }
  process.exit();
});

//4-3 "더하기 사이클 1110번"
//문제푸는법:
//오답이유:
let input = Number(
  require("fs")
    .readFileSync("index.txt" || "/dev/stdin")
    .toString()
);

let num = input;
let sum;
let i = 0;

while (true) {
  i++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  if (input === num) {
    break;
  }
}

console.log(i);

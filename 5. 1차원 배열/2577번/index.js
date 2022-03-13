//5-3 "숫자의 개수 2577번"
//문제푸는법: 1.곱셈식한것을 string으로 만들어 나열 / 2.하나씩 숫자열에 대입해보기위해서 이중 for문사용
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

const a = input[0];
const b = input[1];
const c = input[2];

const num = String(a * b * c);

for (let i = 0; i < 10; i++) {
  let count = 0;
  for (let j = 0; j < num.length; j++) {
    if (+num[j] === i) {
      count++;
    }
  }
  console.log(count);
}

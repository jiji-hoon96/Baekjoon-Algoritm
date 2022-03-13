//6-2 "한수 1065번"
//문제푸는법:
//오답이유: 1.if문에 continue를 안줫음 2.if문뒤에는 else가 되어서 100이상의 수만 출력

let input = require("fs").readFileSync("/dev/stdin").toString();

let count = 0;

for (i = 1; i <= input; i++) {
  let newArr = String(i);
  if (i < 100) {
    count++;
    continue;
  }

  let a = Number(newArr[0]) - Number(newArr[1]);
  let b = Number(newArr[1]) - Number(newArr[2]);

  if (a === b) {
    count++;
  }
}

console.log(count);

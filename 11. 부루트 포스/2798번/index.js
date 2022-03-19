//11-1 "블랙잭 2798번"
/*
문제푸는법
브루트 포스 : 조합 가능한 모든 문자열을 하나씩 대입해 보는 방식으로 암호를 해독하는 방법
*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

let insert = input[0].split(" ").map((x) => +x);
let insertN = insert[0];
let insertM = insert[1];
let card = input[1].split(" ").map((x) => +x);
let sumArr = [];

for (let i = 0; i < insertN - 2; i++) {
  for (let j = i + 1; j < insertN - 1; j++) {
    for (let k = i + 2; k < insertN; k++) {
      let sum = card[i] + card[j] + card[k];
      if (sum <= insertM) {
        sumArr.push(sum);
      }
    }
  }
}

console.log(Math.max(...sumArr));

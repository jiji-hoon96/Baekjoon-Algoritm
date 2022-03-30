//11-3 "덩치 7568번"
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

let testCase = input.shift();
let kgcm = input.map((x) => x.split(" ").map((x) => +x));
let rank = [];

for (i = 0; i < testCase; i++) {
  let counter = 0;
  for (j = 0; j < testCase; j++) {
    if (i !== j) {
      if (kgcm[i][0] < kgcm[j][0] && kgcm[i][1] < kgcm[j][1]) {
        counter++;
      }
    }
  }
  rank.push(counter + 1);
}

console.log(rank.join(" "));

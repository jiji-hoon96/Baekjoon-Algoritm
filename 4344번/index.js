//5-7 "평균은 넘겠지 4344번"
//문제푸는법: 1.평균값구하기 2. 평균값이랑 배열의 점수 비교 3.평균값보다 큰 점수만 출력
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let sum = 0;
  let avg = 0;
  let count = 0;
  let score = input[i].split(" ").map((x) => +x);
  for (let j = 1; j <= score[0]; j++) {
    sum += score[j];
  }
  avg = sum / score[0];
  for (let j = 1; j <= score[0]; j++) {
    if (score[j] > avg) {
      count++;
    }
  }
  console.log(((count / score[0]) * 100).toFixed(3) + "%");
}

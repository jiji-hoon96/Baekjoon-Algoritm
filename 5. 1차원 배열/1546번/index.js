//5-5 "평균 1546번"
//문제푸는법:
//오답이유:
let input = require("fs").readFileSync("index.txt").toString().split("\n");

let testCase = Number(input[0]);
let subject = input[1].split(" ");
let maxSubject = Math.max(...subject);
let avgSub = [];
let sum = 0;

subject.forEach((x) => {
  const newSub = (x / maxSubject) * 100;
  avgSub.push(newSub);
});

for (i = 0; i < avgSub.length; i++) {
  sum += avgSub[i];
}

console.log(sum / testCase);

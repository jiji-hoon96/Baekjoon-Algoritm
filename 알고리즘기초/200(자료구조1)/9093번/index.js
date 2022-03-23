//200(자료구조1) "2. 9093번 단어 뒤집기"
/*
문제푸는법

*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

let testCase = input.shift();

for (let i = 0; i < testCase; i++) {
  let words = input[i].split(" ");
  let result = words.map((word) => word.split("").reverse().join("")).join(" ");
  console.log(result);
}

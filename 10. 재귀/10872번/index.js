//10-1 "팩토리얼 10872번"
/*
문제푸는법

*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString();
let sum = 1;

for (let i = +input; i > 0; i--) {
  sum *= i;
}

console.log(sum);

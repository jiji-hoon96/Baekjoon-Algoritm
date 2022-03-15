//9-3 "소인수분해 11653번"
/*
문제푸는법

*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString();
function solution(n) {
  let value = 2;
  while (n > 1) {
    if (n % value === 0) {
      console.log(value);
      n /= value;
    } else {
      value++;
    }
  }
}

solution(parseInt(input));

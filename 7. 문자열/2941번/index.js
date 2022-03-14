//7-9 "크로아티아 알파벳 2941번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let str of croatia) {
    input = input.split(str).join("Q");
  }
  return input.length;
}

console.log(solution(input));

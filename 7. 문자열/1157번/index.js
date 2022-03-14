// "7-5 단어 공부 1157번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().toUpperCase();

let result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 65]++;
}

let max = Math.max(...result);
let index = result.indexOf(max);
let isDuplicated = false;

for (let j = 0; j < result.length; j++) {
  if (result[j] === max && index != j) {
    isDuplicated = true;
    break;
  }
}

console.log(isDuplicated ? "?" : String.fromCharCode(index + 65));

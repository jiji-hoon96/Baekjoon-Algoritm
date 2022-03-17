//9-7 "직사각형에서 탈출 1085번"
/*
문제푸는법

*/
//오답이유: 배열을 이용해서 최솟값을 구하면 코드가 단순해진다

let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

const array = [x, w - x, y, h - y];
const answer = Math.min(...array);
console.log(answer);

/*
내가 풀은 방법 중복된 것이 너무많다. 배열을 만들어 최솟값을 구하면 단순

let input = require("fs").readFileSync("index.txt").toString().split(" ");

let x = +input[0]; //6
let y = +input[1]; //2
let w = +input[2]; //10
let h = +input[3]; //3

function solutionX() {
  if (x > w - x) {
    return w - x;
  } else {
    return x;
  }
}

function solutionY() {
  if (y > h - y) {
    return h - y;
  } else {
    return y;
  }
}

let result1 = solutionX();
let result2 = solutionY();
let result = result1 > result2 ? result2 : result1;
console.log(result);
*/

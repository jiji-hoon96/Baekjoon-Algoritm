//10-2 "피보나치 수 5"
/*
문제푸는법
1. 예외처리를 해야함 (input 값이 0일때는 0출력 / input 값이 1,2 일때는 1출력)
2. Fn = Fn-1 + Fn-2 (n>=2) 르 함수화 해서 표현(재귀함수 써서 결과값 return)
*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split(" ");

let num = Number(input[0]);

function solution(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  }
  return solution(num - 1) + solution(num - 2);
}

console.log(solution(num));

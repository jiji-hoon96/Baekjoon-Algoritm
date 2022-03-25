//200(자료구조1) "4. 1874번 스택 수열"
/*
문제푸는법

*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

const [n, ...nums] = input;
const numbers = nums.map((i) => Number(i));

function solution(n, numbers) {
  const stack = [];
  let answer = "";
  let count = 1;
  for (let i = 0; i < n; i += 1) {
    const number = numbers.shift();
    while (count <= number) {
      stack.push(count++);
      answer += "+";
    }
    const popItem = stack.pop();
    if (popItem !== number) {
      return "NO";
    }
    answer += "-";
  }
  return answer.split("").join("\n");
}

const result = solution(n, numbers);
console.log(result);

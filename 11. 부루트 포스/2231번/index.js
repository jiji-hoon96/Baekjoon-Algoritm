//11-2 "분해합 2231번"
/*
문제푸는법
1. 1자리일때는 최댓값이 9 / 2자리일때는 최대값이 9 * 2 / 3자리일때는 최댓값이 9*3  ....
2. 주어진 수가 N이다
3. N - N의 자리수 * 9 를 해줘서 시작값을 구한다
4. 시작값부터 for문을 해서 answer을 구한다
5. reduce를 할때 0이라는 기본값을 줘야한다(생성자가 없는 경우 0이 되기위해서) 
*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().trim();

function solution(input) {
  let answer = 0;
  const len = input.length;
  const N = +input;
  const min = input - len * 9;
  for (let i = min; i <= N; i++) {
    const str = String(i);
    const num =
      Number(str) +
      str
        .split("")
        .map((x) => +x)
        .reduce((pre, cur) => pre + cur, 0);
    if (num === N) {
      answer += i;
      break;
    }
  }
  return answer;
}

console.log(solution(input));

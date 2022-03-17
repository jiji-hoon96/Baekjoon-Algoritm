//9-6 "골드바흐의 추측 9020번"
/*
문제푸는법
1. 2-100000까지 수를 가져와서 소수 배열을 만든다.
2. 소수들중 가장 차이가 적게나는(input[i]/2와 가장 가까운 값) 값을 출력한다.
3, 가져온 값이(length= 0) 한개면 그대로 아니면 가장 마지막것을 이용한다. array.pop()을 이용
*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .split("\n")
  .map((x) => +x);

let testCase = input.shift(0);

let n = 2;
let m = 10000;

let prime = [];
prime[0] = prime[1] = 0;

for (let i = n; i <= m; i++) {
  if (prime[i] === 0) continue;
  for (let j = i; j <= m; j += i) {
    prime[j] = 0;
  }
  prime[i] = i;
}

prime = prime.filter((n) => n !== 0);

for (let i = 0; i < testCase; i++) {
  let num = input[i];
  let answer = [];
  for (let j = 0; prime[j] < num / 2 + 1; j++) {
    let index = prime.indexOf(num - prime[j]);
    if (index !== -1) {
      answer.push([prime[j], prime[index]]);
    }
  }
  if (answer.length !== 0) {
    let result = answer.pop();
    console.log(`${result[0]} ${result[1]}`);
  }
}

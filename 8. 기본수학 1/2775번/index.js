//8-6 "부녀회장이 될테야 2775번"
/*
문제푸는법
1. a층 b호에 살기위해 => (a-1)층의 1~b호까지 사람수의 sum이 필요
2. 1,3 줄은 k(층수) / 2,4 줄은 n(호수)
3. 0층부터 있음
*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

let testCase = input.shift();

for (let i = 0; i < testCase; i++) {
  let k = +input.shift(); // 1,2
  let n = +input.shift(); // 3,3
  let house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }

  console.log(house[k][n]);
}

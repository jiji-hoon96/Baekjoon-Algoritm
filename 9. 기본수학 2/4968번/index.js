//9-5 "베르트랑 공준 4948번"
/*
문제푸는법

*/
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];

for (let i = 0; i < input.length - 1; i++) {
  arr.push(+input[i]);
}

for (let i = 0; i < arr.length; i++) {
  n = arr[i];
  m = arr[i] * 2;
  let isPrimeNumber = Array(m + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  function result() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
      if (isPrimeNumber[i]) {
        let num = 2;
        while (i * num <= m) {
          isPrimeNumber[i * num] = false;
          num++;
        }
      }
    }

    const results = [];
    for (let i = n + 1; i <= m; i++) {
      if (isPrimeNumber[i]) {
        results.push(i);
      }
    }
    console.log(results.length);
  }

  result();
}

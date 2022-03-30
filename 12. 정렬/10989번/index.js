//12-3 "수 정렬하기3 10989번"
/*
문제푸는법

*/
//오답이유:

const input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

const testCase = input.shift();

const max = Math.max(...input);

const array = new Array(max + 1);
array.fill(0);

for (let i = 0; i < testCase; i++) {
  array[input[i]]++;
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}

//3-2 "A+B-3 10950번"
//문제푸는법: 차근차근 console하면서 , Number사용
//오답이유:

//해결방법 1
let input = require("fs").readFileSync("index.txt").toString().split("\n");

const testCase = +input[0];

for (let i = 1; i <= testCase; i++) {
  const arr = input[i].split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(+arr[i]);
  }
  console.log(newArr[0] + newArr[1]);
}

/* 
해결방법 2

let input = require("fs").readFileSync("index.txt").toString().split("\n");

const testCase = +input[0];

for (let i = 1; i <= testCase; i++) {
  const arr = input[i].split(" ");
  console.log(Number(arr[0]) + Number(arr[1]));
}
*/

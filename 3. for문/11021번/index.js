//3-6 "A+B - 7  11021번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

const textCase = Number(input[0]);

for (let i = 1; i <= textCase; i++) {
  const arr = input[i].split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(+arr[i]);
  }
  console.log(`Case #${i}: ${newArr[0] + newArr[1]}`);
}

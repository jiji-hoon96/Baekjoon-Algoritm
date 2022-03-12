//7-2 "숫자의 합 11720번"
//문제푸는법:
//오답이유: 

let input = require("fs").readFileSync("index.txt").toString().split('\n');

let testCase = input[0];
let testArray = input[1].split('');
let sum=0;

for(let i=0; i<testCase;i++){
    sum+=Number(testArray[i]);
}
console.log(sum)
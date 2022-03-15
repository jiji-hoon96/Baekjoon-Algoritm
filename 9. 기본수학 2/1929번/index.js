//9-4 "소수 구하기 1929번"
/*
문제푸는법

*/
//오답이유: 에라토스테네스의 체 방법으로 소수를 구하는 문제

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .split(" ")
  .map((x) => +x);

let arr = [];

for (let i = input[0]; i <= input[1]; i++) {
  arr.push(i);
}

function solution(n) {
  if (n < 2) {
    return;
  }
  let newArr = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  newArr += n;
  console.log(newArr);
}

for (i = 0; i < arr.length; i++) {
  solution(arr[i]);
}

/*
2. 푸는 방법 
var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = Number(inputs[0]);
var b = Number(inputs[1]);
var arr =[];
var answer = '';
for(var i=0; i<=b; i++){
    arr.push(true);
}
arr[0] = false;
arr[1] = false;

for(var m=2; m<=b; m++){
    if(arr[m]){
        for(var n=2; n<=b/m; n++){
            arr[m*n] = false;
        }
    }
}
for(var j=a; j<=b; j++){
    if(arr[j]) answer += j + '\n';
}
console.log(answer.trim())
*/

// "7-5 단어 공부 1157번"
/*
문제푸는법

1. result 라는 0으로 채워진 배열을 만들기(알파벳은 총 26개)
2. result 배열에서 input의 중복된 수 가 있을 때에는 ++해줌
3. result 배열의 최댓값(max) 과 최대값의 위치(index) 를 구해줌
4. index가 중복될 수 있으니 if문을 통해서 result[j] === max && index != j 을 만족하면 중복값(isDuplicated) 를 true로 변경 
5. break로 for

*/

//오답이유:

let input = require("fs").readFileSync("index.txt").toString().toUpperCase();

let result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 65]++;
}

let max = Math.max(...result);
let index = result.indexOf(max);
let isDuplicated = false;

for (let j = 0; j < result.length; j++) {
  if (result[j] === max && index != j) {
    isDuplicated = true;
    break;
  }
}

console.log(isDuplicated ? "?" : String.fromCharCode(index + 65));

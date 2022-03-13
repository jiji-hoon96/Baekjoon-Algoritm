//5-1 "최소,최대 10818번"
//오답이유:

//문제 푸는법 1 (스프레드 연산자를 이용해 Math(max,min) 사용)
let input = require("fs").readFileSync("index.txt").toString().split("\n");

let testCase = Number(input[0]);
let arr = input[1].split(" ").map((x) => +x);

const maxValue = Math.max(...arr);
const minValue = Math.min(...arr);
console.log(minValue, maxValue);

//문제 푸는법 2 sort이용(내림차순정리)
let input = require("fs").readFileSync("index.txt").toString().split("\n");

let count = Number(input[0]);
let numbers = input[1].split(" ").map((x) => Number(x));

numbers.sort((a, b) => a - b);
console.log(numbers[1]);

console.log(`${numbers[0]} ${numbers[count - 1]}`);

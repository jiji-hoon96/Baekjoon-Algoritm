//9-10 "택시 기하학 3053번"
/*
문제푸는법
1. 택시기하학은 마름모꼴 형태의 정사각형의 넓이를 구하면된다
2. 원의 넓이= pi * r **2
*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString();

let result1 = Math.PI * Math.pow(input, 2);
let result2 = Math.pow(input, 2) * 2;
console.log(result1.toFixed(6));
console.log(result2.toFixed(6));

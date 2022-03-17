//9-8 "네 번째 점 3009번"
/*
문제푸는법

*/
//오답이유: sort()를 해서 배열순서를 정리해야함

let input = require("fs").readFileSync("index.txt").toString().split("\n");

let arrX = [];
let arrY = [];

for (i = 0; i < input.length; i++) {
  arrX.push(+input[i].split(" ")[0]);
  arrY.push(+input[i].split(" ")[1]);
}

arrX = arrX.sort();
arrY = arrY.sort();

let x = arrX[1] === arrX[0] ? arrX[2] : arrX[0];
let y = arrY[1] === arrY[0] ? arrY[2] : arrY[0];

console.log(x, y);

//9-11 "터렛 1002번"
/*
문제푸는법
1. 두 원의 접점의 개수를 출력하는 문제
2. distance => 두원사이의 거리 / rsum => 두원의 반지름의 합 / rsub => 두원의 반지름의 차의 절대값
3. 접점이 무한대일 경우 (-1출력) =>  distance ===0 && rsub===0 이면 접점은 무한대(한 원안에 같은 반지름으로 존재하기 때문에)
4. 접점이 없을경우 (0출력)=> distance > rsum (두원사이가 서로 떨어져 있을 때)|| distance< rsub (원안에 작은 원이 있을 때)
5. 접점이 한개인 경우 (1출력)=> distance === rsum (두개의 원의 중심의 길이가 반지름 합과 같을 때) || distance === rsub
6. 접점이 두개인 경우 (2출력) => distance < rsum && distance > rsub 
*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

let testCase = input.shift();

function solution(x1, y1, r1, x2, y2, r2) {
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  let rsum = r1 + r2;
  let rsub = Math.abs(r1 - r2);
  if (distance === 0 && rsub === 0) {
    console.log("-1");
  } else if (distance > rsum || distance < rsub) {
    console.log("0");
  } else if (distance === rsum || distance === rsub) {
    console.log("1");
  } else {
    console.log("2");
  }
}

for (let i = 0; i < testCase; i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map((x) => +x);
  solution(x1, y1, r1, x2, y2, r2);
}

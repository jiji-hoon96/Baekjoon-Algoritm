//3-8 "별 찍기-1 2438번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString();

let star = "";

for (i = 1; i <= input; i++) {
  star += "*";
  console.log(star);
}

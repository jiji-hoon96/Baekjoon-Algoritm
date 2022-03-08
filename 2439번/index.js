//3-9 "별 찍기 -2 2739번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString();

let star = "";
let blank = "";

for (let i = 0; i < input; i++) {
  star += "*";
  for (let j = 0; j <= input - 2 - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
  blank = "";
}

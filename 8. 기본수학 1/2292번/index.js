//8-2 "벌집 2292번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString();

let range = 1;
let block = 1;

while (block < input) {
  block = block + 6 * range;
  range++;
}

console.log(range);

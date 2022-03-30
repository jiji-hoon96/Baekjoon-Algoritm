//11-5 "영화감독 숌 1436번"
/*
문제푸는법
*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().trim();

let theNumberAtTheEnd = 665;

while (input > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes("666")) {
    input--;
  }
}

console.log(theNumberAtTheEnd);

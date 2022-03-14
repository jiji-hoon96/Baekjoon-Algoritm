//8-3"분수 찾기 1193번"
//문제푸는법:
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().trim();
let number = +input;

let value = 1;

while (true) {
  number -= value; //number = number-value
  if (number <= 0) {
    number += value; //number= number+value
    break;
  }
  value++;
}

//console.log(number); 4
//console.log(value); 5

if (value % 2 === 1) {
  console.log(`${value - (number - 1)}/${1 + number - 1}`);
} else {
  console.log(`${1 + number - 1}/${value - (number - 1)}`);
}

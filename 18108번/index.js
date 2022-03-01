// 1-11 "1998년생인 내가 태국에서는 2541년생?!"

let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().trim();

console.log(`${input - 543}`);

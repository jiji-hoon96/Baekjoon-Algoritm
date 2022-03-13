// 1-10 "??! 10926번"
/*
오답이유
1. string으로 출력해야함
2. 하지만 split(" ")을 하게되면 object로 출력됨
3. typeof로 타입을 확인해보니 toString()과 trim()을 이용해서 출력하면 됨
*/

let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().trim();

console.log(`${input}??!`);

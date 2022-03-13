//7-3 "알파벳 찾기 10809번"
//문제푸는법:
//오답이유: 

let input = require("fs").readFileSync("index.txt").toString();

let result=[];
for(let i=97;i<=122;i++){
    result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '))

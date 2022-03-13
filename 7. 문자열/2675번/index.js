//7-4 "문자열 반복 2675번"
//문제푸는법:
//오답이유: 

let input = require("fs").readFileSync("index.txt").toString().split('\n');

let testCase = input[0];

for(let i=1; i<=testCase;i++){
    let result='';
    let [num,str]=input[i].split(' ')
    for(j=0;j<str.length;j++){
        for(k=0;k<num;k++){
            result=result+str[j]
        }
    }
    console.log(result)
}


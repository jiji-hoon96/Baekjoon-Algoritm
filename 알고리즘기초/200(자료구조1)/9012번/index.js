//200(자료구조1) "3. 9012번 괄호"
/*
문제푸는법
1. "("이  입력되면 +1  / ")"이 입력되면 -1
2. -1이 되면 break 하고 결과값 NO가됨
3. 마지막에 input[i] 의 개별값이 0이 아니면 결과값 NO가됨
*/
//오답이유:

let input = require("fs").readFileSync("index.txt").toString().split("\n");

const caseCount = Number(input[0]);

for (let i = 1; i <= caseCount; i += 1) {
  console.log(input[i]);
  const cases = input[i];
  const stack = [];
  let result = "YES";

  for (let j = 0; j < cases.length; j += 1) {
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = "NO";
        break;
      }
    }
  }

  if (stack.length !== 0) {
    result = "NO";
  }

  console.log(result);
}

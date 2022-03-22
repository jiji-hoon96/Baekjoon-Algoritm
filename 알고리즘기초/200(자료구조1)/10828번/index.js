//200(자료구조1) "1. 10828번 스택"
/*
문제푸는법

*/
//오답이유:
const input = require("fs").readFileSync("index.txt").toString().split("\n");
let stack = [];

counter = Number(input[0]);

for (i = 1; i <= counter; i++) {
  const comand = input[i].split(" ");
  if (comand.length == 1) {
    // pop 일때
    if (comand[0] === "pop") {
      if (stack.length == 0) {
        console.log(-1);
      } else {
        console.log(stack.pop());
      }
    }

    // top 일때
    if (comand[0] === "top") {
      if (stack.length == 0) {
        console.log(-1);
      } else {
        console.log(stack[stack.length - 1]);
      }
    }

    // empty 일때
    if (comand[0] === "empty") {
      if (stack.length == 0) {
        console.log(1);
      } else {
        console.log(0);
      }
    }

    // size 일때
    if (comand[0] === "size") {
      console.log(stack.length);
    }
  } else {
    // push 일때
    x = comand[1];
    stack.push(x);
  }
  // console.log(comand[0]);
}

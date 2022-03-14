//8-5 "ACM호텔 10250번"
//문제푸는법:
//오답이유:

let input = require("fs")
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n");

let testCase = input.shift();

function CheckIn(Height, Num) {
  let H = Height;
  let N = Num;
  let W = 0;
  while (N > 0) {
    N = N - H;
    W++;
  }
  N = N + H;
  console.log(N + "" + (W < 10 ? "0" + W : W));
}

for (let i = 0; i < testCase; i++) {
  let Case = input[i].split(" ").map((x) => parseInt(x));
  CheckIn(Case[0], Case[2]);
}

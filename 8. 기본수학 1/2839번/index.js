//8-7 "설탕 배달 2839번"
/*
문제푸는법
1. input이 5로 나누어떨어지면 몫이 count가 되고 if 문 break
2. input이 음수이면 -1출력 break
3. 1번과 2번 if문에 적합하지 않으면 input에 -3을 하고 count는 1을추가해줌
*/
//오답이유:

let input = Number(require("fs").readFileSync("index.txt").toString());
let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }
  if (input < 0) {
    console.log(-1);
    break;
  }
  count++;
  input -= 3;
}

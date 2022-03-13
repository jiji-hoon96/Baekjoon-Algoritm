//6-1 "셀프 넘버 4673번"
//문제푸는법:
//오답이유:
function self(x) {
  let number = x;
  let result = 0;
  for (i = 0; i < String(x).length; i++) {
    result = result + (number % 10);
    number = Math.floor(number / 10);
  }
  return x + result;
}

const range = 10000;

let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
  selfNumbers[self(i)] = false;
}

for (i = 0; i < range; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}

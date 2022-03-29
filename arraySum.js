let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr.reduce(function (prev, cur) {
  console.log(prev, cur);
  prev = prev + cur;
  return prev;
}, 0);

console.log(sum);

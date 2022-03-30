// let arr = [10, 20, 30, 40, 50];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
//   let sum = 0;
//   for (let j = 1; j <= arr[i]; j++) {
//     sum += j;
//   }
//   //console.log(sum);
//   res.push(sum);
// }
// console.log(res);

let arr = [10, 20, 30, 40, 50];
let res = [];
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);
  let sum = 0;
  let j = 1;
  while (j <= arr[i]) {
    sum += j;
    j++;
  }

  i++;
  //console.log(sum);
  res.push(sum);
}
console.log(res);

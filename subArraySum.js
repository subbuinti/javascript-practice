// function subArray(a) {
//   let newArray = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//       newArray.push(a.slice(i, j + 1));
//     }
//   }
//   return newArray;
// }
// let a = [1, 2, 3];
// let b = 10;
// console.log(subArray(a));

function countSubarray(arr, n, k) {
  var count = 0;

  for (i = 0; i < n; i++) {
    var sum = 0;
    for (j = i; j < n; j++) {
      if (sum + arr[j] < k) {
        //console.log(count);
        sum = arr[j] + sum;
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

var array = [5, 3, 7];
var k = 10;
var size = array.length;
var count = countSubarray(array, size, k);
console.log(count);

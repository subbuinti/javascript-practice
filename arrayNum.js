let arr = [30, 14, 15, 1];
let largest = arr[0];
let min = Math.min(...arr);
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

function numAvg(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

var middleEl = arr[Math.floor(arr.length / 2)];

console.log(middleEl);
console.log(largest);
console.log(min);
console.log(numAvg(arr));

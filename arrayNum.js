let arr = [22, 98, 3, 1, 76];
let largest = arr[0];
let min = Math.min(...arr);
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

console.log(largest);
console.log(min);

function sumPair(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == n) {
      return [i, i + 1];
    }
  }
}

let arr = [10, 20, 30, 10, 40, 30];
let n = 50;

console.log(sumPair(arr, n));

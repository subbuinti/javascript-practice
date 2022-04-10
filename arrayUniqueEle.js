function unique(arr, n) {
  // Pick all elements one by one
  for (let i = 0; i < n; i++) {
    if (arr.findIndex((item) => item == arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
    //console.log(arr.lastIndexOf(arr[i]));
  }
  return -1;
}

let arr = [1, 2, 1, 2];
let n = arr.length;

console.log(unique(arr, n));

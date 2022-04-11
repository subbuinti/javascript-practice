function subArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      newArray.push(arr.slice(i, j + 1));
    }
  }
  return newArray;
}
let arr = [1, 2, 3];
console.log(subArray(arr));

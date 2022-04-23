let arr = ["a", "b", "E", "F"];
let res = [];

for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i])
  if (arr[i] == arr[i].toUpperCase()) {
    // console.log()
    res.push(arr[i].toLowerCase());
  } else {
    // console.log(arr[i].toUpperCase())
    res.push(arr[i].toUpperCase());
  }
}

console.log(res);

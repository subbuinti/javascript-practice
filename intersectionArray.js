function commonEle(a, b) {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        res.push(a[i]);
      }
    }
  }

  let unique = [...new Set(res)];
  return unique;
}

let b = [1, 2, 6, 8, 2, 4];
let a = [1, 8, 2, 9];
// op = [2]

console.log(commonEle(a, b));

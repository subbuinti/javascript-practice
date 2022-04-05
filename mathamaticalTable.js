// let result = "\n";
// let n = 11;
// for (let i = 1; i < n; i++) {
//   for (let j = 1; j < n; j++) {
//     result += i * j + " ";
//   }
//   result += "\n";
//   //console.log(result);
// }

// console.log(result);

function mulTable(a, b) {
  res = " ";
  for (let i = 1; i <= b; i++) {
    // console.log(i + "*" + a + "=" + i * a);
    console.log(`${i} * ${a} = ${i * a}`);
  }
}

console.log(mulTable(2, 10));

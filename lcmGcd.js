function CountPairs(a, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      let lcm = (i, j) => {
        let gcd = gcd(i, j);
      };
      return (i * j) / gcd;
    }
  }
}
function gcd(i, j) {
  if (j === 0) return i;
  else return gcd(j, i % j);
}

let arr = [2, 3, 4];
let n = arr.length;
console.log(CountPairs(arr, n));

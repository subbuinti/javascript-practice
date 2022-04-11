let n = 10;

let start = [2, 7];
let ends = [4, 9];

for (let i = 0; i < n; i++) {
  let mode = "empty";
  for (let j = 0; j < start.length; j++) {
    if (start[j] <= i && ends[j] >= i) {
      mode = "busy";
    }
  }
  console.log(mode);
}

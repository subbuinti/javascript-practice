let n = 10;

let start = [2, 7];
let ends = [4, 9];

max = 0;
count = 0;

for (let i = 0; i <= n; i++) {
  let mode = "empty";
  for (let j = 0; j < start.length; j++) {
    if (start[j] <= i && ends[j] >= i) {
      mode = "busy";
    }
  }
  console.log(mode);
  if (mode == "empty") {
    count++;
  } else {
    if (max < count) {
      max = count;
    }
    count = 0;
  }
}
if (max < count) {
  max = count;
}

console.log(max, count);

let n = 10;

let starts = [];
let ends = [];

let max = 0;
let count = 0;

for (let i = 1; i <= n; i++) {
  let mode = "empty";
  for (let j = 0; j < starts.length; j++) {
    if (starts[j] <= i && ends[j] >= i) {
      mode = "busy";
    }
  }

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

// calc(1,2,'+') // +,-, %, /, *

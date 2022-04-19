const nullify = (N) => {
  let table = new Array(N + 1).fill(1e9);

  table[0] = 0;
  console.log(table);

  for (let i = 0; i <= N; i++) {
    let str = i.toString();
    console.log("str", str);
    for (let c = 0; c < str.length; c++) {
      let xo = i - parseInt(str[c]);
      console.log("xo", xo);
      table[i] = Math.min(table[i], table[xo] + 1);
      console.log("table", i, table[i]);
    }
    
  }
  return table[N];
};

let N = 27;
console.log(nullify(N));

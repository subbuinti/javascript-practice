const solve = (table, i) => {
  let mini = table[i - 1];

  if (i % 2 == 0) {
    mini = Math.min(mini, table[i / 2]);
  }
  if (i % 3 == 0) {
    mini = Math.min(mini, table[i / 3]);
  }
  table[i] = mini + 1;
};

const unify = (N) => {
  let table = new Array(N + 1).fill(0);
  table[1] = 0;

  for (let i = 2; i <= N; i++) {
    solve(table, i);
  }

  return table[N];
};

console.log(unify(10));

// function binomial(n, k) {
//   if (typeof n !== "number" || typeof k !== "number") return false;
//   var coeff = 1;
//   for (var x = n - k + 1; x <= n; x++) coeff *= x;
//   for (x = 1; x <= k; x++) coeff /= x;
//   return coeff;
// }

// console.log(binomial(6, 3));

function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
}

function binomial(n, k) {
  let binomialCoef = factorial(n) / (factorial(k) * factorial(n - k));
  return binomialCoef;
}
console.log(binomial(6, 3));

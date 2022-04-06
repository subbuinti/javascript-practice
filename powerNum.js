// function power(x, y) {
//   // Math.pow() is a function that return floating number
//   return parseInt(Math.pow(x, y));
// }
// console.log(power(2, 3));

function power(x, y) {
  // If x^0 return 1
  if (y == 0) return 1;

  // If we need to find of 0^y
  if (x == 0) return 0;

  // For all other cases
  return x * power(x, y - 1);
}
console.log(power(3, 3));

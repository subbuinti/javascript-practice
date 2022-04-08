function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    // console.log(result);
    result = result * i;
  }

  return result;
}

console.log(factorial(100));

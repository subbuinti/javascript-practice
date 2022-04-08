// JavaScript program to count
// trailing 0s in n!

// Function to return trailing
// 0s in factorial of n
function findTrailingZeros(n) {
  if (n < 0)
    //Negative Number Edge Case
    return -1;

  // Initialize result
  let count = 0;

  // Keep dividing n by powers of
  // 5 and update count
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);

  return count;
}

console.log(findTrailingZeros(10));

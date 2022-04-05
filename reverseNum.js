function reverseNumber(number) {
  let revNumber = 0;

  for (let i = number; number > 0; i++) {
    console.log(revNumber);
    revNumber = revNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}

console.log(reverseNumber(123));

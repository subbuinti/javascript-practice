function palindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  //console.log(reverseStr);
  if (str === reverseStr) {
    return "is  palindrome";
  } else {
    return "not palindrome";
  }
}

console.log(palindrome("acba"));

function checkValidity(a, b, c) {
  if (a + b < c || a + c < b || b + c < a) {
    return "not triangle";
  } else {
    return "triangle";
  }
}
console.log(checkValidity(4, 10, 5));

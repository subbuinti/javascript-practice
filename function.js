function calculator(a, b, operation) {
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
}

console.log(calculator(5, 10, "/"));

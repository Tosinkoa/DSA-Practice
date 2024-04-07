function calculator(num1, num2, operator) {
  let result;

  if (operator === "+") result = num1 + num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "/") result = num1 / num2;
  else throw new Error("Invalid operator is given");

  return result;
}

module.exports = calculator;

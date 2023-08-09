function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber;
let secondNumber;
let operator;
const display = document.querySelector(".display");

function operate(op, a, b) {
  let result;
  switch(op) {
    case add:
      result = add(a, b);
      break;
    case subtract:
      result = subtract(a, b);
      break;
    case multiply:
      result = multiply(a, b);
      break;
    case divide:
      result = divide(a, b);
      break;
    default:
      result = "Error";
  } 
  display.textContent = result;
  return result;
}

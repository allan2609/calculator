let firstNumber;
let secondNumber;
let operator;
const display = document.querySelector(".display");
const numberZero = document.querySelector("#zero");
const numberOne = document.querySelector("#one");
const numberTwo = document.querySelector("#two");
const numberThree = document.querySelector("#three");
const numberFour = document.querySelector("#four");
const numberFive = document.querySelector("#five");
const numberSix = document.querySelector("#six");
const numberSeven = document.querySelector("#seven");
const numberEight = document.querySelector("#eight");
const numberNine = document.querySelector("#nine");
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");

numberZero.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 0;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 0;
    secondNumber = 0;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 0;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberOne.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 1;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 1;
    secondNumber = 1;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 1;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberTwo.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 2;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 2;
    secondNumber = 2;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 2;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberThree.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 3;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 3;
    secondNumber = 3;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 3;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberFour.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 4;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 4;
    secondNumber = 4;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 4;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberFive.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 5;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 5;
    secondNumber = 5;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 5;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberSix.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 6;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 6;
    secondNumber = 6;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 6;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberSeven.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 7;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 7;
    secondNumber = 7;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 7;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberEight.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 8;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 8;
    secondNumber = 8;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 8;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

numberNine.addEventListener("click", () => {
  if (!operator) {
    display.textContent += 9;
    console.log("!operator");
  } else if (operator && !secondNumber) {
    display.textContent = "";
    display.textContent += 9;
    secondNumber = 9;
    console.log("operator && !secondNumber");
  } else if (operator && secondNumber) {
    display.textContent += 9;
    secondNumber = display.textContent;
    console.log("operator and secondNumber");
  } else {
    display.textContent = "Error";
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

addButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "add";
  } else if (firstNumber && display.textContent !== "") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "add";
  } else {
    display.textContent = "Error";
  }
});

subtractButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "subtract";
  } else if (firstNumber && display.textContent !== "") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "subtract";
  } else {
    display.textContent = "Error";
  }
});

multiplyButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "multiply";
  } else if (firstNumber && display.textContent !== "") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "multiply";
  } else {
    display.textContent = "Error";
  }
});

divideButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "divide";
  } else if (firstNumber && display.textContent !== "") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "divide";
  } else {
    display.textContent = "Error";
  }
});

equalsButton.addEventListener("click", () => {
  if (firstNumber && !secondNumber && secondNumber !== 0) {
    secondNumber = firstNumber;
    operate(operator, firstNumber, secondNumber);
    firstNumber = display.textContent;
  } else if (secondNumber === 0) {
    operate(operator, firstNumber, secondNumber);
    firstNumber = display.textContent;
  } else if (firstNumber && secondNumber) {
    operate(operator, firstNumber, secondNumber);
    firstNumber = display.textContent;
  } else if (!firstNumber) {
    firstNumber = 0;
    display.textContent = 0;
  } else {
    display.textContent = "Error";
  }
});

function add(a, b) {
  return +a + +b;
};

function subtract(a, b) {
  return +a - +b;
};

function multiply(a, b) {
  return +a * +b;
};

function divide(a, b) {
  if (b !== 0) {
    return +a / +b;
  } else if (b === 0) {
    return "Error: divison by 0";
  } else {
    return "Error";
  }
};

function operate(op, a, b) {
  let result;
  switch(op) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    default:
      result = "Error";
  } 
  display.textContent = result;
  return result;
};

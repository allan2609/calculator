let firstNumber = 0;
let secondNumber;
let operator = "";
let operatorClicked = false;
const display = document.querySelector(".display");
display.textContent = firstNumber;
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
  if (display.textContent === "0") {
    console.log("no assigments, display 0");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 0;
    console.log("no assignments, add 0 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 0;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 0`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 0;
    console.log("operator already in place, add 0 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberOne.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 1;
    console.log("no assigments, display 1");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 1;
    console.log("no assignments, add 1 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 1;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 1`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 1;
    console.log("operator already in place, add 1 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberTwo.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 2;
    console.log("no assigments, display 2");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 2;
    console.log("no assignments, add 2 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 2;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 2`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 2;
    console.log("operator already in place, add 2 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberThree.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 3;
    console.log("no assigments, display 3");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 3;
    console.log("no assignments, add 3 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 3;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 3`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 3;
    console.log("operator already in place, add 3 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberFour.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 4;
    console.log("no assigments, display 4");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 4;
    console.log("no assignments, add 4 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 4;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 4`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 4;
    console.log("operator already in place, add 4 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberFive.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 5;
    console.log("no assigments, display 5");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 5;
    console.log("no assignments, add 5 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 5;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 5`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 5;
    console.log("operator already in place, add 5 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberSix.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 6;
    console.log("no assigments, display 6");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 6;
    console.log("no assignments, add 6 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 6;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 6`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 6;
    console.log("operator already in place, add 6 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberSeven.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 7;
    console.log("no assigments, display 7");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 7;
    console.log("no assignments, add 7 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 7;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 7`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 7;
    console.log("operator already in place, add 7 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberEight.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 8;
    console.log("no assigments, display 8");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 8;
    console.log("no assignments, add 8 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 8;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 8`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 8;
    console.log("operator already in place, add 8 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

numberNine.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 9;
    console.log("no assigments, display 9");
  } else if (operator === "" && display.textContent !== 0) {
    display.textContent += 9;
    console.log("no assignments, add 9 to the end of number");
  } else if (operator !== "" && operatorClicked === true) {
    display.textContent = 9;
    operatorClicked = false;
    console.log(`new operator ${operator}, display 9`);
  } else if (operator !== "" && operatorClicked === false) {
    display.textContent += 9;
    console.log("operator already in place, add 9 to the end of number");
  } else {
    display.textContent = "Error";
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  firstNumber = 0;
  secondNumber = "";
  operator = "";
  operatorClicked = false;
});

addButton.addEventListener("click", () => {
  if (!firstNumber && operator !== "add") {
    firstNumber = display.textContent;
    operator = "add";
    operatorClicked = true;
    console.log(`adding case 1: no firstnumber, firstnumber becomes ${firstNumber}, assigning adding operator`);
  } else if (firstNumber && !secondNumber && operator !== "add") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "add";
    operatorClicked = true;
    console.log(`adding case 2: firstnumber exists: ${firstNumber}, perform calculation with displayed number, assign adding operator and unassign secondnumber)`);
  } else {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "add";
    operatorClicked = true;
    console.log(`adding case 3: firstnumber exists, changed to ${firstNumber}, assign adding operator and unassign secondnumber)`);
  }
});

subtractButton.addEventListener("click", () => {
  if (!firstNumber && operator !== "subtract") {
    firstNumber = display.textContent;
    operator = "subtract";
    operatorClicked = true;
    console.log(`subtraction case 1: no firstnumber, firstnumber becomes ${firstNumber}, assigning subtraction operator`);
  } else if (firstNumber && !secondNumber && operator !== "subtract") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "subtract";
    operatorClicked = true;
    console.log(`subtraction case 2: firstnumber exists: ${firstNumber}, perform calculation with displayed number, assign subtraction operator and unassign secondnumber)`);
  } else {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "subtract";
    operatorClicked = true;
    console.log(`subtraction case 3: firstnumber exists, changed to ${firstNumber}, assign subtraction operator and unassign secondnumber)`);
  }
});

multiplyButton.addEventListener("click", () => {
  if (!firstNumber && operator !== "multiply") {
    firstNumber = display.textContent;
    operator = "multiply";
    operatorClicked = true;
    console.log(`multiplication case 1: no firstnumber, firstnumber becomes ${firstNumber}, assigning multiplication operator`);
  } else if (firstNumber && !secondNumber && operator !== "multiply") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "multiply";
    operatorClicked = true;
    console.log(`multiplication case 2: firstnumber exists: ${firstNumber}, perform calculation with displayed number, assign multiplication operator and unassign secondnumber)`);
  } else {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "multiply";
    operatorClicked = true;
    console.log(`multiplication case 3: firstnumber exists, changed to ${firstNumber}, assign multiplication operator and unassign secondnumber)`);
  }
});

divideButton.addEventListener("click", () => {
  if (!firstNumber && operator !== "divide") {
    firstNumber = display.textContent;
    operator = "divide";
    operatorClicked = true;
    console.log(`division case 1: no firstnumber, firstnumber becomes ${firstNumber}, assigning division operator`);
  } else if (firstNumber && !secondNumber && operator !== "divide") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "divide";
    operatorClicked = true;
    console.log(`division case 2: firstnumber exists: ${firstNumber}, perform calculation with displayed number, assign division operator and unassign secondnumber)`);
  } else {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "divide";
    operatorClicked = true;
    console.log(`division case 3: firstnumber exists, changed to ${firstNumber}, assign division operator and unassign secondnumber)`);
  }
});

equalsButton.addEventListener("click", () => {
  if (firstNumber && operator && !secondNumber) {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    operatorClicked = true;
    console.log(`equals case 1, operator is ${operator}, firstnumber is ${firstNumber}, secondnumber is ${secondNumber}`);
  } else if (firstNumber && operator && secondNumber) {
    operate(operator, firstNumber, secondNumber);
    operatorClicked = true;
    console.log(`equals case 2, operator is ${operator}, firstnumber is ${firstNumber}, secondnumber is ${secondNumber}`);
  } else if (!firstNumber || !operator) {
    operatorClicked = false;
    console.log(`equals case 3, operator is ${operator}, firstnumber is ${firstNumber}, secondnumber is ${secondNumber}`);
  } else {
    display.textContent = "Error performing operation";
    operatorClicked = true;
    console.log(`equals case 4, operator is ${operator}, firstnumber is ${firstNumber}, secondnumber is ${secondNumber}`);
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
      result = "Error: missing operator";
  } 
  display.textContent = result;
  firstNumber = result;
  console.log(`operate: firstnumber is now ${firstNumber}`);
  return result;
};

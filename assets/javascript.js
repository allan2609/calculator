let firstNumber = 0;
let secondNumber;
let operator = "";
let lastClicked = "";
let pressedNumber;
const primaryDisplay = document.querySelector(".primary-display");
primaryDisplay.textContent = firstNumber;
const secondaryDisplay = document.querySelector(".secondary-display");
let previousCalculation = [];
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
const commaButton = document.querySelector("#comma");
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const percentageButton = document.querySelector("#percent");
const squareRootButton = document.querySelector("#squareroot");
const exponentiationButton = document.querySelector("#exponentiation")
const equalsButton = document.querySelector("#equals");
const plusMinusButton = document.querySelector("#plusminus");
const deleteButton = document.querySelector("#delete");

window.addEventListener("keydown", (e) => {
  if (e.key == "0") {
    pressedNumber = 0;
    enterNumber();
  } else if (e.key == "1") {
    pressedNumber = 1;
    enterNumber();
  } else if (e.key == "2") {
    pressedNumber = 2;
    enterNumber();
  } else if (e.key == "3") {
    pressedNumber = 3;
    enterNumber();
  } else if (e.key == "4") {
    pressedNumber = 4;
    enterNumber();
  } else if (e.key == "5") {
    pressedNumber = 5;
    enterNumber();
  } else if (e.key == "6") {
    pressedNumber = 6;
    enterNumber();
  } else if (e.key == "7") {
    pressedNumber = 7;
    enterNumber();
  } else if (e.key == "8") {
    pressedNumber = 8;
    enterNumber();
  } else if (e.key == "9") {
    pressedNumber = 9;
    enterNumber();
  } else if (e.key == "," || e.key == ".") {
    enterComma();
  } else if (e.key == "c" || e.key == "Delete") {
    clear();
  } else if (e.key == "+") {
    enterPlus();
  } else if (e.key == "-") {
    enterMinus();
  } else if (e.key == "*") {
    enterMultiplicationSign();
  } else if (e.key == "/") {
    enterDivisonSign();
  } else if (e.key == "%") {
    enterPercentageSign();
  } else if (e.key == "=" || e.key == "Enter") {
    event.preventDefault();
    enterEqualsSign();
  } else if (e.key == "Backspace") {
    backSpace();
  }
});

numberZero.addEventListener("click", () => {
  pressedNumber = 0;
  enterNumber();
});

numberOne.addEventListener("click", () => {
  pressedNumber = 1;
  enterNumber();
});

numberTwo.addEventListener("click", () => {
  pressedNumber = 2;
  enterNumber();
});

numberThree.addEventListener("click", () => {
  pressedNumber = 3;
  enterNumber();
});

numberFour.addEventListener("click", () => {
  pressedNumber = 4;
  enterNumber();
});

numberFive.addEventListener("click", () => {
  pressedNumber = 5;
  enterNumber();
});

numberSix.addEventListener("click", () => {
  pressedNumber = 6;
  enterNumber();
});

numberSeven.addEventListener("click", () => {
  pressedNumber = 7;
  enterNumber();
});

numberEight.addEventListener("click", () => {
  pressedNumber = 8;
  enterNumber();
});

numberNine.addEventListener("click", () => {
  pressedNumber = 9;
  enterNumber();
});

commaButton.addEventListener("click", () => {
  enterComma();
});

clearButton.addEventListener("click", () => {
  clear();
});

addButton.addEventListener("click", () => {
  enterPlus();
});
  
subtractButton.addEventListener("click", () => {
  enterMinus();
});

multiplyButton.addEventListener("click", () => {
  enterMultiplicationSign();
});

divideButton.addEventListener("click", () => {
  enterDivisonSign();
});

squareRootButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (primaryDisplay.textContent < 0) {
    primaryDisplay.textContent = "Error";
  } else if (primaryDisplay.textContent >= 0 && lastClicked === "number" || lastClicked === "exponent") {
    previousCalculation.splice(0, 4, " √", `${primaryDisplay.textContent}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    let result = primaryDisplay.textContent ** 0.5;
    result = parseFloat(result).toPrecision(8);
    primaryDisplay.textContent = Number(result);
    lastClicked = "exponent";
  } else if (primaryDisplay.textContent >= 0 && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 4, " √", `${primaryDisplay.textContent}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    let result = primaryDisplay.textContent ** 0.5;
    result = parseFloat(result).toPrecision(8);
    primaryDisplay.textContent = Number(result);
    secondNumber = "";
    lastClicked = "exponent";
  } else if (primaryDisplay.textContent >= 0 && lastClicked === "equals") {
    previousCalculation.splice(0, 4, " √", `${primaryDisplay.textContent}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    let result = primaryDisplay.textContent ** 0.5;
    result = parseFloat(result).toPrecision(8);
    primaryDisplay.textContent = Number(result);
    lastClicked = "exponent";
  } else {
    primaryDisplay.textContent = "Error";
  }
});

percentageButton.addEventListener("click", () => {
  enterPercentageSign();
});

exponentiationButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "exponent";
    operator = "exponentiation";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    lastClicked = "exponent";
    operator = "exponentiation";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

equalsButton.addEventListener("click", () => {
  enterEqualsSign();
});

plusMinusButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else {
    primaryDisplay.textContent -= 2 * primaryDisplay.textContent;
  }
});

deleteButton.addEventListener("click", () => {
  backSpace();
});

function enterNumber() {
  if (pressedNumber == "0" && primaryDisplay.textContent === "0") {
    lastClicked = "number";
    pressedNumber = "";
  } else if (pressedNumber != "0" && primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = pressedNumber;
    lastClicked = "number";
    pressedNumber = "";
  } else if (primaryDisplay.textContent.includes("Error")) {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    primaryDisplay.textContent = pressedNumber;
    pressedNumber = "";
    secondaryDisplay.textContent = "";
    previousCalculation = [];
    lastClicked = "number";
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += pressedNumber;
    lastClicked = "number";
    pressedNumber = "";
  } else if (primaryDisplay.textContent !== 0 && lastClicked !== "number") {
    primaryDisplay.textContent = pressedNumber;
    lastClicked = "number";
    pressedNumber = "";
  } else {
    primaryDisplay.textContent = "Error";
  }
};

function enterComma() {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = "0.";
    lastClicked = "number";
  } else if (lastClicked === "number" && primaryDisplay.textContent.includes(".")) {
    return null;
  } else if (lastClicked === "number" && !primaryDisplay.textContent.includes(".")) {
    primaryDisplay.textContent += ".";
  } else if (lastClicked !== "number") {
    primaryDisplay.textContent = "0.";
    lastClicked = "number";
  } else {
    primaryDisplay.textContent = "Error";
  }
};

function enterPlus() {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "add";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else {
    primaryDisplay.textContent = "Error";
  }
};

function enterMinus() {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "subtract";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else {
    primaryDisplay.textContent = "Error";
  }
};

function enterMultiplicationSign() {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "multiply";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else {
    primaryDisplay.textContent = "Error";
  }
};

function enterDivisonSign() {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "divide";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
  } else {
    primaryDisplay.textContent = "Error";
  }
};

function enterPercentageSign() {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    primaryDisplay.textContent /= 100;
  } else if (firstNumber && !secondNumber) {
    primaryDisplay.textContent = firstNumber * primaryDisplay.textContent / 100;
    secondNumber = primaryDisplay.textContent;
  } else {
    primaryDisplay.textContent = "Error";
  }
};

function clear() {
  primaryDisplay.textContent = 0;
  secondaryDisplay.textContent = "";
  previousCalculation = [];
  firstNumber = 0;
  secondNumber = "";
  pressedNumber = "";
  operator = "";
  lastClicked = "";
};

function backSpace() {
  if (primaryDisplay.textContent.includes("Error")) {
    clear();
  } else if (lastClicked === "number" && !secondaryDisplay.textContent.includes("√")) {
    primaryDisplay.textContent = primaryDisplay.textContent.slice(0, -1);
    if (primaryDisplay.textContent === "") {
      primaryDisplay.textContent = 0;
    }
  } else {
    return null;
  }
};

function enterEqualsSign() {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    previousCalculation = [];
    primaryDisplay.textContent = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondaryDisplay.textContent = "";
    lastClicked = "equals";
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(1, 1, `${operator}`);
    if (previousCalculation.includes("add", 1)) {
      previousCalculation.splice(1, 1, " + ");
    } else if (previousCalculation.includes("subtract", 1)) {
      previousCalculation.splice(1, 1, " - ");
    } else if (previousCalculation.includes("multiply", 1)) {
      previousCalculation.splice(1, 1, " × ");
    } else if (previousCalculation.includes("divide", 1)) {
      previousCalculation.splice(1, 1, " ÷ ");
    } else if (previousCalculation.includes("exponentiation", 1)) {
      previousCalculation.splice(1, 1, " ^ ");
    } else {
      primaryDisplay.textContent = "Error";
    }
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
  } else if (firstNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(1, 1, `${operator}`);
    if (previousCalculation.includes("add", 1)) {
      previousCalculation.splice(1, 1, " + ");
    } else if (previousCalculation.includes("subtract", 1)) {
      previousCalculation.splice(1, 1, " - ");
    } else if (previousCalculation.includes("multiply", 1)) {
      previousCalculation.splice(1, 1, " × ");
    } else if (previousCalculation.includes("divide", 1)) {
      previousCalculation.splice(1, 1, " ÷ ");
    } else if (previousCalculation.includes("exponentiation", 1)) {
      previousCalculation.splice(1, 1, " ^ ");
    } else {
      primaryDisplay.textContent = "Error";
    }
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(1, 1, `${operator}`);
    if (previousCalculation.includes("add", 1)) {
      previousCalculation.splice(1, 1, " + ");
    } else if (previousCalculation.includes("subtract", 1)) {
      previousCalculation.splice(1, 1, " - ");
    } else if (previousCalculation.includes("multiply", 1)) {
      previousCalculation.splice(1, 1, " × ");
    } else if (previousCalculation.includes("divide", 1)) {
      previousCalculation.splice(1, 1, " ÷ ");
    } else if (previousCalculation.includes("exponentiation", 1)) {
      previousCalculation.splice(1, 1, " ^ ");
    } else {
      primaryDisplay.textContent = "Error";
    }
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(1, 1, `${operator}`);
    if (previousCalculation.includes("add", 1)) {
      previousCalculation.splice(1, 1, " + ");
    } else if (previousCalculation.includes("subtract", 1)) {
      previousCalculation.splice(1, 1, " - ");
    } else if (previousCalculation.includes("multiply", 1)) {
      previousCalculation.splice(1, 1, " × ");
    } else if (previousCalculation.includes("divide", 1)) {
      previousCalculation.splice(1, 1, " ÷ ");
    } else if (previousCalculation.includes("exponentiation", 1)) {
      previousCalculation.splice(1, 1, " ^ ");
    } else {
      primaryDisplay.textContent = "Error";
    }
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    secondNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(1, 1, `${operator}`);
    if (previousCalculation.includes("add", 1)) {
      previousCalculation.splice(1, 1, " + ");
    } else if (previousCalculation.includes("subtract", 1)) {
      previousCalculation.splice(1, 1, " - ");
    } else if (previousCalculation.includes("multiply", 1)) {
      previousCalculation.splice(1, 1, " × ");
    } else if (previousCalculation.includes("divide", 1)) {
      previousCalculation.splice(1, 1, " ÷ ");
    } else if (previousCalculation.includes("exponentiation", 1)) {
      previousCalculation.splice(1, 1, " ^ ");
    } else {
      primaryDisplay.textContent = "Error";
    }
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(1, 1, `${operator}`);
    if (previousCalculation.includes("add", 1)) {
      previousCalculation.splice(1, 1, " + ");
    } else if (previousCalculation.includes("subtract", 1)) {
      previousCalculation.splice(1, 1, " - ");
    } else if (previousCalculation.includes("multiply", 1)) {
      previousCalculation.splice(1, 1, " × ");
    } else if (previousCalculation.includes("divide", 1)) {
      previousCalculation.splice(1, 1, " ÷ ");
    } else if (previousCalculation.includes("exponentiation", 1)) {
      previousCalculation.splice(1, 1, " ^ ");
    } else {
      primaryDisplay.textContent = "Error";
    }
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
  } else {
    primaryDisplay.textContent = "Error";
  }
};

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
  if (b != 0) {
    return +a / +b;
  } else if (b == 0) {
    return "Error";
  } else {
    return "Error";
  }
};

function exponentiation(a, b) {
  return (+a) ** (+b);
};

function operate(op, a, b) {
  let result;
  let numberDisplayed;
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
    case "exponentiation":
      result = exponentiation(a, b);
      break;
    default:
      result = "Error";
  } 
  if (typeof(result) === "string") {
    primaryDisplay.textContent = result;
    firstNumber = 0;
    secondNumber = "";
    operator = "";
    lastClicked = "";
  } else {
    numberDisplayed = parseFloat(result).toPrecision(8);
    numberDisplayed = Number(numberDisplayed);
    primaryDisplay.textContent = numberDisplayed;
    firstNumber = numberDisplayed;
    return numberDisplayed;
  }
};

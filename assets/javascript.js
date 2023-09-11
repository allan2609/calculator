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
});

clearButton.addEventListener("click", () => {
  clear();
});

addButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "add";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("add: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("add: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 8");
  } else {
    primaryDisplay.textContent = "Error";
  }
});
  
subtractButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "subtract";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("subtract: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("subtract: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 8");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

multiplyButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "multiply";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("multiply: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("multiply: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 8");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

divideButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "operator";
    operator = "divide";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("divide: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number" || lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("divide: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 8");
  } else {
    primaryDisplay.textContent = "Error";
  }
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
    console.log("sqrt: case 1");
  } else if (primaryDisplay.textContent >= 0 && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 4, " √", `${primaryDisplay.textContent}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    let result = primaryDisplay.textContent ** 0.5;
    result = parseFloat(result).toPrecision(8);
    primaryDisplay.textContent = Number(result);
    secondNumber = "";
    lastClicked = "exponent";
    console.log("sqrt: case 2");
  } else if (primaryDisplay.textContent >= 0 && lastClicked === "equals") {
    previousCalculation.splice(0, 4, " √", `${primaryDisplay.textContent}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    let result = primaryDisplay.textContent ** 0.5;
    result = parseFloat(result).toPrecision(8);
    primaryDisplay.textContent = Number(result);
    lastClicked = "exponent";
    console.log("sqrt: case 3");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

percentageButton.addEventListener("click", () => {
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
    console.log("exp: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    lastClicked = "exponent";
    operator = "exponentiation";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("exp: case 2");
  } else if (firstNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    lastClicked = "exponent";
    operator = "exponentiation";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("exp: case 3");
  } else if (firstNumber && lastClicked === "exponent") {
    secondNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("exp: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("exp: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("exp: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("exp: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondNumber = "";
    operator = "exponentiation";
    lastClicked = "exponent";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ^ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("exp: case 8");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

equalsButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    previousCalculation = [];
    primaryDisplay.textContent = primaryDisplay.textContent.replace(/(^[.\s]+)|([.\s]+$)/g, '');
    secondaryDisplay.textContent = "";
    lastClicked = "equals";
    console.log("equals case 1");
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
    console.log("equals case 2");
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
    console.log("equals case 3");
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
    console.log("equals case 4");
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
    console.log("equals case 5");
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
    console.log("equals case 6");
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
    console.log("equals case 7");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

plusMinusButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else {
    primaryDisplay.textContent -= 2 * primaryDisplay.textContent;
  }
});

deleteButton.addEventListener("click", () => {
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
});

function enterNumber() {
  if (pressedNumber == "0" && primaryDisplay.textContent === "0") {
    lastClicked = "number";
  } else if (pressedNumber != "0" && primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = pressedNumber;
    lastClicked = "number";
  } else if (primaryDisplay.textContent.includes("Error")) {
    primaryDisplay.textContent = pressedNumber;
    secondaryDisplay.textContent = "";
    previousCalculation = [];
    firstNumber = "";
    secondNumber = "";
    operator = "";
    lastClicked = "number";
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += pressedNumber;
    lastClicked = "number";
  } else if (primaryDisplay.textContent !== 0 && lastClicked !== "number") {
    primaryDisplay.textContent = pressedNumber;
    lastClicked = "number";
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
  operator = "";
  lastClicked = "";
}

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
    return "Error: divison by zero";
  } else {
    return "Error";
  }
};

function exponentiation(a, b) {
  return (+a) ** (+b);
}

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

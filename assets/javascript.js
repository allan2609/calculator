let firstNumber = 0;
let secondNumber;
let operator = "";
let lastClicked = "";
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
  if (primaryDisplay.textContent === "0") {
    lastClicked = "number";
    console.log("keep displaying 0");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 0;
    lastClicked = "number";
    console.log("last click was number, add 0 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 0;
    lastClicked = "number";
    console.log("last click was operator, display 0");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 0;
    lastClicked = "number";
    console.log("last click was equals, display 0");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberOne.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 1;
    lastClicked = "number";
    console.log("display was 0, now 1");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 1;
    lastClicked = "number";
    console.log("last click was number, add 1 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 1;
    lastClicked = "number";
    console.log("last click was operator, display 1");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 1;
    lastClicked = "number";
    console.log("last click was equals, display 1");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberTwo.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 2;
    lastClicked = "number";
    console.log("display was 0, now 2");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 2;
    lastClicked = "number";
    console.log("last click was number, add 2 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 2;
    lastClicked = "number";
    console.log("last click was operator, display 2");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 2;
    lastClicked = "number";
    console.log("last click was equals, display 2");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberThree.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 3;
    lastClicked = "number";
    console.log("display was 0, now 3");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 3;
    lastClicked = "number";
    console.log("last click was number, add 3 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 3;
    lastClicked = "number";
    console.log("last click was operator, display 3");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 3;
    lastClicked = "number";
    console.log("last click was equals, display 3");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberFour.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 4;
    lastClicked = "number";
    console.log("display was 0, now 4");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 4;
    lastClicked = "number";
    console.log("last click was number, add 4 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 4;
    lastClicked = "number";
    console.log("last click was operator, display 4");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 4;
    lastClicked = "number";
    console.log("last click was equals, display 4");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberFive.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 5;
    lastClicked = "number";
    console.log("display was 0, now 5");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 5;
    lastClicked = "number";
    console.log("last click was number, add 5 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 5;
    lastClicked = "number";
    console.log("last click was operator, display 5");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 5;
    lastClicked = "number";
    console.log("last click was equals, display 5");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberSix.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 6;
    lastClicked = "number";
    console.log("display was 0, now 6");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 6;
    lastClicked = "number";
    console.log("last click was number, add 6 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 6;
    lastClicked = "number";
    console.log("last click was operator, display 6");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 6;
    lastClicked = "number";
    console.log("last click was equals, display 6");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberSeven.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 7;
    lastClicked = "number";
    console.log("display was 0, now 7");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 7;
    lastClicked = "number";
    console.log("last click was number, add 7 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 7;
    lastClicked = "number";
    console.log("last click was operator, display 7");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 7;
    lastClicked = "number";
    console.log("last click was equals, display 7");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberEight.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 8;
    lastClicked = "number";
    console.log("display was 0, now 8");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 8;
    lastClicked = "number";
    console.log("last click was number, add 8 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 8;
    lastClicked = "number";
    console.log("last click was operator, display 8");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 8;
    lastClicked = "number";
    console.log("last click was equals, display 8");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

numberNine.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = 9;
    lastClicked = "number";
    console.log("display was 0, now 9");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "number") {
    primaryDisplay.textContent += 9;
    lastClicked = "number";
    console.log("last click was number, add 9 to the end of number");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "operator") {
    primaryDisplay.textContent = 9;
    lastClicked = "number";
    console.log("last click was operator, display 9");
  } else if (primaryDisplay.textContent !== 0 && lastClicked === "equals") {
    primaryDisplay.textContent = 9;
    lastClicked = "number";
    console.log("last click was equals, display 9");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

commaButton.addEventListener("click", () => {
  if (primaryDisplay.textContent === "0") {
    primaryDisplay.textContent = "0.";
    lastClicked = "number";
    console.log("number was zero, display 0.");
  } else if (lastClicked === "number" && primaryDisplay.textContent.includes(".")) {
    console.log("number already includes decimal, ignore comma entry");
  } else if (lastClicked === "number" && !primaryDisplay.textContent.includes(".")) {
    primaryDisplay.textContent += ".";
    console.log("number without decimal, add comma to the end");
  } else if (lastClicked === "operator" || lastClicked === "equals") {
    primaryDisplay.textContent = "0.";
    lastClicked = "number";
    console.log("comma clicked after operator, display 0.");
  } else {
    primaryDisplay.textContent = "Error";
  }
});

clearButton.addEventListener("click", () => {
  primaryDisplay.textContent = 0;
  secondaryDisplay.textContent = "";
  previousCalculation = [];
  firstNumber = 0;
  secondNumber = "";
  operator = "";
  lastClicked = "";
});

addButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = primaryDisplay.textContent;
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "add";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("add: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("add: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent;
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ", `${secondNumber}`);
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
    operator = "add";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " + ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("add: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
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
    firstNumber = primaryDisplay.textContent;
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "subtract";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("subtract: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("subtract: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent;
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ", `${secondNumber}`);
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
    operator = "subtract";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " - ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("subtract: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
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
    firstNumber = primaryDisplay.textContent;
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "multiply";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("multiply: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("multiply: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent;
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ", `${secondNumber}`);
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
    operator = "multiply";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " × ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("multiply: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
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
    firstNumber = primaryDisplay.textContent;
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "divide";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 2");
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("divide: case 3");
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    firstNumber = primaryDisplay.textContent;
    console.log("divide: case 4");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent;
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 5");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ", `${secondNumber}`);
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 6");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
    operator = "divide";
    lastClicked = "operator";
    previousCalculation.splice(0, 4, `${firstNumber}`, " ÷ ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    console.log("divide: case 7");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
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
  } else if (primaryDisplay.textContent >= 0) {
    previousCalculation.splice(0, 4, " √", `${primaryDisplay.textContent}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    let result = primaryDisplay.textContent ** 0.5;
    result = parseFloat(result).toPrecision(8);
    primaryDisplay.textContent = result;
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
    firstNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "operator";
    console.log(`exponentiation case 1: no firstnumber, firstnumber becomes ${firstNumber}`);
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "exponentiation";
    console.log(`exponentiation case 2: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    lastClicked = "operator";
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "exponentiation";
    firstNumber = primaryDisplay.textContent;
    console.log(`exponentiation case 3: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    primaryDisplay.textContent = operate(operator, firstNumber, secondNumber);
    operator = "exponentiation";
    lastClicked = "operator";
    firstNumber = primaryDisplay.textContent;
    console.log(`exponentiation case 4: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "operator";
    console.log(`exponentiation case 5: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "operator";
    console.log(`exponentiation case 6: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
    operator = "exponentiation";
    lastClicked = "operator";
    console.log(`exponentiation case 7: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
    secondNumber = "";
    operator = "exponentiation";
    lastClicked = "operator";
    console.log(`exponentiation case 8: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else {
    primaryDisplay.textContent = "Error";
  }
});

equalsButton.addEventListener("click", () => {
  if (primaryDisplay.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    lastClicked = "equals";
    console.log("equals case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
    console.log("equals case 2");
  } else if (firstNumber && lastClicked === "number") {
    secondNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
    console.log("equals case 3");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
    console.log("equals case 4");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
    console.log("equals case 5");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    secondNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 1, `${firstNumber}`);
    previousCalculation.splice(2, 2, `${secondNumber}`, " = ");
    secondaryDisplay.textContent = previousCalculation.join(" ");
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
    console.log("equals case 6");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = primaryDisplay.textContent;
    previousCalculation.splice(0, 1, `${firstNumber}`);
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
    primaryDisplay.textContent = 0;
    secondaryDisplay.textContent = "";
    previousCalculation = [];
    firstNumber = 0;
    secondNumber = "";
    operator = "";
    lastClicked = "";
  } else if (lastClicked === "equals" || lastClicked === "operator") {
    return null;
  } else if (lastClicked === "number") {
    primaryDisplay.textContent = primaryDisplay.textContent.slice(0, -1);
    if (primaryDisplay.textContent === "") {
      primaryDisplay.textContent = 0;
    }
  } else {
    primaryDisplay.textContent = "Error";
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
    console.log(`operate: firstnumber is now ${firstNumber}`);
    return numberDisplayed;
  }
};

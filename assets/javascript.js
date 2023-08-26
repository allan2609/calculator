let firstNumber = 0;
let secondNumber;
let operator = "";
let lastClicked = "";
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
const commaButton = document.querySelector("#comma");
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");
const plusMinusButton = document.querySelector("#plusminus");
const deleteButton = document.querySelector("#delete");

numberZero.addEventListener("click", () => {
  if (display.textContent === "0") {
    lastClicked = "number";
    console.log("keep displaying 0");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 0;
    lastClicked = "number";
    console.log("last click was number, add 0 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 0;
    lastClicked = "number";
    console.log("last click was operator, display 0");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 0;
    lastClicked = "number";
    console.log("last click was equals, display 0");
  } else {
    display.textContent = "Error";
  }
});

numberOne.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 1;
    lastClicked = "number";
    console.log("display was 0, now 1");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 1;
    lastClicked = "number";
    console.log("last click was number, add 1 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 1;
    lastClicked = "number";
    console.log("last click was operator, display 1");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 1;
    lastClicked = "number";
    console.log("last click was equals, display 1");
  } else {
    display.textContent = "Error";
  }
});

numberTwo.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 2;
    lastClicked = "number";
    console.log("display was 0, now 2");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 2;
    lastClicked = "number";
    console.log("last click was number, add 2 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 2;
    lastClicked = "number";
    console.log("last click was operator, display 2");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 2;
    lastClicked = "number";
    console.log("last click was equals, display 2");
  } else {
    display.textContent = "Error";
  }
});

numberThree.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 3;
    lastClicked = "number";
    console.log("display was 0, now 3");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 3;
    lastClicked = "number";
    console.log("last click was number, add 3 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 3;
    lastClicked = "number";
    console.log("last click was operator, display 3");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 3;
    lastClicked = "number";
    console.log("last click was equals, display 3");
  } else {
    display.textContent = "Error";
  }
});

numberFour.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 4;
    lastClicked = "number";
    console.log("display was 0, now 4");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 4;
    lastClicked = "number";
    console.log("last click was number, add 4 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 4;
    lastClicked = "number";
    console.log("last click was operator, display 4");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 4;
    lastClicked = "number";
    console.log("last click was equals, display 4");
  } else {
    display.textContent = "Error";
  }
});

numberFive.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 5;
    lastClicked = "number";
    console.log("display was 0, now 5");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 5;
    lastClicked = "number";
    console.log("last click was number, add 5 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 5;
    lastClicked = "number";
    console.log("last click was operator, display 5");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 5;
    lastClicked = "number";
    console.log("last click was equals, display 5");
  } else {
    display.textContent = "Error";
  }
});

numberSix.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 6;
    lastClicked = "number";
    console.log("display was 0, now 6");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 6;
    lastClicked = "number";
    console.log("last click was number, add 6 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 6;
    lastClicked = "number";
    console.log("last click was operator, display 6");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 6;
    lastClicked = "number";
    console.log("last click was equals, display 6");
  } else {
    display.textContent = "Error";
  }
});

numberSeven.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 7;
    lastClicked = "number";
    console.log("display was 0, now 7");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 7;
    lastClicked = "number";
    console.log("last click was number, add 7 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 7;
    lastClicked = "number";
    console.log("last click was operator, display 7");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 7;
    lastClicked = "number";
    console.log("last click was equals, display 7");
  } else {
    display.textContent = "Error";
  }
});

numberEight.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 8;
    lastClicked = "number";
    console.log("display was 0, now 8");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 8;
    lastClicked = "number";
    console.log("last click was number, add 8 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 8;
    lastClicked = "number";
    console.log("last click was operator, display 8");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 8;
    lastClicked = "number";
    console.log("last click was equals, display 8");
  } else {
    display.textContent = "Error";
  }
});

numberNine.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = 9;
    lastClicked = "number";
    console.log("display was 0, now 9");
  } else if (display.textContent !== 0 && lastClicked === "number") {
    display.textContent += 9;
    lastClicked = "number";
    console.log("last click was number, add 9 to the end of number");
  } else if (display.textContent !== 0 && lastClicked === "operator") {
    display.textContent = 9;
    lastClicked = "number";
    console.log("last click was operator, display 9");
  } else if (display.textContent !== 0 && lastClicked === "equals") {
    display.textContent = 9;
    lastClicked = "number";
    console.log("last click was equals, display 9");
  } else {
    display.textContent = "Error";
  }
});

commaButton.addEventListener("click", () => {
  if (display.textContent === "0") {
    display.textContent = "0.";
    lastClicked = "number";
    console.log("number was zero, display 0.");
  } else if (lastClicked === "number" && display.textContent.includes(".")) {
    console.log("number already includes decimal, ignore comma entry");
  } else if (lastClicked === "number" && !display.textContent.includes(".")) {
    display.textContent += ".";
    console.log("number without decimal, add comma to the end");
  } else if (lastClicked === "operator") {
    display.textContent = "0.";
    lastClicked = "number";
    console.log("comma clicked after operator, display 0.");
  } else if (lastClicked === "equals") {
    display.textContent = "0.";
    lastClicked = "number";
    console.log("comma clicked after equals, display 0.");
  } else {
    display.textContent = "Error";
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  firstNumber = 0;
  secondNumber = "";
  operator = "";
  lastClicked = "";
});

addButton.addEventListener("click", () => {
  if (display.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = display.textContent;
    operator = "add";
    lastClicked = "operator";
    console.log(`adding case 1: no firstnumber, firstnumber becomes ${firstNumber}`);
  } else if (!firstNumber && secondNumber) {
    firstNumber = display.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "add";
    console.log(`adding case 2: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    lastClicked = "operator";
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    firstNumber = display.textContent;
    console.log(`adding case 3: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "add";
    lastClicked = "operator";
    firstNumber = display.textContent;
    console.log(`adding case 4: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = display.textContent;
    operator = "add";
    lastClicked = "operator";
    console.log(`adding case 5: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = display.textContent;
    operator = "add";
    lastClicked = "operator";
    console.log(`adding case 6: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    operator = "add";
    lastClicked = "operator";
    console.log(`adding case 7: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "add";
    lastClicked = "operator";
    console.log(`adding case 8: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else {
    display.textContent = "Error";
  }
});
  
subtractButton.addEventListener("click", () => {
  if (display.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = display.textContent;
    operator = "subtract";
    lastClicked = "operator";
    console.log(`subtracting case 1: no firstnumber, firstnumber becomes ${firstNumber}`);
  } else if (!firstNumber && secondNumber) {
    firstNumber = display.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "subtract";
    console.log(`subtracting case 2: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    lastClicked = "operator";
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    firstNumber = display.textContent;
    console.log(`subtracting case 3: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "subtract";
    lastClicked = "operator";
    firstNumber = display.textContent;
    console.log(`subtracting case 4: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = display.textContent;
    operator = "subtract";
    lastClicked = "operator";
    console.log(`subtracting case 5: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = display.textContent;
    operator = "subtract";
    lastClicked = "operator";
    console.log(`subtracting case 6: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    operator = "subtract";
    lastClicked = "operator";
    console.log(`subtracting case 7: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "subtract";
    lastClicked = "operator";
    console.log(`subtracting case 8: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else {
    display.textContent = "Error";
  }
});

multiplyButton.addEventListener("click", () => {
  if (display.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = display.textContent;
    operator = "multiply";
    lastClicked = "operator";
    console.log(`multiply case 1: no firstnumber, firstnumber becomes ${firstNumber}`);
  } else if (!firstNumber && secondNumber) {
    firstNumber = display.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "multiply";
    console.log(`multiply case 2: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    lastClicked = "operator";
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    firstNumber = display.textContent;
    console.log(`multiply case 3: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "multiply";
    lastClicked = "operator";
    firstNumber = display.textContent;
    console.log(`multiply case 4: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = display.textContent;
    operator = "multiply";
    lastClicked = "operator";
    console.log(`multiply case 5: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = display.textContent;
    operator = "multiply";
    lastClicked = "operator";
    console.log(`multiply case 6: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    operator = "multiply";
    lastClicked = "operator";
    console.log(`multiply case 7: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "multiply";
    lastClicked = "operator";
    console.log(`multiply case 8: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else {
    display.textContent = "Error";
  }
});

divideButton.addEventListener("click", () => {
  if (display.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    firstNumber = display.textContent;
    operator = "divide";
    lastClicked = "operator";
    console.log(`divide case 1: no firstnumber, firstnumber becomes ${firstNumber}`);
  } else if (!firstNumber && secondNumber) {
    firstNumber = display.textContent;
    secondNumber = "";
    lastClicked = "operator";
    operator = "divide";
    console.log(`divide case 2: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    lastClicked = "operator";
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    firstNumber = display.textContent;
    console.log(`divide case 3: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    operator = "divide";
    lastClicked = "operator";
    firstNumber = display.textContent;
    console.log(`divide case 4: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    firstNumber = display.textContent;
    operator = "divide";
    lastClicked = "operator";
    console.log(`divide case 5: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = display.textContent;
    operator = "divide";
    lastClicked = "operator";
    console.log(`divide case 6: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    operator = "divide";
    lastClicked = "operator";
    console.log(`divide case 7: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    secondNumber = "";
    operator = "divide";
    lastClicked = "operator";
    console.log(`divide case 8: firstnumber is ${firstNumber}, secondnumber becomes ${secondNumber}`);
  } else {
    display.textContent = "Error";
  }
});

equalsButton.addEventListener("click", () => {
  if (display.textContent.includes("Error")) {
    return null;
  } else if (!firstNumber && !secondNumber) {
    lastClicked = "equals";
    console.log("equals case 1");
  } else if (!firstNumber && secondNumber) {
    firstNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
    console.log("equals case 2");
  } else if (firstNumber && lastClicked === "number") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
    console.log("equals case 3");
  } else if (firstNumber && !secondNumber && lastClicked === "operator") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = "";
    lastClicked = "equals";
    console.log("equals case 4");
  } else if (firstNumber && secondNumber && lastClicked === "operator") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
    console.log("equals case 5");
  } else if (firstNumber && !secondNumber && lastClicked === "equals") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
    console.log("equals case 6");
  } else if (firstNumber && secondNumber && lastClicked === "equals") {
    firstNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    lastClicked = "equals";
    console.log("equals case 7");
  } else {
    display.textContent = "Error";
  }
});

plusMinusButton.addEventListener("click", () => {
  if (display.textContent.includes("Error")) {
    return null;
  } else {
    display.textContent -= 2 * display.textContent;
  }
});

deleteButton.addEventListener("click", () => {
  if (display.textContent.includes("Error")) {
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = "";
    operator = "";
    lastClicked = "";
  } else if (lastClicked === "equals") {
    return null;
  } else if (lastClicked === "number" || lastClicked === "operator") {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") {
      display.textContent = 0;
    }
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
    default:
      result = "Error";
  } 
  if (typeof(result) === "string") {
    display.textContent = result;
    firstNumber = 0;
    secondNumber = "";
    operator = "";
    lastClicked = "";
  } else {
    numberDisplayed = parseFloat(result).toPrecision(12);
    numberDisplayed = Number(numberDisplayed);
    display.textContent = numberDisplayed;
    firstNumber = numberDisplayed;
    console.log(`operate: firstnumber is now ${firstNumber}`);
    return numberDisplayed;
  }
};

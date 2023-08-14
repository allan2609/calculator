let firstNumber;
let secondNumber;
let operator;
const display = document.querySelector(".display");
display.textContent = "0";
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
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 0;
    console.log("no assigments, display 0");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 0;
    console.log("no assignments, add 0 to end of number");
  } else if (operator && firstNumber && !secondNumber && display.textContent == "" && display.textContent == "0") {
    display.textContent = 0;
    console.log("firstnumber and op assigned, display 0");
  } else if (operator && firstNumber && !secondNumber && display.textContent != "" && display.textContent != "0") {
    display.textContent += 0;
    console.log("firstnumber and op assigned, add 0 to end of number");
  } else {
    display.textContent = "Error";
  }
});

numberOne.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 1;
    console.log("no assigments, display 1");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 1;
    console.log("no assignments, add 1 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 1;
    secondNumber = 1;
    console.log("first number assigned, assign 1 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 1;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 1 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberTwo.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 2;
    console.log("no assigments, display 2");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 2;
    console.log("no assignments, add 2 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 2;
    secondNumber = 2;
    console.log("first number assigned, assign 2 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 2;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 2 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberThree.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 3;
    console.log("no assigments, display 3");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 3;
    console.log("no assignments, add 3 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 3;
    secondNumber = 3;
    console.log("first number assigned, assign 3 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 3;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 3 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberFour.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 4;
    console.log("no assigments, display 4");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 4;
    console.log("no assignments, add 4 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 4;
    secondNumber = 4;
    console.log("first number assigned, assign 4 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 4;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 4 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberFive.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 5;
    console.log("no assigments, display 5");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 5;
    console.log("no assignments, add 5 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 5;
    secondNumber = 5;
    console.log("first number assigned, assign 5 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 5;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 5 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberSix.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 6;
    console.log("no assigments, display 6");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 6;
    console.log("no assignments, add 6 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 6;
    secondNumber = 6;
    console.log("first number assigned, assign 6 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 6;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 6 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberSeven.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 7;
    console.log("no assigments, display 7");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 7;
    console.log("no assignments, add 7 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 7;
    secondNumber = 7;
    console.log("first number assigned, assign 7 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 7;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 7 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberEight.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 8;
    console.log("no assigments, display 8");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 8;
    console.log("no assignments, add 8 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 8;
    secondNumber = 8;
    console.log("first number assigned, assign 8 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 8;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 8 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

numberNine.addEventListener("click", () => {
  if (!operator && !firstNumber && !secondNumber && display.textContent == "0") {
    display.textContent = 9;
    console.log("no assigments, display 9");
  } else if (!operator && !firstNumber && !secondNumber && display.textContent != "0") {
    display.textContent += 9;
    console.log("no assignments, add 9 to textcontent");
  } else if (firstNumber && !secondNumber) {
    display.textContent = 9;
    secondNumber = 9;
    console.log("first number assigned, assign 9 as secondnumber");
  } else if (firstNumber && secondNumber) {
    display.textContent += 9;
    secondNumber = display.textContent;
    console.log("firstnumber and secondnumber assigned, add 9 to end of secondnumber");
  } else {
    display.textContent = "Error";
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

addButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "add";
    console.log(`adding case 1: no firstnumber assigned, assigning ${firstNumber}, textcontent not empty`);
  } else if (firstNumber && display.textContent !== "" && operator !== "add") {
    secondNumber = display.textContent;
    operator = "add";
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    //secondNumber = "";
    console.log(`adding case 2: firstnumber was ${firstNumber}, assign secondnumber as ${secondNumber}, textcontent not empty, different operator`);
    alert(secondNumber);
  } else if (firstNumber && display.textContent !== "" && operator === "add") {
    secondNumber = "";
    operator = "add";
    console.log("case 3: firstnumber exists, textcontent not empty");
  } else if (!operator) {
    operator = "add";
    firstNumber = display.textContent;
    secondNumber = "";
    console.log("case 4: no operator");
  } else {
    display.textContent = "Error";
  }
});

subtractButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "subtract";
    console.log(`subtraction case 1: no firstnumber assigned, assigning ${firstNumber}, textcontent not empty`);
  } else if (firstNumber && display.textContent !== "" && operator !== "subtract") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "subtract";
    console.log(`subtraction case 2: firstnumber was ${firstNumber}, assign secondnumber as ${secondNumber}, textcontent not empty, different operator`);
  } else if (firstNumber && display.textContent !== "" && operator === "subtract") {
    secondNumber = "";
    operator = "subtract";
    console.log("case 3: firstnumber exists, textcontent not empty");
  } else if (!operator) {
    operator = "subtract";
    firstNumber = display.textContent;
    secondNumber = "";
    console.log("case 4: no operator");
  } else {
    display.textContent = "Error";
  }
});

multiplyButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "multiply";
    console.log(`multiplication case 1: no firstnumber assigned, assigning ${firstNumber}, textcontent not empty`);
  } else if (firstNumber && display.textContent !== "" && operator !== "multiply") {
    secondNumber = firstNumber;
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "multiply";
    console.log(`multiplication case 2: firstnumber was ${firstNumber}, assign secondnumber as ${secondNumber}, textcontent not empty, different operator`);
  } else if (firstNumber && display.textContent !== "" && operator === "multiply") {
    secondNumber = "";
    operator = "multiply";
    console.log("case 3: firstnumber exists, textcontent not empty");
  } else if (!operator) {
    operator = "multiply";
    firstNumber = display.textContent;
    secondNumber = "";
    console.log("case 4: no operator");
  } else {
    display.textContent = "Error";
  }
});

divideButton.addEventListener("click", () => {
  if (!firstNumber && display.textContent !== "") {
    firstNumber = display.textContent;
    operator = "divide";
    console.log(`division case 1: no firstnumber assigned, assigning ${firstNumber}, textcontent not empty`);
  } else if (firstNumber && display.textContent !== "" && operator !== "divide") {
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = "";
    operator = "divide";
    console.log(`division case 2: firstnumber was ${firstNumber}, assign secondnumber as ${secondNumber}, textcontent not empty, different operator`);
  } else if (firstNumber && display.textContent !== "" && operator === "divide") {
    secondNumber = "";
    operator = "divide";
    console.log("case 3: firstnumber exists, textcontent not empty");
  } else if (!operator) {
    operator = "divide";
    firstNumber = display.textContent;
    secondNumber = "";
    console.log("case 4: no operator");
  } else {
    display.textContent = "Error";
  }
});

equalsButton.addEventListener("click", () => {
  if (firstNumber && !secondNumber && secondNumber !== 0) {
    secondNumber = firstNumber;
    operate(operator, firstNumber, secondNumber);
  } else if (secondNumber === 0) {
    operate(operator, firstNumber, secondNumber);
  } else if (firstNumber && !secondNumber) {
    secondNumber = firstNumber;
    operate(operate, firstNumber, secondNumber);
    firstNumber = display.textContent;
  } else if (firstNumber && secondNumber) {
    operate(operator, firstNumber, secondNumber);
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
  firstNumber = result;
  console.log(`firstnumber is now ${firstNumber}`);
  return result;
};

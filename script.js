let currentInput = "0";
let previousInput = null;
let operator = null;

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "0";
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (operator === "+") {
    result = prev + current;
  } else if (operator === "-") {
    result = prev - current;
  } else if (operator === "*") {
    result = prev * current;
  } else if (operator === "/") {
    if (current === 0) {
      result = "Error";
    } else {
      result = prev / current;
    }
  }

  currentInput = result.toString();
  operator = null;
  previousInput = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").textContent = currentInput;
}

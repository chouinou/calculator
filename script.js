
// <----------- Variables ----------->
let firstOperand = ""
let secondOperand = ""
let currentOperation = null
let operationType = null

const lastOperationScreen = document.getElementById("lastOperationScreen")
const currentOperationScreen = document.getElementById("currentOperationScreen")


// Buttons
const numberButtons = document.querySelectorAll('#number')
const operatorButtons = document.querySelectorAll('#operator')

const clearButton = document.getElementById('clear')
const equalButton = document.getElementById('equal')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')

// <----------- Functions ----------->
function appendNumber(number) {
    currentOperationScreen.textContent += number ;
}

function evaluate(a, b) {
  a = Number(a)
  b = Number(b)
  switch (operationType) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
}}

function clear() {
    currentOperationScreen.textContent = '' ;
    lastOperationScreen.textContent = '' ;
    operationType = null ;
    firstOperand = '' ;
    secondOperand = '' ;
}

function setOperation(type) {
    // // Doing the math
    if (operationType !== null) evaluate() ;
    // data saving
    firstOperand = currentOperationScreen.textContent ;
    currentOperationScreen.textContent = null ;
    operationType = type ;
    lastOperationScreen.textContent = `${firstOperand} ${operationType}` ;
}

function add(a,b) {
    return a + b ;
}

function substract(a,b) {
    return a - b ;
}

function multiply(a,b) {
    return a * b ;
}

function divide(a,b) {
    return a / b ;
}

// <----------- Events listeners ----------->
clearButton.addEventListener('click', clear)

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent)))

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)))




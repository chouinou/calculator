
// <----------- Variables ----------->
let firstOperand = ""
let secondOperand = ""
let operationType = null

const screenDisplay = document.getElementById('currentOperationScreen')
const clearButton = document.getElementById('clear')
const equalButton = document.getElementById('equal')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')



// <----------- Functions ----------->
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

// function evaluate(a, b) {
//   a = Number(a)
//   b = Number(b)
//   switch (operationType) {
//     case '+':
//       return add(a, b)
//     case '−':
//       return substract(a, b)
//     case '×':
//       return multiply(a, b)
//     case '÷':
//       if (b === 0) return null
//       else return divide(a, b)
//     default:
//       return null
// }}

function clearScreen() {
}

function chooseOperation(type) {
    operationType = type
    console.log(operationType) ;
}

// <----------- Events listeners ----------->
clearButton.addEventListener('click', clearScreen)
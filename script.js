// // -- Still to-do :
// - round long numbers
// - more test on keyboardinput

// <----------- Variables ----------->
let firstOperand = ""
let secondOperand = ""
let operationType = null

const lastOperationScreen = document.getElementById("lastOperationScreen")
const currentOperationScreen = document.getElementById("currentOperationScreen")

// Buttons
const numberButtons = document.querySelectorAll('#number')
const operatorButtons = document.querySelectorAll('#operator')

const clearButton = document.getElementById('clear')
const backspaceButton = document.getElementById('backspace')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')
const equalButton = document.getElementById('equal')
const dotButton = document.getElementById('dot')

// <----------- Functions ----------->
function clear() {
    currentOperationScreen.textContent = '' ;
    lastOperationScreen.textContent = '' ;
    operationType = null ;
    firstOperand = '' ;
    secondOperand = '' ;
}

function backspace() {
    currentOperationScreen.textContent = 
    currentOperationScreen.textContent.toString().slice(0,-1) ; 
}

function appendNumber(number) {
    currentOperationScreen.textContent += number ;
}

function appendDot() {
    if (currentOperationScreen.textContent === '') {
        currentOperationScreen.textContent = '0'}
    if (currentOperationScreen.textContent.includes('.')) {
        return}
    currentOperationScreen.textContent += '.'
}

function setOperation(type) {
    firstOperand = currentOperationScreen.textContent ;
    if (operationType !== null) {
        check()
    }
    // data saving
    operationType = type ;
    currentOperationScreen.textContent = null ;
    lastOperationScreen.textContent = `${firstOperand} ${operationType}` ;
}

function check() {
    secondOperand = currentOperationScreen.textContent ;
    if (operationType == '÷' && secondOperand == 0 ) {
        clear() ;
        alert("You can't divide by 0.") ;
    } else {
        calculate(firstOperand,secondOperand) ;
    }
}

function calculate(a,b) {
    a = Number(a)
    b = Number(b)

  switch (operationType) {
    case "+":
        currentOperationScreen.textContent = add(a,b) ;
        break ;
    case "−":
       currentOperationScreen.textContent = substract(a,b) ;
        break ;
    case "×":
       currentOperationScreen.textContent =  multiply(a,b) ;
        break ;
    case "÷":
        currentOperationScreen.textContent =  divide(a,b) ;
    default:
        return null
  }
    lastOperationScreen.textContent = '' ;
    operationType = null ;
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

function roundResult(number) {
  return Math.round(number * 1000) / 1000 }

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return '×'
  if (keyboardOperator === '-') return '−'
  if (keyboardOperator === '+') return '+'
}

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key) ;
    if (e.key === ".") appendDot() ;
    if (e.key === 'Backspace') backspace() ;
    if (e.key === '=' || e.key === 'Enter') check() ;
    if (e.key === 'c') clear() ;
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') 
        setOperation(convertOperator(e.key))
}

// <----------- Events listeners ----------->
clearButton.addEventListener('click', clear)
backspaceButton.addEventListener('click', backspace)
dotButton.addEventListener('click', appendDot)

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent)))

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)))

equalButton.addEventListener('click', check)

window.addEventListener('keydown', keyboardInput)
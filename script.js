// // -- Still to-do :
// - check how the operand are set on each function. Maybe had a currentoperation variable ?
// - calculate if operation is pressed while an operator is set
// - arrow function (slice ?)
// - dot button
// - round long numbers


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
const equalButton = document.getElementById('equal')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')

// <----------- Functions ----------->
function appendNumber(number) {
    currentOperationScreen.textContent += number ;
}

function calculate(a,b) {
    a = Number(a)
    b = Number(b)

    console.log(firstOperand) ;
    console.log(operationType) ;
    console.log(secondOperand) ;

  switch (operationType) {
    case "+":
        lastOperationScreen.textContent = add(a,b) ;
        break ;
    case "−":
        lastOperationScreen.textContent = substract(a,b) ;
        break ;
    case "×":
        lastOperationScreen.textContent =  multiply(a,b) ;
        break ;
    case "÷":
        if (secondOperand == 0) {
            return  null ;
        }
        lastOperationScreen.textContent =  divide(a,b) ;;
        break ;
    default:
        return null
  }
  currentOperationScreen.textContent = '' ;
}

function clear() {
    currentOperationScreen.textContent = '' ;
    lastOperationScreen.textContent = '' ;
    operationType = null ;
    firstOperand = '' ;
    secondOperand = '' ;
}

function setOperation(type) {
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


equalButton.addEventListener('click', () => {
    secondOperand = currentOperationScreen.textContent ;
    calculate(firstOperand, secondOperand)})


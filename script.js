// ToDo:
//  - round to long numbers
//  - 




// HTML Elements
const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

// Variables
let firstNumber = 0;
let secondNumber = 0;
let operator = 0;
let result = 0;
let numberSwitch = false;


// Initial Textcontent
display.textContent = result;

// Operational Functions
function add (a, b){
    return a + b;
};

function subtract (a, b){
    return a - b;
};

function multiply (a, b){
    return a * b;
};

function divide (a, b){
    if (a == 0 | b == 0){
        return "ERROR";
    }
    else {
        return a / b;
    }
};


function processInput(button){
    if (button === "c") {
        firstNumber = 0;
        secondNumber = 0;
        operator = 0;
        numberSwitch = false;
        display.textContent = 0;
        return;
    }
    if (button === "backsp" && numberSwitch == false) {
        firstNumber = 0;
        display.textContent = firstNumber;
        return;
    }
    if (button === "backsp" && numberSwitch == true) {
        secondNumber = 0;
        display.textContent = firstNumber + operator + secondNumber;
        return;
    }
    if (button === "=") {
        operate(operator, Number(firstNumber), Number(secondNumber));
        return;
    }

    if (button === "." && numberSwitch == false) {
        firstNumber += String(button);
        display.textContent = firstNumber;
        return;
    }

    if (button === "." && numberSwitch == true) {
        secondNumber += String(button);
        display.textContent = firstNumber + operator + secondNumber;
        return;
    }


    if (isNaN(button)) {
        operator = button
        numberSwitch = true;
        display.textContent = firstNumber + operator;
    }
    else {
        if (numberSwitch === false) {
            if (firstNumber == "0") {
                firstNumber = String(button);
                display.textContent = firstNumber;
            }
            else {
                firstNumber += String(button);
                display.textContent = firstNumber;
            }
        };
        if (numberSwitch === true) {
            if (secondNumber == "0") {
                secondNumber = String(button);
                display.textContent = firstNumber + operator + secondNumber;
            }
            else {
                secondNumber += String(button);
                display.textContent = firstNumber + operator + secondNumber;
            }
        }

    }
    // if ( String(firstNumber).length > 15 || String(secondNumber).length > 15) {

    // }

};

// Eventlistener

buttons.forEach(button => button.addEventListener("click", () => {
    processInput(button.id);
}));



function operate (operator, num1, num2) {
    let operateResult = 0;
    if (operator == 0 || secondNumber == 0) {
        return operateResult = firstNumber;
    }
    if (operator == "+") {
         operateResult = add(num1, num2);
    }
    if (operator == "-") {
        operateResult = subtract(num1, num2);
    }
    if (operator == "x") {
        operateResult = multiply(num1, num2);
    }
    if (operator == "/") {
        operateResult = divide(num1, num2);
    }

    firstNumber = operateResult;
    secondNumber = 0;
    operator = 0;
    numberSwitch = false;
    display.textContent = operateResult;
};


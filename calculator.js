// Set empty values
let value1 = "";
let value2 = "";
let operator = "";
let inputValues = [0, 0];

// Functions for calculations(add,subtract,multiply and divide), all setup to operate using an array
const addition = function (value1, value2) {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    addTotal = num1 + num2;
    return addTotal;
  };

const subtract = function (value1, value2) {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    subTotal = num1 - num2;
    return subTotal;
};

const multiply = function(array) {
    return array.reduce((total, num) => total * num);
};

const divide = function(array) {
    return array.reduce((total, num) => total / num);
};

// Function to check values, activate calculation function with number values in an array
const calculate = function() {
    if (operator === "+")
        return addition(value1, value2);
    else if (operator === "-")
        return subtract(inputValues);
    else if (operator === "x")
        return multiply(inputValues);
    else if (operator === "/")
        return divide(inputValues);
    else return alert("INCORRECT FORMATING!");
};

// Fill display with value
const buttonPressNum = document.querySelector("#numPad");
const displayUpdate = document.querySelector("#display");

buttonPressNum.addEventListener("click", (event) => {
    displayUpdate.textContent = displayUpdate.textContent + event.target.textContent
});

// Operation selection + first value storage + display clear
const buttonPressOp = document.querySelector("#cmdPad2");

buttonPressOp.addEventListener("click", (event) => {
    if (operator != "") 
        return value2 = displayUpdate.textContent,
               value1 = calculate(),
               displayUpdate.textContent = "",
               operator = event.target.textContent;
    else return value1 = displayUpdate.textContent,
                operator = event.target.textContent,
                displayUpdate.textContent = "";      
});

// Stores 2nd value & activates calucate function
const buttonPressEval = document.querySelector("#evaluate");

buttonPressEval.addEventListener("click", () => {
    value2 = displayUpdate.textContent
    inputValues = [value1, value2]
    displayUpdate.textContent = calculate()
    value1 = calculate()
    value2 = ""
    operator = ""
});

// Clears & resets all values
const buttonPressClr = document.querySelector("#cmdPad1");

buttonPressClr.addEventListener("click", () => {
    displayUpdate.textContent = ""
    value1 = ""
    value2 = ""
    operator = ""
    inputValues = [0, 0]
});
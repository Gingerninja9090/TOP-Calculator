// Set empty values
let value1 = "";
let operator = "";
let value2 = "";

// Functions for calculations(add,subtract,multiply and divide), all setup to operate using an array
const addition = function (array) {
   return array.reduce((total, num) => total + num);
  };

const subtract = function (array) {
    return array.reduce((total, num) => total - num);
};

const multiply = function(array) {
    return array.reduce((total, num) => total * num);
};

const divide = function(array) {
    return array.reduce((total, num) => total / num);
};

// Function to check values, activate calculation function with number values in an array
const calculate = function() {
    const inputValues = [value1, value2];
    if (operator === "sum")
        return addition(inputValues);
    else if (operator === "subtract")
        return subtract(inputValues);
    else if (operator === "multiply")
        return multiply(inputValues);
    else if (operator === "divide")
        return divide(inputValues);
    else return alert("WRONG DUMB BOI!!")
};


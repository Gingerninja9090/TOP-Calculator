// Inital/Core parameters

let input1 = "";
let input2 = "";
let operator = "";
let output = "";

// ---- END ---- //
// Calculation Functions (Addition, Subtraction, Multiplication & Division)

const addition = function(input1, input2) {
    addEval = parseFloat(input1) + parseFloat(input2)
    return Math.round(addEval * 100) / 100
};

const subtraction = function(input1, input2) {
    subEval = parseFloat(input1) - parseFloat(input2)
    return Math.round(subEval * 100) / 100
};

const multiplication = function(input1, input2) {
    multiEval = parseFloat(input1) * parseFloat(input2)
    return Math.round(multiEval * 100) / 100
};

const division = function(input1, input2) {
    divEval = parseFloat(input1) / parseFloat(input2)
    return Math.round(divEval * 100) / 100
};

// ---- END ---- //
// Calculation Event Handler Function

const calculate = function() {
    if (operator === "+") 
        return addition(input1, input2);
    else if (operator === "-") 
        return subtraction(input1, input2);
    else if (operator === "x") 
        return multiplication(input1, input2);
    else if (operator === "/") 
        return division(input1, input2);
    else return alert("Incorrect Formating!");
};

// ---- END ---- //
// Updates Display Content

const buttonPressNum = document.querySelector("#numPad");
const displayUpdate = document.querySelector("#display");

buttonPressNum.addEventListener("click", (event) => {
    displayUpdate.textContent = displayUpdate.textContent + event.target.textContent
});

// ---- END ---- //
// Operator Input Activation & input storage

const buttonPressOp = document.querySelector("#cmdPad2");

buttonPressOp.addEventListener("click", (event) => {
    if (operator != "") 
        return input2 = displayUpdate.textContent, startCalculate(), displayUpdate.textContent = output, operator = event.target.textContent;
    else return input1 = displayUpdate.textContent, operator = event.target.textContent, displayUpdate.textContent = "";
});

// ---- END ---- //
// Evaluate Function & Evaluate Activation

const startCalculate = function() {
    if (input1 === "" || operator === "" || input2 === "")
        return displayUpdate.textContent = "Formating Error!"
    else if (operator === "/" && input2 == 0)
        return displayUpdate.textContent = "Error 404, Cant Divide By Zero!"
    else return output = calculate(), displayUpdate.textContent = output, input1 = "", input2 = "", operator = "";
};

const buttonPressEval = document.querySelector("#evaluate");

buttonPressEval.addEventListener("click", () => {
    input2 = displayUpdate.textContent;
    startCalculate();
});

// ---- END ---- //
// Clear/Reset Function

const buttonPressClr = document.querySelector("#cmdPad1");

buttonPressClr.addEventListener("click", () => {
    displayUpdate.textContent = ""
    input1 = ""
    input2 = ""
    operator = ""
    output = ""
    help = ""
})

// ---- END ---- //
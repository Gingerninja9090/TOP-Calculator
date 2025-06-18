// Inital/Core parameters

let input1 = "";
let input2 = "";
let operator = "";
let output = "";
let setCheck = false;

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
const buttonPressDec = document.querySelector("#decimal");

buttonPressDec.addEventListener("click", () => {
    buttonPressDec.disabled = true;
});

buttonPressNum.addEventListener("click", (event) => {
    if (setCheck) 
        return displayUpdate.textContent = "" + event.target.textContent, setCheck = false;
    else return displayUpdate.textContent = displayUpdate.textContent + event.target.textContent
});

// ---- END ---- //
// Operator Input Activation & input storage

const buttonPressOp = document.querySelector("#cmdPad2");

buttonPressOp.addEventListener("click", (event) => {
    if (operator != "") 
        return input2 = displayUpdate.textContent, startCalculate(), displayUpdate.textContent = output, operator = event.target.textContent, buttonPressDec.disabled = false;
    else return input1 = displayUpdate.textContent, operator = event.target.textContent, displayUpdate.textContent = "", buttonPressDec.disabled = false;
});

// ---- END ---- //
// Evaluate Function & Evaluate Activation

const startCalculate = function() {
    if (input1 === "" || operator === "" || input2 === "")
        return displayUpdate.textContent = "Formating Error!"
    else if (operator === "/" && input2 == 0)
        return displayUpdate.textContent = "Error 404, Cant Divide By Zero!"
    else return output = calculate(), displayUpdate.textContent = output, input1 = output, input2 = "", operator = "", setCheck = true, buttonPressDec.disabled = false;
};

const buttonPressEval = document.querySelector("#evaluate");

buttonPressEval.addEventListener("click", () => {
    input2 = displayUpdate.textContent;
    startCalculate();
});

// ---- END ---- //
// Clear/Reset Function

const buttonPressClr = document.querySelector("#clr");

buttonPressClr.addEventListener("click", () => {
    displayUpdate.textContent = ""
    input1 = ""
    input2 = ""
    operator = ""
    output = ""
    setCheck = false;
    buttonPressDec.disabled = false;
})

// ---- END ---- //
// Delete Function

const buttonPressDel = document.querySelector("#delete");

buttonPressDel.addEventListener("click", () => {
    predict = displayUpdate.textContent.slice(0, -1);

    if (!predict.includes('.')) 
        return displayUpdate.textContent = displayUpdate.textContent.slice(0,-1), buttonPressDec.disabled = false;
    else return displayUpdate.textContent = displayUpdate.textContent.slice(0,-1);
});

// ---- END ---- //
// Keyboard Support 

const allowedKeysNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const allowedKeysOp = ["+", "-", "*", "/"];
const allowedKeysEval = ["=", "Enter"];
const allowedKeyDel = ["Backspace"];

document.addEventListener("keydown", (event) => {
    if (allowedKeysNum.includes(event.key)) 
        return console.log("Number Key Pressed: " + event.key);
    else if (allowedKeysOp.includes(event.key))
        return console.log("Operator Key Pressed: " + event.key);
    else if (allowedKeysEval.includes(event.key))
        return console.log("Evaluation Key Pressed: " + event.key);
    else if (allowedKeyDel.includes(event.key))
        return console.log("Delete Key Pressed: " + event.key);
});

// ---- END ---- //
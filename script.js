DEFAULT_DISPLAY = 0;

let currentDisplay = DEFAULT_DISPLAY;

function setCalcDisplay(newDisplay) {
	currentDisplay = newDisplay;
	console.log(currentDisplay);
}

// -- DOM SELECTORS
//DISPLAY
const calcDisplay = document.querySelector("#calc-display");
//FUNCTIONS
const moduloBtn = document.querySelector("#modulo-btn");
const divideBtn = document.querySelector("#divide-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");

//NUMBERS
const nineBtn = document.querySelector("#nine-btn");
const eightBtn = document.querySelector("#eight-btn");
const sevenBtn = document.querySelector("#seven-btn");
const sixBtn = document.querySelector("#six-btn");
const fiveBtn = document.querySelector("#five-btn");
const fourBtn = document.querySelector("#four-btn");
const threeBtn = document.querySelector("#three-btn");
const twoBtn = document.querySelector("#two-btn");
const oneBtn = document.querySelector("#one-btn");
const zeroBtn = document.querySelector("#zero-btn");

document.querySelectorAll(".digit-btn").forEach((item) => {
	item.addEventListener("click", (event) => {
		updateOperands(item.textContent);
	});
});

// clearBtn.onclick = () => clearDisplay();
// plusMinusBtn.onclick = () => posNegOperator();
// moduloBtn.onclick = () => addModuloOperator();
// divideBtn.onclick = () => addDivideOperator();
// multiplyBtn.onclick = () => addMultiplyOperator();
// minusBtn.onclick = () => addMinusOperator();
// plusBtn.onclick = () => addPlusOperator();
// decimalBtn.onclick = () => addDecimal();
// equalBtn.onclick = () => evaluate();
// //NUMBERS
// nineBtn.onclick = (e) => enter9(e.target.value);
// eightBtn.onclick = (e) => enter8(e.target.value);
// sevenBtn.onclick = (e) => enter7(e.target.value);
// sixBtn.onclick = (e) => enter6(e.target.value);
// fiveBtn.onclick = (e) => enter5(e.target.value);
// fourBtn.onclick = (e) => enter4(e.target.value);
// threeBtn.onclick = (e) => enter3(e.target.value);
// twoBtn.onclick = (e) => enter2(e.target.value);
// oneBtn.onclick = (e) => enter1(e.target.value);

//Math functions
function add(a, b) {
	return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
	return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
	return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
	if (b != "0") {
		return parseFloat(a) / parseFloat(b);
	} else {
		alert("Division by zero ain't gonna fly!");
		clearBtn.click();
	}
}

//applying math operators
function operate(operator, firstArg, secondArg) {
	switch (operator) {
		case "+":
			return add(firstArg, secondArg);
			break;
		case "-":
			return subtract(firstArg, secondArg);
			break;
		case "x":
			return multiply(firstArg, secondArg);
			break;
		case "*":
			return multiply(firstArg, secondArg);
			break;
		case "/":
			return divide(firstArg, secondArg);
			break;
	}
}

const firstOperandSpan = document.getElementById("firstOperand");
const operatorSpan = document.getElementById("operator");
const secondOperandSpan = document.getElementById("secondOperand");
const answerSpan = document.getElementById("answer");

function updateOperands(value) {
	if (operatorSpan.textContent == "") {
		firstOperandSpan.textContent += value;
	} else {
		secondOperandSpan.textContent += value;
	}
}

document.querySelectorAll(".operator-btn").forEach((item) => {
	item.addEventListener("click", () => {
		updateOperator(item.textContent);
	});
});

function updateOperator(value) {
	if (
		firstOperandSpan.textContent != "" &&
		secondOperandSpan.textContent == ""
	) {
		operatorSpan.textContent = value;
	} else if (
		firstOperandSpan.textContent != "" &&
		secondOperandSpan.textContent != ""
	) {
		let meanwhile = roundTo5decimalsMax(
			operate(
				operatorSpan.textContent,
				firstOperandSpan.textContent,
				secondOperandSpan.textContent
			)
		);
		firstOperandSpan.textContent = meanwhile;
		answerSpan.textContent = meanwhile;
		operatorSpan.textContent = value;
		secondOperandSpan.textContent = "";
	} else if (
		firstOperandSpan.textContent == "" &&
		answerSpan.textContent != ""
	) {
		firstOperandSpan.textContent = answerSpan.textContent;
		operatorSpan.textContent = value;
	}
}

const equalBtn = document.querySelector("#equal-btn");

function roundTo5decimalsMax(halfProduct) {
	halfProduct *= 100000;
	halfProduct = Math.round(halfProduct);
	return halfProduct / 100000;
}

equalBtn.onclick = function () {
	if (
		firstOperandSpan.textContent != "" &&
		operatorSpan.textContent != "" &&
		secondOperandSpan.textContent != ""
	) {
		let answer = roundTo5decimalsMax(
			operate(
				operatorSpan.textContent,
				firstOperandSpan.textContent,
				secondOperandSpan.textContent
			)
		);
		answerSpan.textContent = answer;
		firstOperandSpan.textContent = "";
		operatorSpan.textContent = "";
		secondOperandSpan.textContent = "";
	} else {
		console.log("Try entering something...");
	}
};

const clearBtn = document.querySelector("#clear-btn");

clearBtn.onclick = function () {
	firstOperandSpan.textContent = "";
	operatorSpan.textContent = "";
	secondOperandSpan.textContent = "";
	answerSpan.textContent = "";
};

const decimalBtn = document.querySelector("#decimal-btn");
decimalBtn.onclick = function () {
	if (firstOperandSpan.textContent == "") {
		firstOperandSpan.textContent += "0.";
	} else if (
		firstOperandSpan.textContent != "" &&
		operatorSpan.textContent == ""
	) {
		let sanityCheck = firstOperandSpan.textContent.split("");
		if (!sanityCheck.includes(".")) {
			console.log(sanityCheck);
			firstOperandSpan.textContent += ".";
		}
	} else if (
		operatorSpan.textContent != "" &&
		secondOperandSpan.textContent == ""
	) {
		secondOperandSpan.textContent += "0.";
	} else {
		let sanityCheck = secondOperandSpan.textContent.split("");
		if (!sanityCheck.includes(".")) {
			secondOperandSpan.textContent += ".";
		}
	}
};

const plusMinusBtn = document.querySelector("#plus-minus-btn");

//function to handle change to negative...

// TO USE FOR KEYBOARD INPUT
// document.body.onkeydown = (e) => setCurrentKey(e.key);

window.onload = () => {
	setCalcDisplay(DEFAULT_DISPLAY);
};

document.body.onclick = function (event) {
	console.log(event);
};

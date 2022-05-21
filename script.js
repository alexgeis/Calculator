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
const clearBtn = document.querySelector("#clear-btn");
const plusMinusBtn = document.querySelector("#plus-minus-btn");
const moduloBtn = document.querySelector("#modulo-btn");
const divideBtn = document.querySelector("#divide-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const decimalBtn = document.querySelector("#decimal-btn");
const equalBtn = document.querySelector("#equal-btn");
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

clearBtn.onclick = () => clearDisplay();
plusMinusBtn.onclick = () => posNegOperator();
moduloBtn.onclick = () => addModuloOperator();
divideBtn.onclick = () => addDivideOperator();
multiplyBtn.onclick = () => addMultiplyOperator();
minusBtn.onclick = () => addMinusOperator();
plusBtn.onclick = () => addPlusOperator();
decimalBtn.onclick = () => addDecimal();
equalBtn.onclick = () => evaluate();
//NUMBERS
nineBtn.onclick = (e) => enter9(e.target.value);
eightBtn.onclick = (e) => enter8(e.target.value);
sevenBtn.onclick = (e) => enter7(e.target.value);
sixBtn.onclick = (e) => enter6(e.target.value);
fiveBtn.onclick = (e) => enter5(e.target.value);
fourBtn.onclick = (e) => enter4(e.target.value);
threeBtn.onclick = (e) => enter3(e.target.value);
twoBtn.onclick = (e) => enter2(e.target.value);
oneBtn.onclick = (e) => enter1(e.target.value);

startBtn.onclick = () => runGame();
resetBtn.onclick = () => clearScore();
document.body.onkeydown = (e) => setCurrentKey(e.key);

//listen for keyDown events to capture key value event.key

window.onload = () => {
  setCalcDisplay(DEFAULT_DISPLAY);
};

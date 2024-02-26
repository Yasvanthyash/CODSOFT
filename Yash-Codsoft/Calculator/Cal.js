let display=document.getElementById('display');
let userInput='';

function calcNum(num) {
  userInput+=num;
  outputDisplay();
}

function setOperator(operator) {
  if (userInput !== '' && !userInput.endsWith(operator)) {
    userInput+=operator;
    outputDisplay();
  }
}

function calculation() {
  try {
    userInput=eval(userInput).toString();
    outputDisplay();
  } catch (error) {
    userInput='Error';
    outputDisplay();
  }
}

function clearDisplay() {
  userInput='';
  outputDisplay();
}

function outputDisplay() {
  display.textContent=userInput;
}
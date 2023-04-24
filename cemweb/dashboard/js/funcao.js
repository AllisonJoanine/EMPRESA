const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.value;

    if (buttonValue >= 0 && buttonValue <= 9) {
      if (!operator) {
        firstOperand += buttonValue;
        display.value = firstOperand;
      } else {
        secondOperand += buttonValue;
        display.value = secondOperand;
      }
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      operator = buttonValue;
    } else if (buttonValue === 'C') {
      firstOperand = '';
      secondOperand = '';
      operator = '';
      display.value = '';
    } else if (buttonValue === '=') {
      if (operator === '+') {
        result = Number(firstOperand) + Number(secondOperand);
      } else if (operator === '-') {
        result = Number(firstOperand) - Number(secondOperand);
      } else if (operator === '*') {
        result = Number(firstOperand) * Number(secondOperand);
      } else if (operator === '/') {
        result = Number(firstOperand) / Number(secondOperand);
      }
      display.value = result;
      firstOperand = result;
      secondOperand = '';
      operator = '';
      result = '';
    }
  });
});
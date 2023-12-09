let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        currentInput = new Function('return ' + currentInput)();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
    }
}
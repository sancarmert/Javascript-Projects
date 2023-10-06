let currentInput = '';
let result = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    result = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Hata';
        currentInput = '';
    }
}

function power() {
    try {
        currentInput += '**';
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Hata';
        currentInput = '';
    }
}

function squareRoot() {
    try {
        currentInput = Math.sqrt(eval(currentInput));
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Hata';
        currentInput = '';
    }
}

function modulo() {
    try {
        currentInput += '%';
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Hata';
        currentInput = '';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9+\-*/.^%]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

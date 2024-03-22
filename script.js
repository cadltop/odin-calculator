const zeroBtn = document.querySelector('.n0');
const oneBtn = document.querySelector('.n1');
const twoBtn = document.querySelector('.n2');
const threeBtn = document.querySelector('.n3');
const fourBtn = document.querySelector('.n4');
const fiveBtn = document.querySelector('.n5');
const sixBtn = document.querySelector('.n6');
const sevenBtn = document.querySelector('.n7');
const eightBtn = document.querySelector('.n8');
const nineBtn = document.querySelector('.n9');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');

let equation = '';
function populateDisplay(char) {
    const equationDiv = document.querySelector('.equation');
    equationDiv.innerHTML = equation + char;
    equation = equationDiv.innerHTML;
}

zeroBtn.addEventListener('click', () => populateDisplay('0'));
oneBtn.addEventListener('click', () => populateDisplay('1'));
twoBtn.addEventListener('click', () => populateDisplay('2'));
threeBtn.addEventListener('click', () => populateDisplay('3'));
fourBtn.addEventListener('click', () => populateDisplay('4'));
fiveBtn.addEventListener('click', () => populateDisplay('5'));
sixBtn.addEventListener('click', () => populateDisplay('6'));
sevenBtn.addEventListener('click', () => populateDisplay('7'));
eightBtn.addEventListener('click', () => populateDisplay('8'));
nineBtn.addEventListener('click', () => populateDisplay('9'));
addBtn.addEventListener('click', () => populateDisplay('+'));
subtractBtn.addEventListener('click', () => populateDisplay('-'));
multiplyBtn.addEventListener('click', () => populateDisplay('*'));
divideBtn.addEventListener('click', () => populateDisplay('/'));

clearBtn.addEventListener('click', () => {
    const equationDiv = document.querySelector('.equation');
    const resultDiv = document.querySelector('.result');
    equationDiv.innerHTML = '', equation = '';
    resultDiv.innerHTML = '', result = '';
});

let numbers = [], symbols = [];
equalsBtn.addEventListener('click', () => {
    numbers = equation.split(/[^0-9]/g);
    symbols = equation.match(/[+-/*]/g);
    
    for (num in numbers) {
        numbers[num] = parseInt(numbers[num]);
    }

    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = operate(numbers, symbols);
});

let result;
function operate(numbers, symbols) { 
    for (let i = 0; i < symbols.length; i++) {
        switch (symbols[i]) {
            case '*':
                result = multiply(numbers[i], numbers[i+1]);
                break;
            case '/':
                result = divide(numbers[i], numbers[i+1]);
                break;
            case '+':
                result = add(numbers[i], numbers[i+1]);
                break;
            case '-':
                result = subtract(numbers[i], numbers[i+1]);
                break;
        }
    }
    
    return result;
}

function add(value1, value2) {
    let operation = value1 + value2;
    return operation;
}
function subtract(value1, value2) {
    let operation = value1 - value2;
    return operation;
}
function multiply(value1, value2) {
    let operation = value1 * value2;
    return operation;
}
function divide(value1, value2) {
    let operation = value1 / value2;
    return operation;
}
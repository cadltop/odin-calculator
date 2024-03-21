let equation = '';

function populateDisplay(char) {
    const equationDiv = document.querySelector('.equation');
    equationDiv.innerHTML = equation + char;
    equation = equationDiv.innerHTML;
}

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
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');

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

/*let value1, value2, operator;

function add(value1, value2) {

}

function subtract(value1, value2) {
    
}

function multiply(value1, value2) {
    
}

function divide(value1, value2) {
    
}

function operate(value1, value2, operator) {
    switch (operator) {
        case '+':
            add(value1, value2);
        case '-':
            subtract(value1, value2);
        case '*':
            multiply(value1, value2);
        case '/':
            divide(value1, value2);
    }
}
*/
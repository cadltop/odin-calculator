let value1, value2, operator;

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

function populateDisplay(char) {
    if (document.querySelector('.equation').textContent === undefined) {
        document.querySelector('equation').textContent = char;
    } else {
        document.querySelector('equation').innerHTML = char;
    }
}

const zeroBtn = document.querySelector('.0');
const oneBtn = document.querySelector('.1');
const twoBtn = document.querySelector('.2');
const threeBtn = document.querySelector('.3');
const fourBtn = document.querySelector('.4');
const fiveBtn = document.querySelector('.5');
const sixBtn = document.querySelector('.6');
const sevenBtn = document.querySelector('.7');
const eightBtn = document.querySelector('.8');
const nineBtn = document.querySelector('.9');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');

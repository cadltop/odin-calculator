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
const dotBtn = document.querySelector('.dot');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');

let equation = '', dotCounter;
function populateDisplay(char) {
    if (char === '.') {
        if (dotCounter === 1) {
            if (char === equation.match(/[.+-/*]/g).at(-1)) {
                char = '';
            }
        } else {
            dotCounter = 1;
        }
    }
    const equationDiv = document.querySelector('.equation');
    equationDiv.innerHTML = equation + char;
    equation = equationDiv.innerHTML;
}
let result, numbers = [], symbols = [];
function operate(numbers, symbols) {
    numbers = equation.split(/[^.0-9]/g);
    symbols = equation.match(/[^.0-9]/g);
    
    for (num in numbers) {
        numbers[num] = parseFloat(numbers[num]);
    }

    switch (symbols[0]) {
        case '*':
            result = multiply(numbers[0], numbers[1]);
            break;
        case '/':
            result = divide(numbers[0], numbers[1]);
            break;
        case '+':
            result = add(numbers[0], numbers[1]);
            break;
        case '-':
            result = subtract(numbers[0], numbers[1]);
            break;
    }
    
    return parseFloat(result.toFixed(2));
}

function autoOperate() {
    if (equation.match(/[^.0-9]/g).length === 2) {
        result = operate(numbers, symbols);
        const equationDiv = document.querySelector('.equation');
        equationDiv.innerHTML = result + equation.match(/[^.0-9]/g).at(-1);
        equation = result + equation.match(/[^.0-9]/g).at(-1);
        for (let i = 1; i < symbols.length; i++) {
            switch (symbols[i]) {
                case '*':
                    result = multiply(numbers[0], numbers[1]);
                    break;
                case '/':
                    result = divide(numbers[0], numbers[1]);
                    break;
                case '+':
                    result = add(numbers[0], numbers[1]);
                    break;
                case '-':
                    result = subtract(numbers[0], numbers[1]);
                    break;
            }
        }
    }
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
dotBtn.addEventListener('click', () => populateDisplay('.'));
addBtn.addEventListener('click', () => {
    populateDisplay('+');
    autoOperate();
});
subtractBtn.addEventListener('click', () => {
    populateDisplay('-');
    autoOperate();
});
multiplyBtn.addEventListener('click', () => {
    populateDisplay('*');
    autoOperate();
});
divideBtn.addEventListener('click', () => {
    populateDisplay('/');
    autoOperate();
});
let exp;
deleteBtn.addEventListener('click', () => {
    const equationDiv = document.querySelector('.equation');
    exp = equation.replace(`${equation.charAt(equation.length-1)}`, '')
    equationDiv.innerHTML = exp;
    equation = equationDiv.innerHTML;
});
clearBtn.addEventListener('click', () => {
    const equationDiv = document.querySelector('.equation');
    const resultDiv = document.querySelector('.result');
    equationDiv.innerHTML = '', equation = '';
    resultDiv.innerHTML = '', result = '';
    dotCounter = 0;
});
equalsBtn.addEventListener('click', () => {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = operate(numbers, symbols);
});
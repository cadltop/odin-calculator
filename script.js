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
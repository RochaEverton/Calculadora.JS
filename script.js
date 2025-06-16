const value1 = [];
const value2 = [];
const operator1 = [];
const histValue1 = [];
const histValue2 = [];
const operatorHist1 = [];
let historyIndex = 1;
let aguardandoNovaExpressao = false;


function appendToDisplay(value) {
    if (aguardandoNovaExpressao) {
        positionHistory();
        aguardandoNovaExpressao = false;
    }
    const display = document.getElementById('display');

    if (value === '.') {
        if (operator1.length === 0 && value1.includes('.')) return;
        if (operator1.length > 0 && value2.includes('.')) return;
        appendToHistory(value);
    } else {
        appendToHistory(value);
    }

    display.value += value;
    if (operator1.length === 0) {
        value1.push(value);
    } else {
        value2.push(value);
    }
    return console.log(operator1, value1, value2);
}


function result() {
    if (value1.length === 0 || operator1.length === 0 || value2.length === 0) {
        return;
    }
    const resultado = calculateResult(value1, value2, operator1);
    appendToHistory(resultado, true);
    value1.length = 0;
    value2.length = 0;
    operator1.length = 0;
    aguardandoNovaExpressao = true;
}

function appendToHistory(value, isResult = false) {
    const displayHistory = document.getElementById(`p${historyIndex}`);
    if (isResult) {
        if (!displayHistory.textContent.includes('=')) {
            displayHistory.textContent += '=' + value;
        }
    } else {
        displayHistory.textContent += value;
    }
    return console.log(operatorHist1, histValue1, histValue2);
}

function setOperator(op) {
    if (value1.length === 0) {
        return;
    }
    const displayHistory = document.getElementById(`p${historyIndex}`);
    const lastChar = displayHistory.textContent.slice(-1);
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    const operator = document.getElementById(op);
    operator.value = op;
    operator1.push(op);
    display.value = '';
    appendToHistory(op);
    return console.log(operator1, value1, value2);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    value1.length = 0;
    value2.length = 0;
    operator1.length = 0;
    histValue1.length = 0;
    histValue2.length = 0;
    operatorHist1.length = 0;
    document.getElementById('p1').textContent = '';
    document.getElementById('p2').textContent = '';
    document.getElementById('p3').textContent = '';
    historyIndex = 1;
    aguardandoNovaExpressao = false;
    console.log(display)
}

function calculateResult(n1, n2, op) {
    display.value = '';
    n1 = parseFloat(value1.join(""));
    n2 = parseFloat(value2.join(""));
    op = operator1[0];
    if (op === "+") {
        return n1 + n2;
    } else if (op === "-") {
        return n1 - n2;
    } else if (op === "*") {
        return n1 * n2;
    } else if (op === "/") {
        if (n2 === 0) {
            return "Erro: divisão por 0";
        }
        return n1 / n2;
    } else {
        return "Operador inválido";
    }
}

function positionHistory() {
    document.getElementById('p3').textContent = document.getElementById('p2').textContent;
    document.getElementById('p2').textContent = document.getElementById('p1').textContent;
    document.getElementById('p1').textContent = '';
    historyIndex = 1;
}
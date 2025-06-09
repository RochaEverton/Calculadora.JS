const value1 = [];
const value2 = [];
const operator1 = [];


function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    if  ( operator1.length === 0) {
    value1.push(value);
    }   
    else{
        value2.push(value);
    }
    return console.log(operator1, value1, value2);
}

function setOperator(op) {
    const operator = document.getElementById(op);
    operator.value = op;
    operator1.push(op);
    display.value = '';
    return console.log(operator1, value1, value2);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    value1.length = 0;
    value2.length = 0;
    operator1.length = 0;
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
        return n1 / n2;
    } else {
        return "Operador inválido";
    }
}

function result() {
    const resultado = calculateResult(value1, value2, operator1);
    console.log("value1= " + value1);
    console.log("value2= " + value2);
    console.log("operator= " + operator1);
    console.log("Resultado: " + resultado);
    document.getElementById('display').value = resultado;
    value1.length = 0;
    value1.push(resultado);
    value2.length = 0;
    operator1.length = 0;
}
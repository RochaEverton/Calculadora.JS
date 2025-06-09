const value1 = [];
const value2 = [];
const operator = "+"



function calcular(value1, value2, operator) {
    value1 = parseFloat(value1.join(""));
    value2 = parseFloat(value2.join(""));
    
    if (operator === "+") {
        return value1 + value2;
    } else if (operator === "-") {
        return value1 - value2;
    } else if (operator === "*") {
        return value1 * value2;
    } else if (operator === "/") {
        return value1 / value2;
    } else {
        return "Operador inválido";
    }
}

function addValue(arr, value) {
    arr.push(value);
}


addValue(value1, 1);
console.log("value1= " + value1);
addValue(value1, 2);
console.log("value1= " + value1);

console.log("teste: " + value1.join(""));

addValue(value2, 5);
console.log("value2= " + value2);

const resultado = calcular(value1, value2, operator);
console.log("Resultado: " + resultado);
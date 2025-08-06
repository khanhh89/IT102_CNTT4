"use strict";
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        const number = parseFloat(value);
        if (!isNaN(number)) {
            return number;
        }
    }
    return NaN;
}
function sum(a, b) {
    return toNumber(a) + toNumber(b);
}
function minus(a, b) {
    return toNumber(a) - toNumber(b);
}
function multiply(a, b) {
    return toNumber(a) * toNumber(b);
}
function divice(a, b) {
    if (toNumber(b) === 0) {
        return NaN;
    }
    return toNumber(a) / toNumber(b);
}

function power(a, b) {
    return Math.pow(a, b);
}

function sqrt(a, b) {
    return Math.pow(a, 1 / b);
}

function factorial(n) {
    if (isNaN(n) || n < 0 || n % 1 !== 0) {
        return NaN;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
const btnSum = document.getElementById("btnSum");
if (btnSum) {
    btnSum.addEventListener("click", () => caculata("+"));
}
const btnMinus = document.getElementById("btnMinus");
if (btnMinus) {
    btnMinus.addEventListener("click", () => caculata('-'));
}
const btnMutiply = document.getElementById("btnMutiply");
if (btnMutiply) {
    btnMutiply.addEventListener("click", () => caculata('*'));
}
const btnDivice = document.getElementById("btnDivice");
if (btnDivice) {
    btnDivice.addEventListener("click", () => caculata('/'));
}
const btnPower = document.getElementById("btnPower");
if (btnPower) {
    btnPower.addEventListener("click", () => caculata('^'));
}
const btnSqrt = document.getElementById("btnSqrt");
if (btnSqrt) {
    btnSqrt.addEventListener("click", () => caculata('√'));
}
const btnFactorial = document.getElementById("btnFactorial");
if (btnFactorial) {
    btnFactorial.addEventListener("click", () => caculata("!"));
}
function caculata(operator) {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const resultElement = document.getElementById("result");
    const num1 = toNumber(input1.value);
    const num2 = toNumber(input2.value);
    let result;
    switch (operator) {
        case '+':
            result = sum(num1, num2);
            break;
        case '-':
            result = minus(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divice(num1, num2);
            break;
        case '^':
            result = power(num1, num2);
            break;
        case '√':
            result = sqrt(num1, num2);
            break;
        case '!':
            result = factorial(num1);
            break;
        default:
            result = NaN;
    }
    if (resultElement) {
        resultElement.textContent = result.toString();
    }
}

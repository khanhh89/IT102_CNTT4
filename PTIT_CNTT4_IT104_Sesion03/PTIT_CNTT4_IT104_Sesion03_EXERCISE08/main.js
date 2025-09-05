"use strict";
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
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
console.log(sum(5, "20"));
console.log(minus(7, "2"));
console.log(multiply("8", 5));
console.log(divice(100, "5"));
console.log(sum("abc", 10));

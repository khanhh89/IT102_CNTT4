"use strict";
function flatten(arr) {
    let result = [];
    for (let cu of arr) {
        for (let item of cu) {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));

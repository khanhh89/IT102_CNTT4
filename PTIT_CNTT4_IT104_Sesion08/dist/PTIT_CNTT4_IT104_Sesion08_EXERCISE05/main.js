"use strict";
function $find(arr) {
    for (let item of arr) {
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}
console.log($find([1, 8, 9, 5, 2]));
console.log($find(["s", "q", "l"]));

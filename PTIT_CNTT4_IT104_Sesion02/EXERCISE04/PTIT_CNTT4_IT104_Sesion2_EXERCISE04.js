function checkElement(arr, value){
    return arr.includes(value)
}

let result = checkElement([1,2,3,4,5], 5)
let results = checkElement([1,2,3,4,5],10)
console.log(result, results);

function reverseArr<T>(arr:T[]):T[]{
    return arr.slice().reverse()
}

console.log(reverseArr([1,2,3]))
console.log(reverseArr(['a','b','c']))
function find<T>(arr:T[], value:T):T|undefined{
    return arr.find(item => item === value)
}

console.log(find([1,5,7,6,10,8], 6))
console.log(find(["a", "b","c"], "d"))

const sum = (arr) =>{
    let sums = 0
    for(const num of arr){
        if(num %2 === 0){
            sums += num
        }
    }
    return sums
}

console.log(sum([1,2,3,4,5,6]))
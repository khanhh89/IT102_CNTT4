const checkParity = (a)=>{
    if(typeof a!== 'number'){
        return "a not is number"
    }
    if(a%2==0){
        return a + "is an even"
    }else{
        return a+" is odd"
    }
}

console.log(checkParity('a'))
console.log(checkParity(10))
console.log(checkParity(7))
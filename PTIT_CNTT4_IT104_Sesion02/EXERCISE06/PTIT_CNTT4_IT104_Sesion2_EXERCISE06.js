function checkEndString(longString, shortString){
    if(longString.endsWith(shortString)){
        return true
    }else{
        return false
    }
}

console.log(checkEndString("Hello, Word!","Hello" ))
console.log(checkEndString("Hi there!", "there!"))
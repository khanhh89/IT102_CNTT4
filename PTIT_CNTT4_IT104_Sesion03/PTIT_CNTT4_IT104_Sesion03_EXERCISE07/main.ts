let input:string = "banana"
let output:string =""

for(let char of input){
    if(!output.includes(char)){
        output += char
    }
}
console.log(output)
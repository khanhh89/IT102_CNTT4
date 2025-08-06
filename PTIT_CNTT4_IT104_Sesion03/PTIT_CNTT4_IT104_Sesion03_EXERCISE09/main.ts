function toNumber(value:string|number):number{
    if(typeof value ==="number"){
        return value
    }
    if(typeof value === "string"){
        const number = parseFloat(value)
        if(!isNaN(number)){
            return number
        }
    }
    return NaN
}

function sum(a:string|number, b:string|number):number{
    return toNumber(a) + toNumber(b)
}

function minus(a:string|number, b:string|number):number{
    return toNumber(a) - toNumber(b)
}

function multiply(a:string|number, b:string|number):number{
    return toNumber(a) * toNumber(b)
}

function divice(a:string|number, b:string|number):number{
    if(toNumber(b) === 0){
        return NaN
    }
    return toNumber(a) / toNumber(b)
}
//lũy thừa
function power(a:number, b:number):number{
    return Math.pow(a,b)
}
//căn bậc n
function sqrt(a:number, b:number):number{
    return Math.pow(a,1/b)
}
//giai thừa
function factorial(n: number):number{
    if(isNaN(n)||n<0||n%1!==0){
        return NaN
    }
    if(n === 0||n===1){
        return 1
    }
    let result =1 
    for (let i = 2; i <= n; i++){
        result *=i       
    }
    return result
}

const btnSum = document.getElementById("btnSum")
if(btnSum){
    btnSum.addEventListener("click",()=>caculata("+"))
}

const btnMinus = document.getElementById("btnMinus")
if(btnMinus){
    btnMinus.addEventListener("click",()=>caculata('-'))
}

const btnMutiply = document.getElementById("btnMutiply")
if(btnMutiply){
    btnMutiply.addEventListener("click", ()=>caculata('*'))
}

const btnDivice = document.getElementById("btnDivice")
if(btnDivice){
    btnDivice.addEventListener("click", ()=>caculata('/'))
}

const btnPower = document.getElementById("btnPower")
if(btnPower){
    btnPower.addEventListener("click", ()=>caculata('^'))
}

const btnSqrt = document.getElementById("btnSqrt");
if (btnSqrt) {
    btnSqrt.addEventListener("click", ()=>caculata('√'))
}

const btnFactorial = document.getElementById("btnFactorial");
if (btnFactorial) {
    btnFactorial.addEventListener("click", () => caculata("!"));
}

function caculata(operator:string):void{
    const input1 = document.getElementById("input1") as HTMLInputElement
    const input2 = document.getElementById("input2") as HTMLInputElement
    const resultElement = document.getElementById("result") as HTMLInputElement

    const num1 = toNumber(input1.value)
    const num2 = toNumber(input2.value)

    let result:number

    switch(operator){
        case '+':
            result = sum(num1,num2)
            break
        case '-':
            result = minus(num1,num2)
            break
         case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divice(num1, num2);
            break;
        case '^':
            result = power(num1, num2);
            break;
        case '√':
            result = sqrt(num1, num2);
            break;
        case '!':
            result = factorial(num1);
            break;
        default:
            result = NaN;    
    }
    if(resultElement){
        resultElement.textContent = result.toString()
    }

}

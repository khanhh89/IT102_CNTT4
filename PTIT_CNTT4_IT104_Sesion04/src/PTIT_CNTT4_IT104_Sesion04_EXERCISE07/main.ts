

function processInput(input: string | number | boolean) {
    if(typeof input === "string"){
        if(/^\d+$/.test(input)){
            const num = Number(input)
            console.log(num**2)
        }
    }else if(typeof input === "number"){
        if (soNguyenTo(input)) {
            console.log('====================================');
            console.log("Là số nguyên tố");
            console.log('====================================');
        }else{
            console.log('====================================');
            console.log("Không phải là số nguyên tố");
            console.log('====================================');
        }
    }else if(typeof input ==="boolean"){
        if(input){
            console.log('====================================');
            console.log("Giá trị true - tiến hành xử lý");
            console.log('====================================');
        }else{
            console.log('====================================');
            console.log("Giá trị false - dừng xử lý");
            console.log('====================================');
        }
    }
}

function soNguyenTo(n:number):boolean{
    if(n<2||!Number.isInteger(n)){
        return false
    }
    for(let i = 0; i<Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

processInput("123")
processInput("abc123!")
processInput(7)
processInput(10)
processInput(true)
processInput(false)
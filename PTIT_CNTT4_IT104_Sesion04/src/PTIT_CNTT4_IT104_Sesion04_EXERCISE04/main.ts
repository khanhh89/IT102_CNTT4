function unionType(value:string|number):void{
    if(typeof value === "string"){
        console.log(`Có ${value.length} kí tự`)
    }else if(typeof value === "number"){
        if(value % 2){
            console.log("là số chẵn");
        }else{
            console.log("Là số lẻ");
        }
    }else{
        console.log("Không hợp lệ");
    }
}

unionType("fdfsf")
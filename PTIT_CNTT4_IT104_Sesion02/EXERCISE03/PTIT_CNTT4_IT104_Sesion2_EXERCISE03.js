const typeConsole = (type = "log")=>{
    if(type === "log"){
        console.log(`Đây là type: ${type}`);
    }else if(type === "warn"){
        console.warn(`Đây là type: ${type}`)
    }else if(type ==="error"){
        console.error(`Đây là tyoe: ${type}`)
    }else{
        console.log()
    }
}

typeConsole("log")
typeConsole("warn")
typeConsole("error")
typeConsole()
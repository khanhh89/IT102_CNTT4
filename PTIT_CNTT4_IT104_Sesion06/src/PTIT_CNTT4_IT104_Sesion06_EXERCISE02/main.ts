abstract class Job{
    protected type:string
    constructor(type:string){
        this.type = type 
    }
    printType():void{
        console.log(` Loại công việc: ${this.type}`)
    }
    abstract caculateSalary():number
}

class fullTime extends Job{
    constructor(){
        super("Fulltime")
    }
    caculateSalary(): number {
        return 100000
    }
}

class partTime extends Job{
    private _working:number
    constructor(_working:number){
        super("partTime")
        this._working = _working
    }
    caculateSalary(): number {
        return this._working*30000
    }
}

const $fullTime = new fullTime()
$fullTime.printType()
console.log(` Lương: ${$fullTime.caculateSalary().toLocaleString()}`);
const $partTime = new partTime(91)
$partTime.printType()
console.log(` Lương: ${$partTime.caculateSalary().toLocaleString()}`);
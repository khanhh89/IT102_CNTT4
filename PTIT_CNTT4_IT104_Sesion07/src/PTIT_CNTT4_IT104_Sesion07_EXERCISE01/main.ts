class Employee{
    public name:string
    protected company:string
    private phone:string
    constructor(name:string,company:string,phone:string){
        this.name = name
        this.company = company
        this.phone = phone
    }
    printInfo():void{
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`)
    }
}

class Manager extends Employee{
    public teamSize:string
    constructor(name:string,company:string,phone:string,teamSize:string){
        super(name,company,phone)
        this.teamSize = teamSize
    }
    public printInfo(): void {
        super.printInfo()
        console.log(`Team Size: ${this.teamSize}`)
    }
}

const manager = new Manager("Nguyen A", "PTIT", "012345678", "5")
manager.printInfo()
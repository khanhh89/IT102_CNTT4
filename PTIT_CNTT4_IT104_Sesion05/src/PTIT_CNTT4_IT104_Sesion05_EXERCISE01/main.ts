class vehicle{
    name:string
    year:number
    company:string
    constructor(name:string, year:number, company:string){
        this.name = name
        this.year = year
        this.company = company
    }
    printInfo():void{
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company} `);
    }   
}
const vehicle1 = new vehicle("Xe đạp", 20000, "Honda")
vehicle1.printInfo()
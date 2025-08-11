class _vehicle{
    public name:string
    protected year: number
    private company: string
    readonly id:number
    constructor(name:string, year:number, company:string,id:number){
        this.name = name
        this.year = year
        this.company = company
        this.id = id
    }
    printInfor():void{
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);       
    }
}

const $vehicle = new _vehicle("Khanh", 2000, "Grab", 30)
$vehicle.printInfor()
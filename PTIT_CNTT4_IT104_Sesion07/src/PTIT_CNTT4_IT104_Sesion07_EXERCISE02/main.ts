class Vehicle{
    protected name:string
    protected speed:number
    protected id:string
    constructor(name:string,speed:number, id:string){
        this.name = name
        this.speed = speed
        this.id = id
    }
    public slowDown():void{
        this.speed += 3
    }
    public speedUp():void{
        this.speed = Math.max(0,this.speed-4)
    }
    public showSpeed():void{
        console.log(` Tốc độ hiện tại là: ${this.speed} km/h`)
    }
}

class Bicycle extends Vehicle{
    private gear:number
    constructor(name:string, speed:number, id:string,gear:number){
        super(name, speed, id)
        this.gear = gear
    }
    public showInfo():void{
        console.log(`ID: ${this.id}, Name: ${this.name}, Gear: ${this.gear}`);       
    }
}

let bike = new Bicycle("Bike", 10, "BK01", 100)
bike.speedUp()
bike.showSpeed()
bike.slowDown()
bike.showSpeed()
bike.showInfo()
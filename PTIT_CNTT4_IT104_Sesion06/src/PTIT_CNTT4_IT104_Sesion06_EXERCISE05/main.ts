interface changeSpeed {
    speedUp():void
    slowDown():void
    stop():void
}

class Vehicle implements changeSpeed{
    private speed:number
    constructor(speed:number = 0){
        this.speed = speed
    }
    speedUp(): void {
        this.speed += 5
        console.log(` Tăng tốc độ lên ${this.speed} km/h`)
    }
    slowDown(): void {
        this.speed = Math.max(0, this.speed -3)
        console.log(` Giảm tốc, tốc độ hiện tại là: ${this.speed} km\h`)
    }
    stop(): void {
        this.speed = 0
        console.log(`Duwngf xe, tốc độ hiện tại là: ${this.speed} km/h`)
    }
}

let _vihecle = new Vehicle
_vihecle.speedUp()
_vihecle.slowDown()
_vihecle.stop()

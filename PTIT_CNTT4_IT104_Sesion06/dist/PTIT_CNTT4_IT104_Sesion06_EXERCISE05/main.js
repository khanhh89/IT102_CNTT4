class Vehicle {
    constructor(speed = 0) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 5;
        console.log(` Tăng tốc độ lên ${this.speed} km/h`);
    }
    slowDown() {
        this.speed = Math.max(0, this.speed - 3);
        console.log(` Giảm tốc, tốc độ hiện tại là: ${this.speed} km\h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Duwngf xe, tốc độ hiện tại là: ${this.speed} km/h`);
    }
}
let _vihecle = new Vehicle;
_vihecle.speedUp();
_vihecle.slowDown();
_vihecle.stop();

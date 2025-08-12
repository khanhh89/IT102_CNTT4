"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed += 3;
    }
    speedUp() {
        this.speed = Math.max(0, this.speed - 4);
    }
    showSpeed() {
        console.log(` Tốc độ hiện tại là: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Gear: ${this.gear}`);
    }
}
let bike = new Bicycle("Bike", 10, "BK01", 100);
bike.speedUp();
bike.showSpeed();
bike.slowDown();
bike.showSpeed();
bike.showInfo();

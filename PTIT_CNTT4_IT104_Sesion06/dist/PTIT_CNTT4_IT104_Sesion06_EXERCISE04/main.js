class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    caculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    caculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Retangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    caculateArea() {
        return this.width * this.height;
    }
    caculatePerimeter() {
        return 2 * (this.width * this.height);
    }
}
const demo = new Circle(4);
console.log("CIrcle Ảea: ", demo.caculateArea().toFixed(2));
console.log("CIrcle Perimeter: ", demo.caculatePerimeter().toFixed(2));
const demo2 = new Retangle(4, 10);
console.log("Retangle Ảea: ", demo2.caculateArea());
console.log("Retangle Ảea: ", demo2.caculatePerimeter());

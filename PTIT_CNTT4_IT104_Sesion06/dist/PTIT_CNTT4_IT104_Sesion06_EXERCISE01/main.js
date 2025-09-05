class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`width: ${this.width}, height: ${this.height}`);
    }
}
const myRectangle = new Rectangle("Hình vuông", 3, 4);
console.log("Shape: ", myRectangle.getName());
myRectangle.getSize();

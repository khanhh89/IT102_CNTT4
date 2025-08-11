class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getTheArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(10, 5);
console.log("Width:", rect.getWidth());
console.log("Height:", rect.getHeight());
console.log("Diện tích:", rect.getTheArea());
console.log("Chu vi:", rect.getPerimeter());
rect.setWidth(20);
rect.setHeight(15);
console.log("Updated Width:", rect.getWidth());
console.log("Updated Height:", rect.getHeight());
console.log("Updated Diện tích:", rect.getTheArea());
console.log("Updated Chu vi:", rect.getPerimeter());

interface Geometry {
    caculateArea():number
    caculatePerimeter():number
}

class Circle implements Geometry{
    private radius:number
    constructor(radius:number){
        this.radius = radius
    }
    caculateArea(): number {
        return Math.PI * this.radius *this.radius
    }
    caculatePerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Retangle implements Geometry{
    private width:number
    private height:number
    constructor(width:number, height:number) {
        this.width = width
        this.height = height
    }
    caculateArea(): number {
        return this.width *this.height
    }
    caculatePerimeter(): number {
        return 2*(this.width*this.height)
    }
}

const demo = new Circle(4)
console.log("CIrcle Ảea: ", demo.caculateArea().toFixed(2));
console.log("CIrcle Perimeter: ", demo.caculatePerimeter().toFixed(2));
const demo2 = new Retangle(4,10)
console.log("Retangle Ảea: ", demo2.caculateArea());
console.log("Retangle Ảea: ", demo2.caculatePerimeter());


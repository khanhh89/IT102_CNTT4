abstract class Shape {
    protected name:string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
    abstract getSize():void
}

class Rectangle extends Shape{
    private width:number
    private height:number
    constructor(name:string,width:number, height:number) {
        super(name)
        this.width = width
        this.height= height
    }
    getSize(): void {
        console.log(`width: ${this.width}, height: ${this.height}`)
    }
}

const myRectangle = new Rectangle("Hình vuông", 3,4)
console.log("Shape: ", myRectangle.getName());
myRectangle.getSize()

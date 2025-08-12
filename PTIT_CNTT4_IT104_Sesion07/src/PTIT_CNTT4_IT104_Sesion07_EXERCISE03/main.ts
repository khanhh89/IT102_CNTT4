abstract class Animal{
    public name:string
    constructor(name:string) {
        this.name = name
    }
    abstract makeNoise():void
    public printName():void{
        console.log(`Name Animal: ${this.name}`)
    }
}

class Dog extends Animal{
    public makeNoise(): void {
       console.log("Sủa gâu gâu")
    }
}

class Cat extends Animal{
    public makeNoise(): void {
        console.log("Rên meo meo")
    }
}

let cat = new Cat("Englent")
let dog = new Dog("Cẩu")
cat.printName()
cat.makeNoise()
dog.printName()
dog.makeNoise()
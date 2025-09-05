"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name Animal: ${this.name}`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Sủa gâu gâu");
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Rên meo meo");
    }
}
let cat = new Cat("Englent");
let dog = new Dog("Cẩu");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();

class Animal {
    move() {
        console.log("Di chuyển");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Gâu gâu");
    }
}
const dog = new Dog();
dog.makeSound();
dog.move();

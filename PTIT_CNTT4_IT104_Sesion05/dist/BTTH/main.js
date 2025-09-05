//Tạo lớp động vật
class _animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    //phương thức
    speak() {
        console.log(`am thanh của con vật: ${this.name}`);
    }
}
//khởi tạo lớp chó
class _Dog extends _animal {
    speak() {
        console.log(``);
    }
}

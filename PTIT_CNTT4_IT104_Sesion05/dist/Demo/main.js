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
// //tính bao đóng
// class Student {
//     fullname:string
//     age:number
//     constructor(fullname:string,age:number){
//         this.fullname=fullname
//         this.age=age
//     }
//     getInfo():string{
//         return`Xin chao ${this.fullname}, ${this.age} tuổi`
//     }
//     setAge(new_age:number){
//         this.age = new_age
//     }
// }
// let sv1 = new Student("Khanh", 30) //sv 1 được gọi là 1 instance của lớp Studenr
// sv1.setAge(22)
// console.log(sv1.getInfo())
// //tính kế thừa 
// //1 class con khi kế thừa class cha thì sẽ có các thuộc tính của phương thức cha
// class animal{
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
//     sound():string{
//         return`Tieng keu cua ${this.name}`
//     }
// }
// class Dog extends animal{
//     sound() {
//         return`${this.name}: Gaau gâu`
//     }
// }
// const dog1 = new Dog ("chó")
// console.log(dog1.sound());

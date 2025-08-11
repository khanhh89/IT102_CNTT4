// //tạo interface animal
// interface Animal{
//     //thuộc tính
//     name:string
//     age:number
//     category:string|number
//     //phương thức
//     sound():string
//     getDetail():string
//     move():string
//     feed():string
// }
// //tạo abstracts class animal
// abstract class _animal implements Animal{
//     name:string
//     age:number
//     category: string|number;
//     constructor(name:string, age:number, category:string|number){
//         this.name = name
//         this.age = age
//         this.category = category
//     }
//     sound(): string {
//         return ``
//     }
//     getDetail(): string {
//         return ``
//     }
//     move(): string {
//         return ``
//     }
//     feed(): string {
//         return ``
//     }
// }

// //tạo các class con kế thừa class animal
// class Mammal extends _animal{
//     private furColor:string
//     constructor(name:string, age:number, furColor:string){
//         super(name , age, furColor )
//         this.name = name
//         this.age = age
//         this.furColor = furColor
//     }
//     move():string{
//         return `Phương thức di chuyển của động vật có vú`
//     }
//     getFullColor():string{
//         return ` Màu lông của ${this.name} là: ${this.furColor}`
//     }
    
// }
// //thêm các class khác
// class Bird extends _animal{
//     private wingSpan:number
//     constructor(name:string, age:number, wingSpan:number){
//         super(name, age, wingSpan)
//         this.name = name
//         this.age = age
//         this.wingSpan = wingSpan
 
//    }
//    move():string{
//     return`Phương thức di chuyển của chim`
//    }
//    getWingSpan():string{
//     //lấy thông tin sải cánh của loài chim
//     return `Sair cánh của loài: ${this.name} là ${this.wingSpan}`
//    }
// }
// //các thuộc tính khác...

// //tính đa hình là cùng 1 phương thức nhưng triển khai khác nhau
// let $animal:_animal[]=[
//     new Bird("Bird", 2,5),
//     new Mammal("Lợn",2,"hồng")
// ]

// //gọi phương thức
// $animal.forEach(item => {
//     //thông tin di chuyển các loài
//     console.log(item.move());
    
// });
// //in thông tin màu lông của loài
// const new_animal = new Mammal("con lợn", 1, "màu trăngs")
// console.log(new_animal.getFullColor());

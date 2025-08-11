// //abstract
// abstract class animal{
//     //gồm nhiều phương thức abstract và nhiều phương thức không phải là abstracts
//     abstract makeSound():void
//     //abstracts
//     move(){
//         console.log("phương thức di chuyển");
//     }
//     //định nghĩa thêm nhiều phương thức riêng cho chính nó
// }
// class Cat extends animal{
//     //bắt buộc triển khai method abstract
//     makeSound(): string {
//         return ` Tiếng kêu của loài mèo, meo meo!! `
//     }
// }

// //interface
// //giống như 1 bản hợp đồng khi triển khai phải tuân theo
// interface product {
//     name:string
//     price:number
//     getInfo():string
// }
// class A implements product,Book{
//     name:string
//     price: number;
//     bookId: number;
//     bookName?: string;
//     constructor(name:string, price:number){
//         this.name = name
//         this.price = price
//     }
//     getInfo(): string {
//         return` Thông tin sản phẩm: Tên ${this.name}, giá: ${this.price}`
//     }
// }
// interface Book{
//     bookId:number
//     bookName?:string
// }
// const book1:Book={
//     bookId:1,
//     bookName: "con chó đốm"
// }

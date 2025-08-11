abstract class Animal{
    abstract makeSound():void       //abstraact method: dùng khi tạo một lớp cơ sở có các phương thức mà lớp con bắt buộc phải định nghĩa lại
    move():void  {                 //abstract thươngf : khi muốn cung cấp sẵn thuộc tính chung của các lớp con hoặc không cần thuộc tính con phải thay đổi
        console.log("Di chuyển"); 
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Gâu gâu")
    }
}

const dog= new Dog()
dog.makeSound()
dog.move()
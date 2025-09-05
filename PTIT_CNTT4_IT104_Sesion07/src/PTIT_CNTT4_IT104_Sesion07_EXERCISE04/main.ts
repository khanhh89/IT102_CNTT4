abstract class Person{
    public name:string
    constructor(name:string){
        this.name = name
    }
    public displayInfo():void{
        console.log(`Ten người dùng: ${this.name}`)
    }
}

class student extends Person{
    public id:string
    constructor(name:string, id:string){
        super(name)
        this.id = id
    }
    public override displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}`)
    }
}

class Teacher extends Person{
    public subject:string
    constructor(name:string, subject:string){
        super(name)
        this.subject = subject
    }
    public override displayInfo(): void {
        console.log(`Name: ${this.name}, Subject: ${this.subject}`)
    }
}

let students = new student("Mh3", "Khanh")
let teachers = new Teacher("LM","Lập trình")

students.displayInfo()
teachers.displayInfo()
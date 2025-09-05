class Student{
    id:number
    age:number
    email:string
    constructor(id:number, age:number, email:string){
        this.id=id
        this.age=age
        this.email=email
    }
    printStudent():void{
        console.log(`Id: ${this.id}, Name: ${this.age}, Email: ${this.email}`);
    }
}
const students:Student[] = [
    new Student(1,20,"khanh123@"),
    new Student(2,40,"khanhne@")
]
for(const student of students){
    student.printStudent()
}
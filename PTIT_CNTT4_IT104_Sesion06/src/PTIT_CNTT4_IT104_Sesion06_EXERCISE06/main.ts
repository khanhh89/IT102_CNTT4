class Student{
    private id:number
    private name:string
    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
    getInfo():string{
        return `ID: ${this.id}, name: ${this.name}`
    }
    getId():number{
        return this.id
    }
}

let Students:Student[]=[]
class Classroom {
    private students:Student[]=[]
    showStudents():void{
        console.log("Danh sách sinh viên:")
        this.students.forEach(student=>{
            console.log(student.getInfo())
        })
    }
    addStudent(student:Student):void{
        this.students.push(student)
    }
    filterStudent(id:number){
        return this.students.filter(student=>student.getId() === id)
    }
    addStudentClass(id:number):void{
        let index = Students.findIndex(student=>student.getId()===id)
        if(index !== -1){
            let student = Students[index]
            this.addStudent(student)
            Students.splice(index, 1)
        }else{
            console.log(`Khoong tìm thấy ID: ${id}`)
        }
    }
}

Students.push(new Student(1,"Khanh"))
Students.push(new Student(2,"Khanh2"))
Students.push(new Student(3,"Khanh3"))
Students.push(new Student(4,"Khanh4"))
Students.push(new Student(5,"Khanh5"))
Students.push(new Student(6,"Khanh6"))

let class1 = new Classroom()
let class2 = new Classroom()

class1.addStudentClass(1)
class1.addStudentClass(2)
class1.addStudentClass(3)
class2.addStudentClass(4)
class2.addStudentClass(5)
class2.addStudentClass(6)

class1.showStudents()
class2.showStudents()

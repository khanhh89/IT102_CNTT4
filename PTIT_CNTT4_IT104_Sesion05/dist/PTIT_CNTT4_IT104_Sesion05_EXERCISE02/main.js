class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printStudent() {
        console.log(`Id: ${this.id}, Name: ${this.age}, Email: ${this.email}`);
    }
}
const students = [
    new Student(1, 20, "khanh123@"),
    new Student(2, 40, "khanhne@")
];
for (const student of students) {
    student.printStudent();
}

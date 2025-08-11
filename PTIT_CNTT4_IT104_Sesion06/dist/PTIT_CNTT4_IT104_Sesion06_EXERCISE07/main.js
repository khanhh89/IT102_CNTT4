class _Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getInfo() {
        return `ID: ${this.id}, name: ${this.name}`;
    }
    getId() {
        return this.id;
    }
    setName(newName) {
        this.name = newName;
    }
}
let _Students = [];
class _Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        console.log("Danh sách sinh viên:");
        this.students.forEach(student => {
            console.log(student.getInfo());
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(student => student.getId() === id);
    }
    addStudentClass(id) {
        let index = _Students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            let student = _Students[index];
            this.addStudent(student);
            _Students.splice(index, 1);
        }
        else {
            console.log(`Không tìm thấy ID: ${id}`);
        }
    }
    removeStudent(id) {
        let index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            let removedStudent = this.students.splice(index, 1)[0];
            _Students.push(removedStudent);
            console.log(`Đã xóa học sinh ID ${id}.`);
        }
        else {
            console.log(`Không tìm thấy học sinh ID ${id}`);
        }
    }
    editStudent(id, newName) {
        let student = this.students.find(student => student.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã sửa tên học sinh ID ${id} thành ${newName}.`);
        }
        else {
            console.log(`Không tìm thấy học sinh ID ${id}`);
        }
    }
}
_Students.push(new _Student(1, "Khanh"));
_Students.push(new _Student(2, "Khanh2"));
_Students.push(new _Student(3, "Khanh3"));
_Students.push(new _Student(4, "Khanh4"));
_Students.push(new _Student(5, "Khanh5"));
_Students.push(new _Student(6, "Khanh6"));
let _class1 = new _Classroom();
let _class2 = new _Classroom();
_class1.addStudentClass(1);
_class1.addStudentClass(2);
_class1.addStudentClass(3);
_class2.addStudentClass(4);
_class2.addStudentClass(5);
_class2.addStudentClass(6);
_class1.showStudents();
_class2.showStudents();
_class1.removeStudent(2);
_class2.editStudent(4, "Khanh4_new");
_class1.showStudents();
_class2.showStudents();
_Students.forEach(student => console.log(student.getInfo()));

"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Ten người dùng: ${this.name}`);
    }
}
class student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Subject: ${this.subject}`);
    }
}
let students = new student("Mh3", "Khanh");
let teachers = new Teacher("LM", "Lập trình");
students.displayInfo();
teachers.displayInfo();

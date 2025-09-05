interface student{
    name:string,
    age:number,
    email:string
}

let student1:student={
    name:"khanh",
    age:30,
    email:"khanh123@gmail.com"
}
function printInfo(student:student):void{
    console.log(`Tên tôi là: ${student.name}, tôi ${student.age} tuổi, emai là: ${student.email}`)
}

printInfo(student1)
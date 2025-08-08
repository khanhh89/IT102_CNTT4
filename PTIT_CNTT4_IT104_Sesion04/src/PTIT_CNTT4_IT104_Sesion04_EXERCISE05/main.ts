type person={
    name:string,
    age:number
}

type Employee ={
    employee:string,
    deparment:string
}

type StaffMember  = person & Employee

function printInfor(staff:StaffMember  ):void{
    console.log(`Nhân viên: ${staff.name}, tuổi: ${staff.age},mã nhân viên: ${staff.employee}, phòng: ${staff.deparment}`)   
}

const staff:StaffMember  ={
    name:"Khanh",
    age:30,
    employee:"MD05",
    deparment:"06"
}

printInfor(staff)
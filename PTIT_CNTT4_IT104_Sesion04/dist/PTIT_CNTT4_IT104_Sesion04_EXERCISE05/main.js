function printInfor(staff) {
    console.log(`Nhân viên: ${staff.name}, tuổi: ${staff.age},mã nhân viên: ${staff.employee}, phòng: ${staff.deparment}`);
}
const staff = {
    name: "Khanh",
    age: 30,
    employee: "MD05",
    deparment: "06"
};
printInfor(staff);

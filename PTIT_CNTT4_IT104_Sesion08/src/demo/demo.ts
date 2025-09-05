// //generric
// //vviết mã linh hoạt, tái sử dụng cao

// function generric<T>(param:T):T{
//     return param
// }
// generric("1")
// generric(1)
// generric(true)

// //1>kiểu mảng
// let numbers:number[]=[1,2]
// let number:Array<number> = [1,5] 
// let studenName:Array<string>=["cu"]

// //2.kiểu Record
// let user_Info:Record<string, string|number>={
//     name:"lon",
//     age: 20
// }

// //3. Kiểu partial(kiểu tùy chọn, lựa chọn)
// interface contact{
//     email:string
//     phone:string
// }
// let partialUser:Partial<contact>={
//     email:"khanh@gmail.com",
// }

// //4.kiểu readonly: chỉ đọc, hiển thị không được cập nhật chỉnh sửa
// interface Score{
//     x:number
//     y:number
// }
// const score1:readonly<Score> = {
//     x:10,
//     y:8
// }
// score1.x = 0

// //5.Pick (chọn)
// interface User{
//     id:string
//     name:string
//     email:string
//     address:string
//     salary:string

// }
// let user1:Pick<User,"name"|"address">={
//     name:"khanh",
//     address:"se"
// }

// //6.omit loại bỏ 1 số key không cần thiết
// let user2:Omit<User, "salary">={
//     id:"00",
//     name:"cu",
//     email:"ssss",
//     address:"HN"
// }


let fistName:string = "john"
let lastName:string = "doe"

fistName = fistName[0].toUpperCase() + fistName.slice(1);
lastName = lastName[0].toUpperCase() + lastName.slice(1);

let fullname = fistName + " " + lastName
console.log('====================================');
console.log(fullname);
console.log('====================================');
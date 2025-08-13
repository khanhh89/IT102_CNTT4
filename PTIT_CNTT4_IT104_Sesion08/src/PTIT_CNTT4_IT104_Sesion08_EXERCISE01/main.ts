enum weekDays{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

for(let day in weekDays){
    if(isNaN(Number(day))){
        console.log(day)
    }
}
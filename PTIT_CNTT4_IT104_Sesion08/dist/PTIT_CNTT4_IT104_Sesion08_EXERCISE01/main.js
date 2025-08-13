"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 0] = "Monday";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
    weekDays[weekDays["Saturday"] = 5] = "Saturday";
    weekDays[weekDays["Sunday"] = 6] = "Sunday";
})(weekDays || (weekDays = {}));
for (let day in weekDays) {
    if (isNaN(Number(day))) {
        console.log(day);
    }
}

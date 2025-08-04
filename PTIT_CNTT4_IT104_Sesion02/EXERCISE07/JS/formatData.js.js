export function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let formattedDay;
    let formattedMonth;
    if (day < 10) {
        formattedDay = "0" + day;
    } else {
        formattedDay = day;
    }
    if (month < 10) {
        formattedMonth = "0" + month;
    } else {
        formattedMonth = month;
    }
    return `${formattedDay}/${formattedMonth}/${year}`;
}
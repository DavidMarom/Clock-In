
function prevMonth(array) {
    const currYear = array[0];
    const currMonth = array[1];
    let prevMonth = [currYear, currMonth];

    if (currMonth < 2) {
        prevMonth[0] = prevMonth[0] - 1;
        prevMonth[1] = 12;
    } else {
        prevMonth[1] = prevMonth[1] - 1;
    }

    return prevMonth;
}

function getLast3Months() {
    let last3 = [];

    let currentTime = new Date()
    const currYear = currentTime.getFullYear();
    const currMonth = currentTime.getMonth() + 1;

    last3.push(prevMonth([currYear, currMonth]));
    last3.push(prevMonth(last3[0]));
    last3.push(prevMonth(last3[1]));

    return last3;
}

export const timeService = {
    getLast3Months,
    prevMonth
}
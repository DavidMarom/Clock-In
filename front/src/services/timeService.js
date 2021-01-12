// Returns: [YYYY, MM]
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

// Returns: [[YYYY, MM], [YYYY, MM], [YYYY, MM]]
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

// Returns: [hh, mm]
function sumHours(user, targetMonth) {

    // if there is no such year
    if (!user.hours[targetMonth[0]]) return 0;

    // if there is no such month
    if (!user.hours[targetMonth[0]][targetMonth[1]]) return 0;

    let hours = Object.entries(user.hours[targetMonth[0]][targetMonth[1]]);
    let sum = 0;
    hours.forEach(
        day => {
            if (day[1].length > 1) { sum += (day[1][1] - day[1][0]); }
        }
    )
    return [Math.floor(sum / 3600), Math.round(((sum / 3600) % 1) * 60)];
}

function numToMonth(num){

    switch (num){
    case 1: return 'Jan';
    case 2: return 'Feb';
    case 3: return 'Mar';
    case 4: return 'Apr';
    case 5: return 'May';
    case 6: return 'Jun';
    case 7: return 'Jul';
    case 8: return 'Aug';
    case 9: return 'Sep';
    case 10: return 'Oct';
    case 11: return 'Nov';
    case 12: return 'Dec';
    default:
        return 'NaM';
    }
}


export const timeService = {
    getLast3Months,
    prevMonth,
    sumHours,
    numToMonth,
}
import httpService from './httpService'

const currentTime = new Date()
const today = currentTime.getDate();
const currYear = currentTime.getFullYear();
const currMonth = currentTime.getMonth() + 1;

function count() {
    return httpService.get(`user/count`);
}

function getUsers(filter, currPage) {
    return httpService.get(`user/${filter}?page=${currPage}`);
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/update2`, user)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    return _handleLogin(user)
}

async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return _handleLogin(user)
}

async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user));

    // if no hours
    if (!user.hours) {
        user = { ...user, hours: {} };
        sessionStorage.setItem('user', JSON.stringify(user))
        update(user);
    }

    // if no year
    if (!user.hours[currYear]) {
        user.hours = { ...user.hours, [currYear]: {} };
        sessionStorage.setItem('user', JSON.stringify(user))
    }

    // if no month
    if (!user.hours[currYear][currMonth]) {
        user.hours[currYear] = { ...user.hours[currYear], [currMonth]: {} };
        sessionStorage.setItem('user', JSON.stringify(user))
    }

    // if no today
    if (!userService.hasToday(user)) {
        user.hours[currYear][currMonth] = { ...user.hours[currYear][currMonth], [today]: [] }
        sessionStorage.setItem('user', JSON.stringify(user))
    }
    return user;
}

function findIdxToMark(suggestions, object) {
    return suggestions.findIndex(suggest => suggest.name === object.name);
}

function hasToday(user) {
    if (user.hours[currYear][currMonth][today]) { return true } else { return false };
}

function hasOutHour(user) {
    if (hasToday(user)) {
        if (user.hours[currYear][currMonth][today].length === 2) { return true } else { return false }

    } else return false
}
function hasInHour(user) {
    if (hasToday(user)) {
        if (user.hours[currYear][currMonth][today].length >= 1) { return true } else { return false }

    } else return false
}

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    findIdxToMark,
    count,
    hasToday,
    hasOutHour,
    hasInHour
};
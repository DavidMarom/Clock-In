import httpService from './httpService'

function getUsers() {
    return httpService.get('user')
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}
function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user)
}

export const guestUser = {
    _id: 'guest',
    email: "guestMode@gmail.com",
    password: "$2b$10$39cdn7dy8waF39X3GJGNBOt5TbXXAnyVOFPX9QZyu5PS7ojW3zh5S",
    fullName: "Guest Mode",
    imgUrl: [
        'https://res.cloudinary.com/dygtul5wx/image/upload/v1600549811/sprint%204/users/guest-user_z4inbq.jpg'
    ],
    prefs: [
        'diet',
        'nutrition',
        'cardio',
        'sport',
        'well-being'
    ]
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    return _handleLogin(user)
}

async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    // const user = await httpService.post(`user`, userCred)
    return _handleLogin(user)
}
async function logout() {
    await httpService.post('auth/logout');
    // await httpService.post('user')
    sessionStorage.clear();
}
function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

function findIdxToMark(suggestions, object) {
    return suggestions.findIndex(suggest => suggest.name === object.name);
}

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    findIdxToMark
};
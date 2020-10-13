const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const saltRounds = 10

async function login(email, password) {
    logger.debug(`auth.service - login with email: ${email}`)
    if (!email || !password) return Promise.reject('email and password are required!')

    const user = await userService.getByEmail(email)
    if (!user) return Promise.reject('Invalid email or password')
    console.log('userPP-',typeof user.password, 'pass-', typeof password);
    const match = await bcrypt.compare(password, user.password)
    console.log('after- ', match);
    if (!match) return Promise.reject('Invalid email or password')
    delete user.password;
    return user;
}

async function signup(email, password, fullName , prefs, imgUrl, income) {
    // console.log(email, password, fullName , prefs, imgUrl);
    logger.debug(`auth.service - signup with email: ${email}, fullName: ${fullName}`)
    if (!email || !password || !fullName || !prefs || !imgUrl) return Promise.reject('all valids are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({email, password: hash , fullName, imgUrl, prefs, income})
}

module.exports = {
    signup,
    login,
}
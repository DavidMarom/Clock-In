const dbService = require('../../services/db.service')
// const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    query2,
    getById,
    getByEmail,
    remove,
    update,
    update2,
    add,
    count
}

async function query(filterBy) {
    let criteria = {};
    if (filterBy != 'undefined' || filterBy != '') { criteria = { name: new RegExp(".*" + filterBy + ".*", 'i') } }
    else { criteria = '' }
    const collection = await dbService.getCollection('user');
    try {
        if (filterBy != undefined || filterBy != '') { var users = await collection.find(criteria).toArray(); }
        else { var users = await collection.find().toArray(); }
        users.forEach(user => delete user.password);

        return users;
    }

    catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function query2(queryPage, pageSize) {
    const collection = await dbService.getCollection('user');
    try {
        var users = await collection.find().skip((queryPage - 1) * pageSize).limit(pageSize).toArray();
        users.forEach(user => delete user.password);

        return users;
    }
    catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}
async function count() {
    const collection = await dbService.getCollection('user');
    try {
        var number = await collection.aggregate([{ $count: "total" }]).toArray();
        return number;
    }
    catch (err) {
        console.log('ERROR: cannot count users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        delete user.password
        // user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
        // user.givenReviews = user.givenReviews.map(review => {
        //     delete review.byUser
        //     return review
        // })


        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}

async function getByEmail(email) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ email })
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${email}`)
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.deleteOne({ "_id": ObjectId(userId) })
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('user')
    user._id = ObjectId(user._id);

    try {
        await collection.replaceOne({ "_id": user._id }, user)
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function update2(user) {
    const collection = await dbService.getCollection('user')
    user._id = ObjectId(user._id);

    try {
        await collection.updateOne({ _id: user._id }, { $set: user })
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}


async function add(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.name = filterBy.txt
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: +filterBy.minBalance }
    }
    return criteria;
}



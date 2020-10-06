
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
}


async function query() {
    // const criteria = _buildCriteria()
    const collection = await dbService.getCollection('task')
    try {
        const task = await collection.find({}).toArray();
        return task
    } catch (err) {
        console.log('ERROR: cannot find tasks')
        throw err;
    }
}

async function getById(taskId) {
    const collection = await dbService.getCollection('task')
    try {
        const task = await collection.findOne({ "_id": ObjectId(taskId) })

        return task
    } catch (err) {
        console.log(`ERROR: while finding activity ${taskId}`)
        throw err;
    }
}

async function remove(taskId) {
    const collection = await dbService.getCollection('task')
    try {
        await collection.deleteOne({ "_id": ObjectId(taskId) })
    } catch (err) {
        console.log(`ERROR: cannot remove task ${taskId}`)
        throw err;
    }
}

async function update(taskId, taskBody) {
    const collection = await dbService.getCollection('task');
    const updateDoc = {
        $set: {
            ...taskBody,
            lastTriedAt: new Date(Date.now()).toLocaleDateString(),
            triesCount: taskBody.triesCount + 1
        }
    }

    try {
        return await collection.updateOne({ "_id": ObjectId(taskId) }, updateDoc)
    } catch (err) {
        console.log(`ERROR: cannot update task ${taskId}`)
        throw err;
    }
}

async function add(task) {
    const collection = await dbService.getCollection('task')
    try {
        task.createdAt = new Date(Date.now()).toLocaleDateString()
        await collection.insertOne(task);
        return task;
    } catch (err) {
        console.log(`ERROR: cannot insert task`)
        throw err;
    }
}




// function _buildCriteria(filterBy) {
//     const criteria = {};
//     for (const key in filterBy) {
//         console.log(filterBy[key]);
//         if (filterBy[key] !== 'null') {
//             criteria[key] = { $regex: new RegExp(filterBy[key], 'i') }
//         }
//     }
//     return criteria;
// }
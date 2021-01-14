const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = { query,update2 }

async function query() {
    const collection = await dbService.getCollection('settings');
    try {
        console.log('settings service');
        var settings = await collection.find().toArray();
        return settings;
    }
    catch (err) {
        console.log('ERROR: cannot find settings')
        throw err;
    }
}


async function update2(set) {
    const collection = await dbService.getCollection('settings')
    try {
        await collection.updateOne({ _id: set._id }, { $set: set })
        console.log('back service',set );
        return set
    } catch (err) {
        console.log(`ERROR: cannot update set ${set._id}`)
        throw err;
    }
}
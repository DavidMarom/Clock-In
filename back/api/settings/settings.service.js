const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = { query }

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
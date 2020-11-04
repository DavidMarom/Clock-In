const MongoClient = require('mongodb').MongoClient;
const ex = require('./pass');

const uri = 'mongodb+srv://joeAdmin:' + ex.db_pass + '@cluster0.jtvmy.mongodb.net/?retryWrites=true&w=majority';

const config = require('../config')

module.exports = {
    getCollection
}

// Database Name
const dbName = 'joe_db';

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        console.log('try');
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}
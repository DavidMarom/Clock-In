const MongoClient = require('mongodb').MongoClient;
// const uri = `mongodb+srv://xxx:xxxx@cluster0.iyehd.mongodb.net/?retryWrites=true&w=majority`
const uri = `mongodb://localhost:27017`


const config = require('../config')

module.exports = {
    getCollection
}

// Database Name
const dbName = 'hijoe_db';

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        console.log(uri);
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}
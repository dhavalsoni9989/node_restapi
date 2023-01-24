const MongoConnection = require('./mongoConn');

const connection = new MongoConnection(process.env.MONGO_URI);

module.exports = { connection, MongoConnection };

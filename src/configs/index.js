const { createConnection } = require('mongoose');

class MongoConnection {
  _connect = null;
  constructor() {
    this._connect = createConnection();
  }
  async connect() {
    this._connect.openUri(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB,
      autoIndex: true,
      keepAlive: true,
    });
    return await this._connect.asPromise();
  }
}

const connection = new MongoConnection();

module.exports = { connection, MongoConnection };

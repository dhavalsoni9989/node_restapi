const { createConnection } = require('mongoose');

module.exports = class MongoConnection {
  _connect = null;
  mongoUri = null;
  constructor(mongoUri) {
    this._connect = createConnection();
    this.mongoUri = mongoUri;
  }
  async connect() {
    this._connect.openUri(this.mongoUri, {
      autoIndex: true,
      keepAlive: true,
      useNewUrlParser: 'true',
      useUnifiedTopology: 'true',
    });
    return await this._connect.asPromise();
  }
};

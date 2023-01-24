const express = require('express');
const bodyParser = require('body-parser');
const { ValidationError } = require('express-validation');
const { connection } = require('./configs');
const routes = require('./routes');
const app = express();
app.use(bodyParser.json());

app.use('/', routes);

app.use(function (err, req, res) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

connection
  .connect()
  .then((connection) => {
    if (connection.readyState === 1) {
      console.log('MongoDb Connected');
      listen();
    } else {
      console.log('Unable to connect mongodb');
    }
  })
  .catch((err) => {
    console.log('err :::: ', err);
    process.exit(1);
  });

/*
const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
}; */

const unexpectedErrorHandler = (error) => {
  console.error(error);
  //exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  /* if (server) {
    server.close();
  } */
});

function listen() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

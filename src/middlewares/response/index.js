var express = require('express');
var app = express();

// Overwrite res.send
app.use(function (req, res, next) {
  var temp = res.send;
  res.send = function () {
    console.log('do something..');
    temp.apply(this, arguments);
  };
  next();
});

app.use(function (req, res, next) {
  var json = res.json;
  res.json = function (obj) {
    function delete_null_properties(obj) {
      // ...
    }
    delete_null_properties(obj);

    json.call(this, obj);
  };
  next();
});

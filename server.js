var express = require('express');
var app = express();
var mongoose = require('mongoose');
const config = require('./configuration/database');
var port = process.env.PORT || 8080;

const options = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  useNewUrlParser: true,
  bufferMaxEntries: 0
};

mongoose.connect(config.uri, options, (err) => {
  if (err) {
    console.log('Could not connect to database: ', err);
  } else {
    console.log('Connected to database: ' + config.db);
  }
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
var express = require('express');
var app = express();
const router = express.Router();
var mongoose = require('mongoose');
const config = require('./configuration/database'); // Mongoose Configuration
const path = require('path');
const customer = require('./routes/customer')(router); //import customer routes
const order = require('./routes/order')(router); //import user routes
const bodyParser = require('body-parser');
const cors = require('cors');
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

app.use('./customer', customer);
app.use('./order', order);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});



var express = require('express')
var app = express()

// import grobal config parameter
var config = require('./config.js');

// import middleware to log
var log = require('./middleware/log.js')

app.use(log())

app.get('/', (req, res) => {
  res.send({"result_status": true})
})

app.listen(config.Port)
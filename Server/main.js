var express = require('express')
var app = express()

// import grobal config parameter
var config = require('./config.json');

// import middleware to log
var log = require('./middleware/log.js')

app.use(log())

app.get('/', (req, res) => {
  res.send({"result_status": true, "name": "啊旭"})
})

app.listen(config.Port)
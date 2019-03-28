var express = require('express')
var app = express()

var log = require('./middleware/log.js')

app.use(log())

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(80)
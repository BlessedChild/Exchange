var express = require('express')
var app = express()

// import grobal config parameter
var config = require('./config.json');

// import render engine "slog"
var slog = require('slog-engine');
app.engine('slog', slog()); // define the template engine
app.set('views', './views') // specify the views directory
app.set('view engine', 'slog') // register the template engine

// import middleware to log
var log = require('./middleware/log.js')

app.use(log())

// app.get('/', (req, res) => {
//   res.send({"result_status": true, "name": "啊旭"})
// })

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(config.Port)
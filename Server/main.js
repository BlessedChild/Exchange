var express = require('express');
var app = express();

// import grobal config parameter
var config = require('./config.json');

// import render engine "slog"
var slog = require('slog-engine');
app.engine('slog', slog()); // define the template engine
app.set('views', './views'); // specify the views directory
app.set('view engine', 'slog'); // register the template engine

// import middleware to log
var log = require('arthurslog-log');

app.use(log());

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
})

if(config.Mode == "online"){
    app.listen(config.Port);
}else if(config.Mode == "developing"){
    app.listen(config.DevPort);
}

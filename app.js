var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var routes = require('./routes/index');

var app = express();

//Nunjucks setup
nunjucks.configure('views', {
	autoescape: true,
	express: app
});
app.set('view engine', 'nunjucks');

// Routes setup
app.use('/', routes);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

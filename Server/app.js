var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var marqueRouter = require('./routes/marque');
var garageRouter = require('./routes/garage');
var voitureRouter = require('./routes/voiture');

var app = express();

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://89.156.148.2:8080');
	res.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.30:8080');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/marque', marqueRouter);
app.use('/voiture', voitureRouter);
app.use('/garage', garageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

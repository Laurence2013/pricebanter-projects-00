const path = require('path');

const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const logger = require('morgan');

const indexRouter = require('./routes/index.js');
const connectToMongoDb = require('./databases/mongodb');

const app = express();

connectToMongoDb();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(function(req,res,next){
	next(createError(404));
});
app.use(function(err,req,res,next){
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let helmet = require('helmet');
let morgan = require('morgan');
let fs = require('fs');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let gradesRouter = require('./routes/grades');

let app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.disable("x-powered-by");
app.enable('trust proxy');
app.enable("strict routing");
app.enable('case sensitive routing');
app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grades', gradesRouter);


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

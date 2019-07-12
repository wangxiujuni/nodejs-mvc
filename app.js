var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment = require('moment');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



// 重定向来自/api的所有请求
app.get('/api/*', function (req, res) {
  var url = "http://localhost:3031/"+req.originalUrl.toString().substring(5,req.originalUrl.toString().length);
  res.redirect(url)  
  });   

/*nodemon app.js 启动项目*/
var debug = require('debug')('my-application'); // debug模块  
app.set('port', process.env.PORT || 3032); // 设定监听端口  

//启动监听  
var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});
/*nodemon app.js*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var req = require('request');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var books = require('./routes/books');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/books', books);

function Goodreads(dev, sec) {
	this.keys = {
		'developer' : GOODREADS_KEY,
		'secret' : GOODREADS_SECRET
	}
};

  Goodreads.prototype.getBook = function(title) {
  	options = {
  		url : 'https://www.goodreads.com/search/index.xml',
  		form : {
        'q': 'Harry Potter',
  			'key' : this.keys.developer,
  		}
  	}
  	req.get(options, function(err, response, body) {
  		return response;
  	});
  };

app.get('/books', function(err, res){
  var book = gr.getBook('Harry Potter');
  console.log(book);
  res.send(book);
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

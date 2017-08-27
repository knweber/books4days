'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Book = require('./model/books');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3000;

var mongoDB = 'mongodb://knweber:Brewers2016@ds157873.mlab.com:57873/books4days';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req,res){
  res.json({ message: 'API initialized!' });
});

router.route('/books').get(function(req,res){
  Book.find(function(err,books) {
    if (err)
    res.send(err);
    res.json(books)
  });
})
.post(function(req,res) {
  var book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;

  book.save(function(err) {
    if (err)
    res.send(err);
    res.json({ message: 'Book was successfully added!' });
  });
});

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});

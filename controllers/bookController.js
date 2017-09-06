var Book = require('../models/book');
var app = require('../app');
var expressValidator = require('express-validator');

exports.bookinstance_search_get = function(req, res, next) {

  Book.find({}, 'title')
  .exec(function(err, books) {
    if(err) { return next(err); }
    res.render('bookinstance_form', {title: 'Search', book_list: books});
  });
};

exports.book_search_post = function(req, res, next) {
  req.checkBody('title', 'Title must be specified.').notEmpty();
  req.sanitize('title').escape();
  req.sanitize('title').trim();

  var bookInstance = new BookInstance({
    title: req.body.book
  });

  bookInstance.save(function(err) {
    if(err) { return next(err); }
    res.redirect(bookinstance.url);
  })
}

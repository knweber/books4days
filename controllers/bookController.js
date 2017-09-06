var Book = require('../models/book');
var app = require('../app');
var expressValidator = require('express-validator');

exports.book_search_form = function(req, res, next) {

  req.checkBody('title', 'Title required').notEmpty();
  req.sanitize('title').escape();
  req.sanitize('title').trim();

  var errors = req.validationErrors();
  
  Book.find({}, 'title')
  .exec(function(err, books) {
    if(err) { return next(err); }
    res.render('bookinstance_form', {title: 'Search', book_list: books});
  });
};

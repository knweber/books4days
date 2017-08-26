'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
  title: String,
  author: String
});

module.exports = mongoose.model('Book', BooksSchema);

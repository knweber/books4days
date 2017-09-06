var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET books listing. */
// router.get('/', function(req, res, next) {
//   var books = req.get('https://www.goodreads.com/search/index.xml', {form: {
//     'key': process.env.GOODREADS_KEY,
//     'q': 'Harry Potter'
//   }});
//   return res.json(books);
// });

module.exports = router;

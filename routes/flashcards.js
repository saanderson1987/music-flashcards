var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const flashcardNames = fs.readdirSync(path.join(__dirname,'../public/images/flashcards'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base', { view: 'flashcards', flashcardNames: JSON.stringify(flashcardNames)});
});

module.exports = router;

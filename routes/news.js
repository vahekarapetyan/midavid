var express = require('express');
var router = express.Router();

/* GET News page. */
router.get('/', function(req, res, next) {
  res.render('pages/news', { title: 'David Minasyan' });
});

module.exports = router;

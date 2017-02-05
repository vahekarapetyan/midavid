var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('pages/contact', { title: 'David Minasyan' });
});

module.exports = router;

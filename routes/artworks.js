var express = require('express');
var router = express.Router();

/* GET Artworks page. */
router.get('/', function(req, res, next) {
  res.render('pages/artworks', { title: 'David Minasyan' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET Chronic page. */
router.get('/', function(req, res, next) {
  res.render('pages/chronic', { title: 'David Minasyan' });
});

module.exports = router;

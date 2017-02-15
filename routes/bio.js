var express = require('express');
var router = express.Router();

/* GET the Bio page. */
router.get('/', function(req, res, next) {
    res.render('pages/bio', { title: 'David Minasyan' });
});

module.exports = router;

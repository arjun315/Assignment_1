var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/services', function(req, res, next) {
  res.render('services');
});


router.get('/error', function(req, res, next) {
  res.render('error', { title: 'error' });
});

module.exports = router;

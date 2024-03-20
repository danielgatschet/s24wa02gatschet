var express = require('express');
var router = express.Router();

var product = 1
var factor = 1
var value

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor += 1
  value = product * factor
  res.send('Product is: ' + value);
});

module.exports = router;

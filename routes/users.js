var express = require('express');
var router = express.Router();

/* GET home page. */
router.put('/:id', function(req, res) {
	console.log(req.params)
  res.send('/users get was hit');
});

module.exports = router;

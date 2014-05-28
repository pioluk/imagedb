var express = require('express');
var router = express.Router();

var Image = require('./../models/image');

/* GET home page. */
router.get('/', function(req, res) {
  Image.find().sort('-createdAt').exec(function(err, images) {
    if (err) {
      console.error(err);
      return next(err);
    }

    res.render('index', {title: 'Images', images: images});
  });

});

module.exports = router;

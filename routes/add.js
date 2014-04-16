var express = require('express');
var router = express.Router();
var Image = require('./../models/image');

router.post('/', function(req, res) {
  var image = new Image({
    slug: req.body.image_slug ||  parseInt(Math.random() * 10e12).toString(16),
    title: req.body.image_title || 'undefined',
    url: req.body.image_url
  });

  image.save(function(err) {
    if (err) {
      throw err;
    }
    else {
      res.redirect('/');
    }
  });
});

module.exports = router;

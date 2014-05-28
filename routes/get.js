var express = require('express');
var router = express.Router();
var Image = require('./../models/image');

router.get('/', function(req, res) {
  Image.find().sort('-createdAt').exec(function(err, images) {
    if (err) {
      console.error(err);
      return next(err);
    }

    res.json(images);
  });
});

module.exports = router;

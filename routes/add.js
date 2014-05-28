var express = require('express');
var router = express.Router();
var Image = require('./../models/image');

router.post('/', function(req, res) {
  Image.create({
    title: req.body.title || 'undefined',
    url: req.body.url || 'no url'
  }, function(err, image) {
    if (err) {
      throw err;
    }

    Image.find().sort('-createdAt').exec(function(err, images) {
      if (err) {
        console.error(err);
      }

      res.json(images);
    });
  });
});

module.exports = router;

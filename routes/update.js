var express = require('express');
var router = express.Router();
var Image = require('./../models/image');

router.put('/:id', function(req, res) {
  var title = req.body.title;
  var url = req.body.url;

  Image.findOne({_id: req.params.id}, function(err, image) {
    if (err)
      throw err;

    if (title) {
      image.title = title;
    }
    else {
      image.title = image.title;
    }

    if (url)
      image.url = url;
    else
      image.url = image.url;

    image.save(function(err) {
      if (err)
        console.error(err);

      Image.find().sort('-createdAt').exec(function(err, images) {
        if (err) {
          console.error(err);
          return next(err);
        }

        res.json(images);
      });
    });
  });
});

module.exports = router;

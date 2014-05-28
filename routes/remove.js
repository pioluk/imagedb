var express = require('express');
var router = express.Router();
var Image = require('./../models/image');

router.delete('/:id', function(req, res) {
  Image.remove({_id: req.params.id}, function(err) {
    if (err) {
      console.error(err);
      res.render('errror', {error: err});
    }

    Image.find().sort('-createdAt').exec(function(err, images) {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.json(images);
    });
  });
});

module.exports = router;

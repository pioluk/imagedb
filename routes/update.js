var express = require('express');
var router = express.Router();
var Image = require('./../models/image');

router.post('/:slug', function(req, res) {
  var title = req.body.image_title;
  var url = req.body.image_url;

  Image.findOne({slug: req.params.slug}, function(err, image) {
    if (err)
      throw err;

    console.log(title);
    console.log(url);

    if (title)
      image.title = title;
    else
      image.title = image.title;

    if (url)
      image.url = url;
    else
      image.url = image.url;

    image.save(function(err2) {
      if (err2)
        console.error(err2);

      res.redirect('/');
    });
  });
});

module.exports = router;

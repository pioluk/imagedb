var express = require('express');
var router = express.Router();
var Image = require('./../models/image');

router.get('/:slug', function(req, res) {
  Image.remove({slug: req.params.slug}, function(err) {
    if (err) {
      console.error(err);
      res.render('errror', {error: err});
    }
    else {
      console.log('Note \'' +  req.params.slug +'\' removed successfully');
    }

    res.redirect('/');
  })
});

module.exports = router;

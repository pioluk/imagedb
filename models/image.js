var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    // required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema);

var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema);

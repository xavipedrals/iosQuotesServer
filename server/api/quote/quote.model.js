'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var QuoteSchema = new mongoose.Schema({
  quote: String,
  author: String,
  background: String,
  authorBackground: String
});

export default mongoose.model('Quote', QuoteSchema);

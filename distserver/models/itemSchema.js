'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  description: String,
  category: String,
  condition: String,
  url: String
});

exports.default = mongoose.model('Item', ItemSchema);
//Change to import (ES6) - Harold
let mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
  description: String,
  category: String,
  condition: String,
  url: String
});

export default mongoose.model('Item', ItemSchema);

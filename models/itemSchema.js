// since the server is using babel-node - we can use ES6 import 
// instead of require - Harold
let mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
  description: String,
  category: String,
  condition: String,
  url: String
});

export default mongoose.model('Item', ItemSchema);

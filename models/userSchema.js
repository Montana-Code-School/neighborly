// since the server is using babel-node - we can use ES6 import
// instead of require - Harold
let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  name: String,
  bio: String,
  neighborhood: String
});

module.exports = mongoose.model('User', UserSchema);

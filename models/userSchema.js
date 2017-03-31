// since the server is using babel-node - we can use ES6 import
// instead of require - Harold
let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  neighborhood: String
});

export default mongoose.model('User', UserSchema);

// Change to ES6 (import)- Harold
let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  neighborhood: String
});

export default mongoose.model('User', UserSchema);

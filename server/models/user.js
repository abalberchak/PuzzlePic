var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  username: {type: String, required: true, minlength: 2, maxlength: 20}
})
console.log("TESTING HARAMBE DATABASE");
var User = mongoose.model('User', UserSchema);

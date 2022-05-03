const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:  {type : String , required : true},
  password:  {type : String , required : true},
  tracks : [{type : Schema.Types.ObjectId , ref : 'track'}]
});

const User = mongoose.model('users', UserSchema)
module.exports = User
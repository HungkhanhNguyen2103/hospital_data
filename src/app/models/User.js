const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name:  String,
  level:  String,
});

module.exports = mongoose.model('User',User , 'user')
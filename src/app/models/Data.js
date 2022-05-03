const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    position:  {type : Array , required : true},
});

const Data = mongoose.model('datas', DataSchema)
module.exports = Data
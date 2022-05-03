const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    name:  {type : String , required : true},
    address:  {type : String , required : true},
    representative:  {type : String , required : true},
    phoneNumber:  {type : String , required : true},
});

const Hospital = mongoose.model('hospitals', HospitalSchema)
module.exports = Hospital
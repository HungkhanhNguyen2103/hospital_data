const Hospital = require('../models/Hospital')

class HospitalController{
    //[Get] getData
    getListData(req,res){
        Hospital.find({}, function (err, hospital) {
            res.json(hospital)
        });
    }
}

module.exports = new HospitalController;
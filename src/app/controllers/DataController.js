const Data = require('../models/Data')

class DataController{
    //[Get] getData
    getListData(req,res){
        Data.find({}, function (err, data) {
            res.json(data)
        });
    }
}

module.exports = new DataController;
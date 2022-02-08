const User = require('../models/User')
class NewsController{
    
    //[GET] /news
    index (req , res){
        // User.find({}, function (err, user) {
        //    if(!err) res.json({user : user})
        // })
        // //    res.json({
        // //        err : 'Error'
        // //    })
        //   });
        res.render('search')
    }

    //[POST] /search/create
    create(req,res){
    //    res.json(req.body)
    const user = new User(req.body)
    user.save()
    //    console.log(req.body);
        res.send('Danh an Cuc')
    }

    // [DELETE] /item/:id
    delete(req,res,next){
        res.send('Danh an Cuc')
        User.deleteOne({_id : req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

}

module.exports = new NewsController;
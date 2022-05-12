// const Student = require('../models/Student');
const axios = require("axios");
const nodemailer = require('nodemailer')



class SendEmailController{
    
    //[Get] getData
    async sendEmail(req,res){
            
        const result = await axios.post(process.env.API_SIGN_TOKEN , req.body)
        res.json(result.data)
        if(result.data.success === true){
          let transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.SERVER_PORT,
            auth: {
              user: process.env.AUTH_USER, // generated ethereal user
              pass: process.env.AUTH_PASSWORD, // generated ethereal password
            },
        });
       
        let info = await transporter.sendMail({
            from: process.env.AUTH_USER, // sender address
            to: req.body.email, // list of receivers
            subject: `Xác thực email người dùng`, // Subject line // plain text body
            html: `<span><h1>Xin chào  ${result.data.username} !</h1> <p> Bạn cần truy cập đường link <a href=${process.env.API_CONFIRM + result.data.accessToken }>${'http://localhost:3000/success?jwt=' + result.data.accessToken}</a> để xác thực email</p></span>`, // html body
            
          });

          // create template renderer
          // const templates = new EmailTemplates();


          transporter.sendMail(info , function (err,infomation){
              if(err){
                  console.log(err);
                  return;
              }
              console.log("Sent " , infomation.response);
              return res.send("OK")
          }) 
        } 
     
    }


    async sendEmailScore (req, res ){
        res.json("abc")
    }
}

module.exports = new SendEmailController;
const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://hungkhanh2103:0123654798a@BlogTest.gzbdq.mongodb.net/BlogTest?retryWrites=true&w=majority');
        console.log('Connect success!');
    } catch(err){
        console.log(err);
    }
}

module.exports = { connect }
const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://dacduy:mu@hospital-data.lqo4j.mongodb.net/hospitalData?retryWrites=true&w=majority');
        console.log('Connect success!');
    } catch(err){
        console.log(err);
    }
}

module.exports = { connect }
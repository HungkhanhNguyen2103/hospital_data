const express = require('express') //thư viện được cài
const { engine } = require('express-handlebars')
const path  = require('path')
const app = express() //() toán tử call
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

const route = require('./routes')

const db = require('./config/db')
const cors = require('cors')

//Connect to DB
db.connect();

app.use(cors())

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views',path.join(__dirname,'resources/views'))


// //xu ly form
// app.use(express.urlencoded())
// //xu ly data
// app.use(express.json())

//routes init
route(app);




// 127.0.0.1 - localhost ánh xạ

app.listen(process.env.PORT || 8888)
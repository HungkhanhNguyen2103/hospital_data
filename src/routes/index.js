const newsRouter = require('./news')

function route(app){


    // app.get('/', (req, res) => { //arrow funcion
    //     res.render('home')
    //   })
      

    // app.get('/search', (req, res) => { //arrow funcion
    //   res.render('search')
    // })
    
    // app.post('/search/create',(req,res) => {
    //   console.log(req);
    //   res.send('abc')
    // })

      app.use('/search', newsRouter)

      // app.use('/', newsRouter)
      
}

module.exports = route;
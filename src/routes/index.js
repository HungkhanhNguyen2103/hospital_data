const dataRouter = require('./data')
const hospitalRouter = require('./hospital')

function route(app){


      app.use('/data', dataRouter)
      app.use('/yte', hospitalRouter)

      // app.use('/', newsRouter)
      
}

module.exports = route;
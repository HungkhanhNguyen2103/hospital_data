const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/NewsController')

// newController.index

router.post('/create', newController.create)
router.delete('/delete/:id',newController.delete)
router.get('/',newController.index)



module.exports = router
const express = require('express')
const router = express.Router()


const sendEmailController = require('../app/controllers/SendEmailController')


// newController.index

// router.post('/create', dataController.createPosition)
// router.delete('/delete/:id',newController.delete)
// router.get('/:userId',newController.getUser)
router.post('/scores',sendEmailController.sendEmailScore)
router.post('/',sendEmailController.sendEmail)



module.exports = router
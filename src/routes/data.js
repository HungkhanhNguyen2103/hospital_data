const express = require('express')
const router = express.Router()

const dataController = require('../app/controllers/DataController')


// newController.index

// router.post('/create', newController.create)
// router.delete('/delete/:id',newController.delete)
// router.get('/:userId',newController.getUser)
// router.post('/:userId/track',newController.createTrack)
// router.get('/:userId/track',newController.getTrack)
router.get('/',dataController.getListData)



module.exports = router
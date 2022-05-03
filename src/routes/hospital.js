const express = require('express')
const router = express.Router()

const HospitalController = require('../app/controllers/HospitalController')


// newController.index

// router.post('/create', newController.create)
// router.delete('/delete/:id',newController.delete)
// router.get('/:userId',newController.getUser)
// router.post('/:userId/track',newController.createTrack)
// router.get('/:userId/track',newController.getTrack)
router.get('/',HospitalController.getListData)



module.exports = router
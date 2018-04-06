const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/vibe')

router.get('/', ctrl.getAllUsers)

router.get('/:id', ctrl.getUserById)

router.get('/images/:id', ctrl.getUserImages)

router.get('/friends/:id', ctrl.getFriends)

router.get('/search/:input', ctrl.search)


//create profile
router.post('/profile/', ctrl.createProfile)

//update
router.put('/:id', ctrl.updateProfile)

router.post('/images/:id', ctrl.uploadImage)

module.exports = router
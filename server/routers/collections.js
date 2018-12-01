const router = require('express').Router()
const controller = require('../controllers/collections')
const checkAuth = require('../middleware/auth')

router.post(
    '/share', 
    checkAuth,
    controller.shareCollections
)

module.exports = router
const router = require('express').Router()
const controller = require('../controllers/collections')
const checkAuth = require('../middleware/auth')
const { check } = require('express-validator/check')

router.post(
    '/invites',
    [
        check('email_to').isEmail(),
    ], 
    checkAuth,
    controller.inviteCollections
)

router.get(
    '/invites/accept',
    checkAuth,
    controller.acceptCollectionsInvitation
)

module.exports = router
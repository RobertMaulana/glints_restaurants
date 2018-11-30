const router = require('express').Router()
const controller = require('../controllers/auth')
const { check } = require('express-validator/check')

router.post(
    '/signup', 
    [
        check('email').isEmail(),
        check('password').isLength({ min: 5 })
    ],
    controller.signup
)

router.post(
    '/signin', 
    [
        check('email').isEmail(),
        check('password').isLength({ min: 5 })
    ],
    controller.signin
)

module.exports = router
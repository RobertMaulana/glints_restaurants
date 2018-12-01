const router = require('express').Router()
const controller = require('../controllers/restaurants')
const checkAuth = require('../middleware/auth')
const { check } = require('express-validator/check')
const { sanitize } = require('express-validator/filter')

router.get(
    '/', 
    checkAuth,
    controller.getRestaurants
)

router.get(
    '/detail/:id', 
    checkAuth,
    controller.getDetailRestaurant
)

router.get(
    '/find', 
    checkAuth,
    controller.getRestaurantsByDate
)

router.post(
    '/collections', 
    checkAuth,
    [
        check('id_restaurant').exists(),
        sanitize('id_restaurant').toInt(),
        check('name').exists()
    ],
    controller.addCollections
)

module.exports = router
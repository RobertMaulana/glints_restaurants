const router = require('express').Router()
const controller = require('../controllers/restaurants')
const checkAuth = require('../middleware/auth')

router.get(
    '/', 
    checkAuth,
    controller.getRestaurants
)

router.get(
    '/find', 
    checkAuth,
    controller.getRestaurantsByDate
)

module.exports = router
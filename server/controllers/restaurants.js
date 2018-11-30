const Restaurants = require('../models/restaurants')

const getRestaurants = async (req, res) => {
    let response
    try {
        response = await Restaurants.findAll({})
    } catch (error) {
        console.error(error.errors)
        if (error.errors && error.errors.length > 0) {
            const first = error.errors[0]
            return res.status(400).json({ message: first.message })
        }
        return res.status(500).json({ message: error.message })
    }
    res.status(200).json(response)
}

module.exports = {
    getRestaurants
}
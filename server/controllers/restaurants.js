const Restaurants = require('../models/restaurants')
const Sequelize = require('sequelize')
const $ = Sequelize.Op

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

const getRestaurantsByDate = async (req, res) => {
    const {q} = req.query
    if (q === '' || Object.values(req.query).length < 1) {
        return res.status(400).json({ message: 'Query can not empty' })
    }
    let response 
    try {
        response = await Restaurants.findAll({
            where: {
                open: {[$.like]: '%' + q + '%'}
            }
        })
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
    getRestaurants,
    getRestaurantsByDate
}
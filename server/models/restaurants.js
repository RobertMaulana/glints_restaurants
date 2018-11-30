const Sequelize = require('sequelize')
const db = require('../db')

const Restaurants = db.define('restaurants', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  open: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  indexes: [
    {
      fields: ['id']
    }
  ]
})

module.exports = Restaurants

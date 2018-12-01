const Sequelize = require('sequelize')
const db = require('../db')

const Collections = db.define('collections', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  restaurantId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  indexes: [
    {
      fields: ['id']
    }
  ]
})

module.exports = Collections

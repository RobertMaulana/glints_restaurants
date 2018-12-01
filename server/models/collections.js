const Sequelize = require('sequelize')
const db = require('../db')

const Collections = db.define('collections', {
  name: {
    type: Sequelize.STRING,
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

const Sequelize = require('sequelize')
const db = require('../db')

const Users = db.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  indexes: [
    {
      fields: ['email']
    }
  ]
})

module.exports = Users

const Sequelize = require('sequelize')
const db = require('../db')
const Collections = require('./collections')
const Restaurants = require('./restaurants')
const Users = require('./users')

const CollectionsRestaurants = db.define('collections_restaurants', {
  collectionId: {
    type: Sequelize.INTEGER,
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

// Association
CollectionsRestaurants.belongsTo(Collections, {foreignKey: 'collectionId'})
Collections.hasMany(CollectionsRestaurants, {foreignKey: 'collectionId'})

CollectionsRestaurants.belongsTo(Restaurants, {foreignKey: 'restaurantId'})
Restaurants.hasMany(CollectionsRestaurants, {foreignKey: 'restaurantId'})

CollectionsRestaurants.belongsTo(Users, {foreignKey: 'userId'})
Users.hasMany(CollectionsRestaurants, {foreignKey: 'userId'})

module.exports = CollectionsRestaurants

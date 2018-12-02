const Sequelize = require('sequelize')
const db = require('../db')

const Invitations = db.define('invitations', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    collectionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    indexes: [
        {
            fields: ['id']
        }
    ]
})

module.exports = Invitations

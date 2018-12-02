const Users = require('../models/users')
const Invitations = require('../models/invitations')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator/check')
const sendInvitation = require('../helpers/sendMail')
const randomToken = require('random-token').gen('89615B84CC6B2C8FBCCDB54CA6B97');

const inviteCollections = async (req, res) => {
    const {email_to, collection_id, user_id} = req.body
    let response
    try {
        response = await Invitations.create({
            email: email_to,
            collectionId: collection_id,
            userId: user_id,
            token: randomToken(24)
        })
        await sendInvitation(response)
    } catch (error) {
        console.error(error)
        if (error.errors && error.errors.length > 0) {
            const first = error.errors[0]
            return res.status(400).json({ message: first.message })
        }
        return res.status(500).json({ message: error.message })
    }
    res.status(200).json(response)
}

const acceptCollectionsInvitation = async (req, res) => {
    res.send('yay, accept')
}

module.exports = {
    inviteCollections,
    acceptCollectionsInvitation
}
const Users = require('../models/users')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator/check')

const shareCollections = async (req, res) => {
    res.send('share collections')
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //     return res.status(422).json({ errors: errors.array() })
    // }
    // const {email, password, fullname} = req.body
    // const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

    // let response
    // try {
    //     response = await Users.create({email, password: encryptedPassword, fullname})
    // } catch (error) {
    //     console.error(error.errors)
    //     if (error.errors && error.errors.length > 0) {
    //         const first = error.errors[0]
    //         return res.status(400).json({ message: first.message })
    //     }
    //     return res.status(500).json({ message: error.message })
    // }
    // res.status(201).json({response})
}

module.exports = {
    shareCollections
}
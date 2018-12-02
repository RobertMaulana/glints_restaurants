const Users = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator/check')
const salt = 'AADE68ADC556389BE4A79AF788DCA'

const signup = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const {email, password, fullname} = req.body
    const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

    let response
    try {
        response = await Users.create({email, password: encryptedPassword, fullname})
    } catch (error) {
        console.error(error.errors)
        if (error.errors && error.errors.length > 0) {
            const first = error.errors[0]
            return res.status(400).json({ message: first.message })
        }
        return res.status(500).json({ message: error.message })
    }
    res.status(201).json({response})
}

const signin = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const {email, password} = req.body

    let response
    try {
        response = await Users.findOne({where: {email}})
        if (response === null) {
            return res.status(404).json({ message: 'User not found' })
        }
        
        const isAuth = await bcrypt.compare(password, response.password)
        
        if (!isAuth) {
            return res.status(401).json({ message: 'Check your password' })
        }
    } catch (error) {
        console.error(error.errors)
        if (error.errors && error.errors.length > 0) {
            const first = error.errors[0]
            return res.status(400).json({ message: first.message })
        }
        return res.status(500).json({ message: error.message })
    }
    
    const token = jwt.sign({ email }, salt)
    res.status(200).json({token})
}

const detailsUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const {token} = req.body
    let response
    try {
        const decoded = jwt.verify(token, salt)
        response = await Users.findAll(
            {attributes: ['id', 'email', 'fullname']},
            {where: {email: decoded.email}}
        )
        if (response.length < 1) {
            return res.status(404).json({ message: 'User not found' })
        }
        
    } catch (error) {
        console.error(error.errors)
        if (error.errors && error.errors.length > 0) {
            const first = error.errors[0]
            return res.status(400).json({ message: first.message })
        }
        return res.status(500).json({ message: error.message })
    }
    
    res.status(200).json({response: response[0]})
}

module.exports = {
    signup,
    signin,
    detailsUser
}
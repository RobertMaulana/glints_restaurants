const jwt = require('jsonwebtoken')
const Users = require('../models/users')

const checkAuth = (req, res, next) => {
    const {authorization} = req.headers
    if (authorization === undefined) {
        if (req.query.hasOwnProperty('token')) {
            const {from, colId, usId, token} = req.query
            res.redirect(`http://localhost:30001/signup?from=${from}&colId=${colId}&usId=${usId}&token=${token}`)
            return
        }
        res.redirect('http://localhost:30001/signup')
    }
    jwt.verify(authorization.split(' ')[1], 'AADE68ADC556389BE4A79AF788DCA', async (error, decoded) => {
        if (error !== null) {
            return res.status(401).json({ message: 'Unauthorized!' })
        }
        let response
        try {

            response = await Users.findOne({where: {email: decoded.email}})
            
            if (response === null) {
                return res.status(401).json({ message: 'Unauthorized!' })
            }

        } catch (error) {
            console.error(error.errors)
            if (error.errors && error.errors.length > 0) {
                const first = error.errors[0]
                return res.status(400).json({ message: first.message })
            }
            return res.status(500).json({ message: error.message })
        }
        
        next()
    })
}

module.exports = checkAuth
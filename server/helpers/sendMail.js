const apiKey = "f7e40058e08c64e407314e4bac68d103-c8e745ec-0c382249";
const domain = "sandbox7f1e0a72ffb54631a182210f68c4306c.mailgun.org";
const mailgun = require("mailgun-js")({ apiKey, domain })
const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')

const file = path.join(__dirname, '..', 'templates', 'invitation.html')
const template = fs.readFileSync(file).toString()

const sendInvitation = (opts = {}) => {
    const {email} = opts
    const data = {
        from: 'no reply <maulana.robert.mr@gmail.com>',
        to: email,
        subject: 'Glints Restaurant Collection Invitation',
        html: Handlebars.compile(template)(opts),
    }
    
    return new Promise((reject, resolve) => {
        mailgun.messages().send(data, (error, body) => {
            if (error !== undefined) {
                reject(error.message)
                return
            }
            resolve(body.message)
        })
    })
}

module.exports = sendInvitation

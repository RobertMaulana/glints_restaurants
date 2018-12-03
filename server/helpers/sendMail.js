require('dotenv').config()
const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const nodemailer = require('nodemailer')
const file = path.join(__dirname, '..', 'templates', 'invitation.html')
const template = fs.readFileSync(file).toString()

const sendInvitation = (opts = {}) => {
    const {email} = opts
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER_MAIL,
                pass: process.env.PASS_MAIL
            }
        })
    
        let mailOptions = {
            from: '"no reply" <no-reply@gmail.com>',
            to: email,
            subject: 'Glints Restaurant Collection Invitation',
            html: Handlebars.compile(template)(opts)
        }
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error)
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })
}

module.exports = sendInvitation

const express = require('express')
const app = express()
const db = require('./db')
const routersAuth = require('./routers/auth')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 30001


// Testing connect db
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
const base = '/api'
app.use(`${base}/auth`, routersAuth)

app.listen(port, () => {
    console.info(`Server is started at port ${port}`)
})
const express = require('express')
const app = express()
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const routersAuth = require('./routers/auth')
const routersRestaurants = require('./routers/restaurants')
const routersCollections = require('./routers/collections')

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
app.use(express.static('assets'))
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
const base = '/api'
app.use(`${base}/auth`, routersAuth)
app.use(`${base}/restaurants`, routersRestaurants)
app.use(`${base}/collections`, routersCollections)
// app.use(`/signup`, (req, res) => {
//   res.send('signup please')
// })
console.log(path.join(__dirname, '../build'))
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.info(`Server is started at port ${port}`)
})
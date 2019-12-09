const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const apiRoutes = require('./routers/api-routes')
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
// Connect to Mongoose and set variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true})
let db = mongoose.connection

if(!db) {
  console.log('Error connection db')
} console.log('db connected successfully')

const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Hello Express...') )

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to spesified port
app.listen(port, () => console.log(`Running resthub on port ${port}`))

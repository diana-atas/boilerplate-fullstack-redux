const express = require('express')
const path = require('path')

// update me
const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// update me
server.use('/api/v1/fruits', fruitRoutes)

module.exports = server

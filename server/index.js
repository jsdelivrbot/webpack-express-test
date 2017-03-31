var express = require('express')
var path = require('path')
require('dotenv').config()
var port = process.env.PORT || 3090
var app = express()

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../dist')))
console.log(process.env.MESSAGE)

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../index.html'))
})

// Server Setup
app.listen(port)
console.log('Server listening on: ' + port)

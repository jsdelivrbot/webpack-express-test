var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

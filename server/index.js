var express = require('express')
var path = require('path')
var port = process.env.PORT || 3090
var app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(port)
console.log('server started on port: ' + port)

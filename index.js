const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const xss = require('xss-clean')
const userRouter = require('./src/router/user.routes')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(xss())
app.use(userRouter)
app.use(express.static('public'))

// jalankan express
app.listen(3009, () => {
  console.log('SERVICE RUNNING ON PORT 3009')
})

module.exports = app

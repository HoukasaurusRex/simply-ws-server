const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const controller = require('./controllers/index')

const normalizePort = require('./utils/normalize-port')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', controller.home)

app.set('port', normalizePort(process.env.PORT || '3000'))

module.exports = app

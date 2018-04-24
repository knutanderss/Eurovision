
require('dotenv').config()
const express = require('express')
const app = express()
const configureMiddleware = require('./Server/src/middleware')
const configureRoutes = require('./Server/src/route')
const configureWebSocket = require('./Server/src/websocket')

configureMiddleware(app)
configureRoutes(app)
configureWebSocket(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

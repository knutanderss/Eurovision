require('dotenv').config()
const express = require('express')
const app = express()
const configureMiddleware = require('./Server/src/middleware')
const configureWebSocket = require('./Server/src/websocket')
const configureRoutes = require('./Server/src/route')

configureMiddleware(app)
configureWebSocket(app)
configureRoutes(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

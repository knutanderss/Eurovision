const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.json()) // for parsing application/json
  app.use(bodyParser.text())
}

module.exports = (app) => {
  const wsInstance = require('express-ws')(app)

  app.ws('/watch', function (ws, req) {
    console.log('Another watcher just connected, total: ', wsInstance.getWss().clients.size)
    ws.send('Success!')
    wsInstance.getWss().clients.forEach(client => {
      console.log(client.send)
      client.send('another connection!')
    })
  })
}

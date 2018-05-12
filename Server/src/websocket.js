const {fetchArtistsVotes} = require('./db');

const sendArtistsVotesToClient = client => {
  fetchArtistsVotes().then(result => {
    client.send(JSON.stringify(result));
  })
}

module.exports = (app) => {
  const wsInstance = require('express-ws')(app)

  app.ws('/watch', function (ws, req) {
    console.log('Another watcher just connected, total: ', wsInstance.getWss().clients.size)
    sendArtistsVotesToClient(ws);
  })

  setInterval(() => {
    wsInstance
      .getWss()
      .clients
      .forEach(sendArtistsVotesToClient);
  }, 2 * 1000);
}
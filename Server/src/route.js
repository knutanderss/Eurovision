const express = require('express')
const path = require('path')
const {putArtist, getArtists, deleteArtist, getVoteOptions, vote} = require('./db')

const sendBackDbError = res => res
  .status(500)
  .send({error: 'Problem with db-connection on server side'})

const sendBackArtists = res => {
  getArtists().then(artists => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(artists))
  }).catch(err => {
    console.log(err)
    sendBackDbError(res)
  })
}

module.exports = (app) => {

  const staticDir = __dirname + "../../../watch/build";
  app.use(express.static(staticDir))

  app.get('/artists', (req, res) => {
    sendBackArtists(res)
  })

  app.get('/voteoptions', (req, res) => {
    getVoteOptions().then(voteOptions => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(voteOptions))
    }).catch(err => {
      console.log(err)
      sendBackDbError(res)
    })
  })

  app.post('/vote', (req, res) => {
    console.log(req.body);
    vote(req.body).catch(console.log);
    res
      .status(200)
      .send();
  })

  app.get('*', (req, res) => {
    return res.sendFile(path.join(staticDir, 'index.html'))
  })
}
const express = require('express')
const path = require('path')
const {
  putArtist,
  getArtists,
  deleteArtist
} = require('./db')

const sendBackDbError = res => res.status(500).send({error: 'Problem with db-connection on server side'})

const sendBackArtists = res => {
  getArtists()
    .then(artists => res.send(JSON.stringify(artists)))
    .catch(err => {
      console.log(err)
      sendBackDbError(res)
    })
}

module.exports = (app) => {

  const staticDir = __dirname + "../../../watch/build";
  app.use(express.static(staticDir))

  app.get('/version', (req, res) => {
    res.send('1')
  })

  app.get('/artists', (req, res) => {
    sendBackArtists(res)
  })

  app.post('/artist', (req, res) => {
    const artist = {name: req.body.name, country: req.body.country, imageURL: req.body.imageURL, number: req.body.number}
    console.log('Client inserts artist: ', artist)

    putArtist(artist)
      .then(sendBackArtists(res))
      .catch(err => sendBackDbError)
  })

  app.post('/artist/delete', (req, res) => {
    const name = req.body.name
    console.log('Client tries to delete artist: ' + name)

    deleteArtist({name})
      .then(sendBackArtists(res))
      .catch(sendBackDbError(res))

    console.log(name + ' deleted.')
  })

  app.get('/watch', (req, res) => {
    return res.sendFile(path.join(staticDir, 'index.html'))
  })
}

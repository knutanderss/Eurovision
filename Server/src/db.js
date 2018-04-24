const mongojs = require('mongojs')
const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD
const db_uri = `mongodb://${db_username}:${db_password}@eurovision-shard-00-00-lfpzu.mongodb.net:27017,eurovision-shard-00-01-lfpzu.mongodb.net:27017,eurovision-shard-00-02-lfpzu.mongodb.net:27017/test?ssl=true&replicaSet=Eurovision-shard-0&authSource=admin`
const artists_collection = 'artists'
const db = mongojs(db_uri, [artists_collection])

const getArtists = () => {
  return new Promise((resolve, reject) => {
    db.artists.find((err, docs) => {
      if (err) reject(err)
      else resolve(docs)
    })
  })
}

const deleteArtist = name => {
  return new Promise((resolve, reject) => {
    db.artists.remove({name}, err => {
      if (err) reject(err) 
      else resolve()
    })
  })
}

const putArtist = artist => {
  return new Promise((resolve, reject) => {
    db.artists.insert({artist}, err => {
      if (err) reject(err)
      else resolve()
    })
  })
}

module.exports = {getArtists, deleteArtist, putArtist}



const mongojs = require('mongojs')
const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD
const dbUri = `mongodb://${db_username}:${db_password}@eurovision-shard-00-00-lfpzu.mongodb.net:27017,eurovision-shard-00-01-lfpzu.mongodb.net:27017,eurovision-shard-00-02-lfpzu.mongodb.net:27017/test?ssl=true&replicaSet=Eurovision-shard-0&authSource=admin`
const artists_collection = 'artists'
const voteoptions_collection = 'voteoptions'
const users_collection = 'users'
const db = mongojs(dbUri, [artists_collection, voteoptions_collection, users_collection])

const find = (collection, query, options) => {
  return new Promise((resolve, reject) => {
    collection.find(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

const insert = (collection, doc) => {
  return new Promise((resolve, reject) => {
    collection.insert(doc, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    })
  });
}

const update = (collection, query, update, options) => {
  return new Promise((resolve, reject) => {
    collection.update(query, update, options, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result)
    });
  })
}

module.exports = {
  db,
  find,
  insert,
  update
}
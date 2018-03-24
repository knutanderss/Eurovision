const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.text());

connectToDb = (callback) => {
    MongoClient.connect('mongodb://localhost/eurovision', function (err, client) {
        if (err) throw err;
        var db = client.db('eurovision');
        callback(db);
    });
}

sendBackArtists = (res) => {
    connectToDb((db) => db.collection('artists').find().toArray((err, result) => {
        res.send(JSON.stringify(result));
    }));
}

let i = 0;

app.get('/number', (req, res) => {
    i++;
    let s = "Number of requests: " + i;
    console.log(s);
    res.send(s);
});

app.get('/artists', (req, res) => {
    sendBackArtists(res);
});

app.post('/artists', (req, res) => {
    console.log("Client inserts artist: " + req.body.name + " country:" + req.body.country + " imageURL: " + req.body.imageURL + " number: " + req.body.number);
    connectToDb((db) => db.collection('artists').insert({name: req.body.name, country: req.body.country, imageURL: req.body.imageURL, number: req.body.number}));
    sendBackArtists(res);
});

app.post('/artists/delete', (req, res) => {
    const name = req.body.name;
    console.log('Client tries to delete artist: ' + name);
    connectToDb((db) => db.collection('artists').remove({name: name}));
    console.log(name + ' deleted.');
    sendBackArtists(res);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));

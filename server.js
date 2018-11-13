var express = require('express');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
let db;

// MODELS
// BOOKING - reservationID,


MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);
});

// Example stub:

app.get('/', function(req, res) {
    // list all shows
    // let sessions = db.getSiblingDB('users').sessions;
    const collection = db.collection('shows');
    // collection.insertOne({
    // "name" : "Action Movie 5"
    // , "description" : "Another action movie"
    // , "start" : "2015-03-11T15:00:00.000Z"
    // , "end" : "2015-03-11T16:00:00.000Z"
    // , "price" : 10
    // , "seatsAvailable" : 80
    // , "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    // , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    // , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    // , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    // , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]
    // , "reservations" : []
    // });
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        // console.log(docs);
        res.json(docs);
    });
    // res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});

app.get('/:showId', function(req, res) {
    // list one show
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});

app.post('/:showId/reservation/new', function(req,res){
    // reserve a show and update seats available
    res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
})

// app.put('/:showId/reservation/new')

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

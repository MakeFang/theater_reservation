var express = require('express');
var app = express();

// Example stub:

app.get('/', function(req, res) {
    // list all shows
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
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

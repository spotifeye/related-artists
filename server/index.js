var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var db = require('../db_index.js');


app.get('/artist/id/relatedArtists', (req, res) => {
    db.getRelatedArtists((error, data) => {
        if (error) {
            res.status(503).send(error);
        } else {
            res.send(data);
        }
    });
    //res.send('Hello World!'))
}) 

app.listen(3002, () => {console.log('listening on port 3002!')});
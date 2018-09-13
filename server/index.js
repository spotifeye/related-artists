

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var db = require('../db_index.js');
const path = require('path');


app.use(express.static(path.join(__dirname + '/./public')));


app.get('/artist/id/relatedArtists', (req, res) => {
    /*
    db.getRelatedArtists((error, data) => {
        if (error) {
            res.status(503).send(error);
        } else {
            res.send(data);
        }
    });
    */
    res.send('Hello World!')
}) 

app.listen(3002, () => {console.log('listening on port 3002!')});
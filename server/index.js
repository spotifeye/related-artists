var express = require ('express');
var app = express ();
var db = require ('../db_index.js');
const path = require ('path');
var cors = require ('cors');

app.use (cors ());
app.use (express.static (path.join (__dirname + '/../public')));

app.get (`/artist/:id/relatedArtists`, (req, res) => {
  db.getRelatedArtists (req.params.id, (error, data) => {
    if (error) {
      res.status (503).send (error);
    } else {
      console.log ('server get success');
      res.send (data);
    }
  });
});

app.listen (3002, () => {
  console.log ('listening on port 3002!');
});

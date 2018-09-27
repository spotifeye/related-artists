var express = require ('express');
var app = express ();
var db = require ('../database/index.js');
const path = require ('path');
var cors = require ('cors');

app.use (cors ());
app.use(express.json());
app.use (express.static (path.join (__dirname + '/../public')));

// https://stackoverflow.com/questions/411462/restful-way-to-create-multiple-items-in-one-request
// https://stackoverflow.com/questions/32098423/rest-updating-multiple-resources-with-one-request-is-it-standard-or-to-be-avo
// https://softwareengineering.stackexchange.com/questions/191596/is-it-ok-to-partially-change-a-collection-with-put-or-delete

// CREATE
app.post('/artists/:artistId/related-artists', (req, res) => {
  const { artistId } = req.params;
  const relatedArtist = req.body.data.artist;
  console.log(artists);
  // db.addRelatedArtist();
});

// READ
app.get(`/artist/:artistId/relatedArtists`, (req, res) => {
  const { artistId } = req.params;
  db.getRelatedArtists (req.params.id, (error, data) => {
    if (error) {
      res.status (503).send(error);
    } else {
      res.send (data);
    }
  });
});

// UPDATE
app.put('/artists/:artistId/related-artists', (req, res) => {
  const { artistId } = req.params;
  const relatedArtists = req.body.data.artists;
  console.log(artists);
  // db.setRelatedArtists();
});

// DELETE
app.delete(`/artist/:artistId/related-artists/:relatedArtistId`, (req, res) => {
  const { artistId, relatedArtistId } = req.params;
  // db.deleteRelatedArtist();
});

app.all('*', (req, res) => {
});

app.listen (3002, () => {
  console.log ('listening on port 3002!');
});

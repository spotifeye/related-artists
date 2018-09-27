var express = require ('express');
var app = express ();
var db = require ('../database/index.js');
const path = require ('path');
var cors = require ('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join (__dirname + '/../public')));

// https://stackoverflow.com/questions/411462/restful-way-to-create-multiple-items-in-one-request
// https://stackoverflow.com/questions/32098423/rest-updating-multiple-resources-with-one-request-is-it-standard-or-to-be-avo
// https://softwareengineering.stackexchange.com/questions/191596/is-it-ok-to-partially-change-a-collection-with-put-or-delete

// CREATE
app.post('/artists/:artistId/related-artists', (req, res) => {
  const { artistId } = req.params;
  const relatedArtistId = req.body.data.artist.id;
  db.addRelatedArtist(relatedArtistId, Number(artistId), (err, result) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

// READ
app.get(`/artists/:artistId/related-artists`, (req, res) => {
  const { artistId } = req.params;
  db.getRelatedArtists (artistId, (error, data) => {
    if (error) {
      res.status(503).send(error);
    } else {
      res.send(data);
    }
  });
});

// UPDATE
app.put('/artists/:artistId/related-artists', (req, res) => {
  const { artistId } = req.params;
  const relatedArtists = req.body.data.artists;
  db.setRelatedArtists(Number(artistId), relatedArtists, (err, data) => {
    if (err) return res.status(503).send(err);
    res.status(201).send(data);
  });
});

// DELETE
app.delete(`/artists/:artistId/related-artists/:relatedArtistId`, (req, res) => {
  const { artistId, relatedArtistId } = req.params;
  db.deleteRelatedArtist(artistId, relatedArtistId, (err, data) => {
    if (err) return res.status(503).send(err);
    res.status(200).send(data);
  });
});

app.all('*', (req, res) => {
});

app.listen (3002, () => {
  console.log ('listening on port 3002!');
});

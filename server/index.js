var express = require ('express');
var app = express ();
var db = require ('../database/index.js');
const path = require ('path');
var cors = require ('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join (__dirname + '/../public')));

// CREATE
app.post('/artists/:artistId/related-artists', (req, res) => {
  const { artistId } = req.params;
  const relatedArtistId = req.body.data.artist.id;
  db.addRelatedArtist(Number(artistId), relatedArtistId, (err, result) => {
    if (err) return res.status(503).send(err);
    res.status(201).send(result);
  });
});

// READ
app.get(`/artists/:artistId/related-artists`, (req, res) => {
  const { artistId } = req.params;
  db.getRelatedArtists (Number(artistId), (error, data) => {
    if (error) return res.status(503).send(error);
    res.send(data);
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
  db.deleteRelatedArtist(Number(artistId), relatedArtistId, (err, data) => {
    if (err) return res.status(503).send(err);
    res.status(200).send(data);
  });
});

app.all('*', (req, res) => {
  res.status(404).send();
});

app.listen (3002, () => {
  console.log ('listening on port 3002!');
});

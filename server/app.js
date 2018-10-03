const express = require ('express');
const path = require ('path');
const cors = require ('cors');
const db = require ('./db/db.js');
const app = express ();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join (__dirname + '/../public')));

// CREATE
app.post('/api/v1/artists/:artistId/related-artists', (req, res) => {
  const { artistId } = req.params;
  const relatedArtistId = req.body.data.artist.id;
  db.addRelatedArtist(Number(artistId), relatedArtistId, (err, data) => {
    if (err) return res.status(503).send(err);
    res.status(201).send(data);
  });
});

// READ
app.get(`/api/v1/artists/:artistId/related-artists`, (req, res) => {
  const { artistId } = req.params;
  db.getRelatedArtists (Number(artistId), (error, data) => {
    if (error) return res.status(503).send(error);
    res.send(data);
  });
});

// UPDATE
app.put('/api/v1/artists/:artistId/related-artists', (req, res) => {
  const { artistId } = req.params;
  const relatedArtists = req.body.data.artists;
  db.setRelatedArtists(Number(artistId), relatedArtists, (err, data) => {
    if (err) return res.status(503).send(err);
    res.status(201).send(data);
  });
});

// DELETE
app.delete(`/api/v1/artists/:artistId/related-artists/:relatedArtistId`, (req, res) => {
  const { artistId, relatedArtistId } = req.params;
  db.deleteRelatedArtist(Number(artistId), relatedArtistId, (err, data) => {
    if (err) return res.status(503).send(err);
    res.status(200).send(data);
  });
});

// ELSE 
app.all('*', (req, res) => {
  res.status(404).send();
});

module.exports = app;

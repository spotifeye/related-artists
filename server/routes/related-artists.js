const db = require('../db/db');

const addRelatedArtist = (req, res) => {
  console.log(req.body);
  const { artistId } = req.params;
  const relatedArtistId = req.body.data.artist.id;
  db.addRelatedArtist(Number(artistId), relatedArtistId, (err, data) => {
    if (err) return res.status(503).send(err);
    return res.status(201).send(data);
  });
};

const getRelatedArtists = (req, res) => {
  const { artistId } = req.params;
  db.getRelatedArtists(Number(artistId), (error, data) => {
    if (error) return res.status(503).send(error);
    return res.send(data);
  });
};

const setRelatedArtists = (req, res) => {
  const { artistId } = req.params;
  const relatedArtists = req.body.data.artists;
  db.setRelatedArtists(Number(artistId), relatedArtists, (err, data) => {
    if (err) return res.status(503).send(err);
    return res.status(201).send(data);
  });
};

const deleteRelatedArtist = (req, res) => {
  const { artistId, relatedArtistId } = req.params;
  db.deleteRelatedArtist(Number(artistId), relatedArtistId, (err, data) => {
    if (err) return res.status(503).send(err);
    return res.status(200).send(data);
  });
};

module.exports = {
  addRelatedArtist,
  getRelatedArtists,
  setRelatedArtists,
  deleteRelatedArtist,
};

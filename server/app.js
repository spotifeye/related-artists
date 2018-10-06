const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/related-artists');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(`${__dirname}/../public`)));

app.post('/api/v1/artists/:artistId/related-artists', routes.addRelatedArtist);

app.get(`/api/v1/artists/:artistId/related-artists`, routes.getRelatedArtists);

app.put('/api/v1/artists/:artistId/related-artists', routes.setRelatedArtists);

app.delete(
  `/api/v1/artists/:artistId/related-artists/:relatedArtistId`,
  routes.deleteRelatedArtist,
);

app.all('*', (req, res) => res.status(404).send());

module.exports = app;

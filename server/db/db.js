const { Pool } = require('pg');
const { DB_HOST, USER, PASSWORD } = require('../../.env.js');

const pool = new Pool({
  host: DB_HOST,
  user: USER,
  database: USER,
  password: PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const addRelatedArtist = (artistId, relatedArtistId, callback) => {
  const values = [artistId, relatedArtistId];
  const query =
    'INSERT INTO related_artists (artist_id, related_artist_id) VALUES ($1, $2)';
  pool.query(query, values, (err, data) => {
    if (err) return callback(err, null);
    return callback(null, data);
  });
};

const setRelatedArtists = (artistId, relatedArtists, callback) => {
  const id = [artistId];
  const values = [[], []];
  relatedArtists.forEach((relatedArtist) => {
    values[0].push(artistId);
    values[1].push(relatedArtist.id);
  });
  const deleteQ = 'DELETE FROM related_artists WHERE artist_id=$1';
  const insertQ =
    'INSERT INTO related_artists(artist_id, related_artist_id) SELECT * FROM UNNEST ($1::int[], $2::int[])';
  pool.query(deleteQ, id, (delErr) => {
    if (delErr) return callback(delErr, null);
    return pool.query(insertQ, values, (insErr, data) => {
      if (insErr) return callback(insErr, null);
      return callback(null, data);
    });
  });
};

const getRelatedArtists = (artistId, callback) => {
  const values = [artistId];
  const query =
    'SELECT * FROM artists WHERE artist_id in (SELECT related_artist_id FROM related_artists WHERE artist_id = $1)';
  pool.query(query, values, (err, data) => {
    if (err) return callback(err, null);
    const artists = [];
    data.rows.forEach((artist) => {
      artists.push({
        artistId: artist.artist_id,
        artistName: artist.artist_name,
        listeners: artist.listeners,
        artistImage: artist.artist_image,
        popularSong: artist.popular_song,
      });
    });
    return callback(null, artists);
  });
};

const deleteRelatedArtist = (artistId, relatedArtistId, callback) => {
  const values = [artistId, relatedArtistId];
  const query =
    'DELETE FROM related_artists WHERE artist_id=$1 AND related_artist_id=$2';
  pool.query(query, values, (err, data) => {
    if (err) return callback(err, null);
    return callback(null, data);
  });
};

module.exports = {
  getRelatedArtists,
  deleteRelatedArtist,
  setRelatedArtists,
  addRelatedArtist,
};

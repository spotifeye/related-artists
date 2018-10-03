const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'chris',
  password: 'password',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('acquire', () => console.error('Pool acquired'));
pool.on('remove', () => console.error('Pool removed'));
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const addRelatedArtist = function(artistId, relatedArtistId, callback) {
  const values = [artistId, relatedArtistId];
  const query = 'INSERT INTO related_artists (artist_id, related_artist_id) VALUES ($1, $2)';
  pool.query(query, values, (err, data) => {
    if (err) return callback(err, null);
    callback(null, data);
  });
};

const setRelatedArtists = function (artistId, relatedArtists, callback) {
  const id = [artistId];
  const values = [[], []];
  relatedArtists.forEach(relatedArtist => {
    values[0].push(artistId);
    values[1].push(relatedArtist.id);
  });
  const deleteQ = 'DELETE FROM related_artists WHERE artist_id=$1';
  const insertQ = 'INSERT INTO related_artists(artist_id, related_artist_id) SELECT * FROM UNNEST ($1::int[], $2::int[])';
  pool.query(deleteQ, id, (err) => {
    if (err) return callback(err, null);
    pool.query(insertQ, values, (err, data) => {
      if (err) return callback(err, null);
      callback(null, data);
    });
  });
};

const getRelatedArtists = function (artistId, callback) {
  const values = [artistId];
  const query = 'SELECT * FROM artists WHERE artist_id in (SELECT related_artist_id FROM related_artists WHERE artist_id = $1)';
  pool.query(query, values, (err, data) => {
    if (err) return callback(err, null);
    callback(null, data.rows);
  });
};

const deleteRelatedArtist = function (artistId, relatedArtistId, callback) {
  const values = [artistId, relatedArtistId];
  const query = 'DELETE FROM related_artists WHERE artist_id=$1 AND related_artist_id=$2';
  pool.query(query, values, (err, data) => {
    if (err) return callback(err, null);
    callback(null, data);
  });
};

module.exports = { getRelatedArtists, deleteRelatedArtist, setRelatedArtists, addRelatedArtist };

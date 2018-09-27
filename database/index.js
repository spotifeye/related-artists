let mysql = require ('mysql');
let connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'artists',
});

const addRelatedArtist = function(artistId, relatedArtistId, callback) {
  // TODO: add error handling
  const query = `INSERT INTO related_artists (artist_id, related_artist_id) VALUES (${connection.escape(artistId)}, ${connection.escape(relatedArtistId)})`;
  connection.query(query, (err, data) => {
    if (err) return callback(err, null);
    callback(null, data);
  });
};

const setRelatedArtists = function (artistId, relatedArtists, callback) {
  // TODO: add error handling
  const ids = [];
  relatedArtists.forEach(relatedArtist => {
    ids.push([artistId, relatedArtist.id]);
  });

  const deleteQuery = `DELETE FROM related_artists WHERE artist_id=${Number(artistId)}`;
  const query = `INSERT INTO related_artists(artist_id, related_artist_id) VALUES ?`;
  connection.query(deleteQuery, (err, data) => {
    if (err) return res.status(503).send('Error in delete query');
    connection.query(query, [ids], (err, data) => {
      if (err) return callback(err, null);
      callback(null, data);
    });
  });
};

const getRelatedArtists = function (artistId, callback) {
  // TODO: add error handling
  const query = `SELECT * FROM artists WHERE artist_id in (SELECT related_artist_id FROM related_artists WHERE artist_id = ${connection.escape(artistId)})`;
  connection.query(query, (err, data) => {
    if (err) return callback(err, null);
    callback(null, data);
  });
};

const deleteRelatedArtist = function (artistId, relatedArtistId, callback) {
  // TODO: add error handling
  console.log(artistId, relatedArtistId);
  const query = `DELETE FROM related_artists WHERE artist_id = ${connection.escape(artistId)} AND related_artist_id = ${connection.escape(relatedArtistId)}`;
  connection.query(query, (err, data) => {
    if (err) return callback(err, null);
    callback(null, data);
  });
};

module.exports = { getRelatedArtists, deleteRelatedArtist, setRelatedArtists, addRelatedArtist };

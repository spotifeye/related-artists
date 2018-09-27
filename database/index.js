let mysql = require ('mysql');
let connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'artists',
});

const addRelatedArtist = function(relatedArtistId, artistId, callback) {
  // TODO: add error handling
  const query = `INSERT INTO relatedArtists (related_Artist_ID, main_Artist_ID) VALUES (${connection.escape(relatedArtistId)}, ${connection.escape(artistId)})`;
  connection.query(query, function(error, result) {
    if (error) {
      console.log ('db query error: ', error);
      callback(error, null);
    } else {
      console.log ('db query success');
      callback(null, result);
    }
  });
};

const setRelatedArtists = function (artistId, relatedArtists, callback) {
  const ids = [];
  relatedArtists.forEach(relatedArtist => {
    ids.push([relatedArtist.id, artistId]);
  });

  const deleteQuery = `DELETE FROM relatedArtists WHERE main_Artist_ID=${Number(artistId)}`;
  const query = `INSERT INTO relatedArtists(related_Artist_ID, main_Artist_ID) VALUES ?`;
  connection.query(deleteQuery, (err, result) => {
    if (err) return res.status(503).send('Error in delete query');
    connection.query(query, [ids], function(error, result) {
      if (error) {
        console.log('db query error: ', error);
        callback(error, null);
      } else {
        console.log('db query success');
        callback(null, result);
      }
    });
  });
};

const getRelatedArtists = function (id, callback) {
  // TODO: add error handling
  let query = `SELECT * FROM artist WHERE artistID in (SELECT related_Artist_ID FROM relatedArtists WHERE main_Artist_ID = ${connection.escape(id)})`;
  connection.query (query, function (error, result) {
    if (error) {
      console.log ('db query error: ', error);
      callback(error, null);
    } else {
      console.log ('db query success');
      callback(null, result);
    }
  });
};

const deleteRelatedArtist = function (artistId, relatedArtistId, callback) {
  // TODO: add error handling
  const query = `DELETE FROM relatedArtists WHERE main_Artist_ID = ${connection.escape(artistId)} AND related_Artist_ID = ${connection.escape(relatedArtistId)}`;
  connection.query (query, function (error, result) {
    if (error) {
      console.log ('db query error: ', error);
      callback(error, null);
    } else {
      console.log ('db query success');
      callback(null, result);
    }
  });
};

module.exports = { getRelatedArtists, deleteRelatedArtist, setRelatedArtists, addRelatedArtist };

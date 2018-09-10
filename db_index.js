
let mysql = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'artists'
});


const getRelatedArtists = function(getArtist) {
    connection.query('SELECT artist_name from artist', function(error, result, fields) {
        if (error) {
            getArtist(error);
        } else {
            console.log(result);
            getArtist(null, result);
        }
    });
};

module.exports.getRelatedArtists = getRelatedArtists;



 
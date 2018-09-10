
let mysql = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'artists'
});


const getRelatedArtists = function(currentArtist, getArtist) {
    connection.query(`select artist_name, artistid, listeners from artist where artistid in (select related_artist_id from relatedartists where main_artist_id = (select artistid from artist where artist_id = "${currentArtist}"))`, function(error, result, fields) {
        if (error) {
            getArtist(error);
        } else {
            console.log(result);
            getArtist(null, result);
        }
    });
};
//select * from relatedartists where main_artist_id = 10;+-----+-------------------+----------------+
// select artist_name, artistid, listeners from artist  where artistid in (select related_artist_id from relatedartists where main_artist_id= (select artistid from artist where artist_name= 'Ms. Rick Leuschke'));

module.exports.getRelatedArtists = getRelatedArtists;



 
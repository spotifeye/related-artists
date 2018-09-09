//script to generate data goes here
const faker = require('faker');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'artists'
})


let results = []
for (let i = 0; i < 101; i++ ) {

    results.push({
        artist_name : faker.name.findName(),
        listeners : faker.random.number(),
        artist_image : faker.image.people()
    })  
}

// console.log(results);
// console.log(results[0].artistName);
// console.log(results[0].listeners);
// console.log(results[0].artist_image);

 for (let j = 0; j < results.length; j++){
     connection.query(`INSERT INTO artist (artist_name, listeners, artist_image) VALUES("${results[j].artist_name}", "${results[j].listeners}", "${results[j].artist_image}")`, function(error, result, fields) {
         if (error) {
             console.log(error);
         }
         
     })
 }


//loop over fake artist
  //create 100 artist objects
//use fs.writefile to save to csv


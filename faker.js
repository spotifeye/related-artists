//script to generate data goes here
const faker = require('faker');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'artists'
})

//create fake data

//randomly generate an artist id for current artist

let results = []
for (let i = 0; i < 101; i++ ) {

    results.push({
        artist_name : faker.name.findName(),
        listeners : faker.random.number(),
        artist_image : faker.image.people(),
        popularSong : faker.random.words()
    })  
}


//console.log(results);
// console.log(results[0].artistName);
// console.log(results[0].listeners);
// console.log(results[0].artist_image);

//store fake data in records table

 for (let j = 0; j < results.length; j++){
     connection.query(`INSERT INTO artist (artist_name, listeners, artist_image, popularSong) VALUES("${results[j].artist_name}", "${results[j].listeners}", "${results[j].artist_image}", "${results[j].popularSong}")`, function(error, result, fields) {
         if (error) {
             console.log(error);
         }
         
     })
 }

 //loop over each artist in results to insert ids into related artist tabl
 for (let i = 1; i < 101; i++) {
     let insertCount = 1;
     let uniqueIdArr = [];
     let k = 0;
     while (k <10) {

            let randomId = Math.floor(Math.random() * Math.floor(100));
        if(randomId === i) {
            continue;
        } else {
            k++;
            uniqueIdArr.push(randomId);
        }
     }
     console.log("i= " + i + '   ' + uniqueIdArr);
     while(insertCount < 11){
         
        
            connection.query(`INSERT INTO relatedArtists (related_Artist_ID, main_Artist_ID) VALUES("${uniqueIdArr[insertCount-1]}",  ${i})`, function(error, result, fields) {
                if (error) {
                 console.log(error);
             }
         })
         insertCount++;
     }
     
 }

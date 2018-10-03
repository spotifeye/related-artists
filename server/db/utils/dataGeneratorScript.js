const faker = require('faker');
const fs = require('fs');

// TODO: remove hard-coded path, replace with __dirname 

// CREATE ARTISTS FILE
for (let file = 1; file <= 1; file++) {
  const write = fs.createWriteStream(`/Users/chris/development/sdc_data/artists/part-${file}.csv`);
  let dataToWrite = 'artist_id,artist_name,listeners,artist_image,popularSong\n';
  write.write(dataToWrite);
  for (let row = 1; row <= 10000000; row++) {
    let record = '';
    let artist = {
      artist_id: (file * row) + 10000000,
      artist_name: faker.name.findName(),
      listeners: faker.random.number(),
      artist_image: `https://s3-us-west-1.amazonaws.com/chris-larson/spotifeye/images/${(row % 1000) + 1}.jpg`,
      popularSong: faker.lorem.word(),
    };
    record += `${artist.artist_id},${artist.artist_name},${artist.listeners},${artist.artist_image},${artist.popularSong}` + '\n';    
    write.write(record);
  }
  write.end();
}

// CREATE RELATED-ARTISTS FILE
for (let file = 1; file <= 1; file++) {
  const write = fs.createWriteStream(`/Users/chris/development/sdc_data/related_artists/part-${file}.csv`);
  let dataToWrite = 'artist_id,related_artist_id\n';
  write.write(dataToWrite);
  for (let artistRow = 1; artistRow <= 10000000; artistRow++) {
    let records = '';
    for (let relatedRow = 1; relatedRow <= 25; relatedRow++) {
      let relatedArtist = {
        artist_id: (file * artistRow) + 10000000,
        related_artist_id: faker.random.number({min:10000001, max:20000000})
      };
      records += `${relatedArtist.artist_id},${relatedArtist.related_artist_id}` + '\n';
    }
    write.write(records);
  }
  write.end();
}

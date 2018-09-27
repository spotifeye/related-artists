DROP DATABASE IF EXISTS artists;
CREATE DATABASE IF NOT EXISTS artists;
USE artists;

CREATE TABLE IF NOT EXISTS artists (
  artist_id INT AUTO_INCREMENT PRIMARY KEY,
  artist_name VARCHAR(40) NOT NULL,
  listeners INT,
  artist_image VARCHAR(100) NOT NULL,
  popular_song VARCHAR(130) NOT NULL
);

DROP TABLE IF EXISTS related_artists;
		
CREATE TABLE related_artists (
   id INT AUTO_INCREMENT PRIMARY KEY,
   related_artist_id INT NOT NULL,
   artist_id INT NOT NULL,
   FOREIGN KEY (related_artist_id) REFERENCES artists(artist_id),
   FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
 );


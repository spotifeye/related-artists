USE spotifeye;

DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
  artist_id INTEGER,
  artist_name VARCHAR(40) NOT NULL,
  listeners INTEGER NOT NULL,
  artist_image VARCHAR(100) NOT NULL,
  popular_song VARCHAR(32) NOT NULL,
  PRIMARY KEY(artist_id)
);

DROP TABLE IF EXISTS related_artists;
CREATE TABLE related_artists (
  artist_id INTEGER NOT NULL,
  related_artist_id INTEGER NOT NULL
);

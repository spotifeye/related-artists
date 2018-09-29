-- CREATE TABLE artists (
--   artist_id INTEGER,
--   artist_name VARCHAR(40) NOT NULL,
--   listeners INTEGER NOT NULL,
--   artist_image VARCHAR(100) NOT NULL,
--   popular_song VARCHAR(32) NOT NULL,
--   PRIMARY KEY(artist_id)
-- );

-- DROP TABLE IF EXISTS related_artists;
-- CREATE TABLE related_artists (
--   artist_id INTEGER NOT NULL,
--   related_artist_id INTEGER NOT NULL
-- );

-- ALTER TABLE related_artists
--   ADD CONSTRAINT fk_artistId
--   FOREIGN KEY (artist_id) 
--   REFERENCES artists(artist_id);

-- ALTER TABLE related_artists
--   ADD CONSTRAINT fk_relatedArtistId
--   FOREIGN KEY (related_artist_id) 
--   REFERENCES artists(artist_id);

-- CREATE TABLE related_artists (
--   artist_id INTEGER REFERENCES artists(artist_id),
--   related_artist_id INTEGER REFERENCES artists(artist_id)
-- );

-- CREATE INDEX ON related_artists (artist_id);
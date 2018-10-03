ALTER TABLE related_artists
  ADD CONSTRAINT fk_artistId
  FOREIGN KEY (artist_id) 
  REFERENCES artists(artist_id);

ALTER TABLE related_artists
  ADD CONSTRAINT fk_relatedArtistId
  FOREIGN KEY (related_artist_id) 
  REFERENCES artists(artist_id);

CREATE INDEX ON related_artists(artist_id);

import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import RelatedArtistEntry from './relatedArtistEntry';
import styles from './styles/relatedArtist.css';

const RelatedArtists = ({ relatedArtists }) => (
  <div styleName="RAContainer">
    {relatedArtists.map((artistEntry) => (
      <div key={artistEntry.artistId}>
        <RelatedArtistEntry artist={artistEntry} />
      </div>
    ))}
  </div>
);

RelatedArtists.propTypes = {
  relatedArtists: PropTypes.instanceOf(Array).isRequired,
};

export default CSSModules(RelatedArtists, styles);

import React from 'react';
import CSSModules from 'react-css-modules';
import RelatedArtistEntry from './relatedArtistEntry.jsx';
import styles from './styles/relatedArtist.css';

const RelatedArtists = (props) => (
  <div styleName="RAContainer">
    {props.relatedArtists.map((artistEntry, index) => (
      <div key={index}>
        <RelatedArtistEntry artist={artistEntry} />
      </div>
    ))}
  </div>
);

export default CSSModules(RelatedArtists, styles);

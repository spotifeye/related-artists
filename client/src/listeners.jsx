import React from 'react';
import styles from './styles/relatedArtist.css';
import CSSModules from 'react-css-modules';

const listeners = props => (
  <div>

    <div className="RAListeners">
      {props.artist.listeners
        .toString ()
        .replace (/\B(?=(\d{3})+(?!\d))/g, ',')}
    </div>
  </div>
);

export default CSSModules (listeners, styles);

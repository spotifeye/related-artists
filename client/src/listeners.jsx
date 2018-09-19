import React from 'react';
import styles from './styles/relatedArtist.css';
import CSSModules from 'react-css-modules';

let styles2 = {
  //padding: '5px;',
};

const listeners = props => (
  <div style={styles2}>

    <div className="RAListeners">
      {props.artist.listeners}
    </div>
  </div>
);

export default CSSModules (listeners, styles);

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/relatedArtist.css';

const Listeners = (props) => (
  <div className="RAListeners">
    {props.artist.listeners.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
  </div>
);

export default CSSModules(Listeners, styles);

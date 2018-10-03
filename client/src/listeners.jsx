import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './styles/relatedArtist.css';

const Listeners = (props) => {
  const { artist } = props;
  const { listeners } = artist;
  return (
    <div className="RAListeners">
      {listeners.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </div>
  );
};

Listeners.propTypes = {
  artist: PropTypes.instanceOf(Object).isRequired,
};

export default CSSModules(Listeners, styles);

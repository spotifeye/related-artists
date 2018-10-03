import React from 'react';
import { Popover } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/relatedArtist.css';

const PopularSong = (props) => {
  const styles = {
    backgroundColor: 'rgb(25, 25, 25)',
    display: 'flex',

    justifyContent: 'center',
    position: 'relative',
    positionLeft: '200',
    marginTop: '3%',

    whiteSpace: 'nowrap',
    width: '100px !important',
  };
  const styles2 = {
    maxWidth: '120%',
  };
  const styles3 = {
    marginRight: '7%',
  };
  return (
    <div>
      <Popover id="popover-positioned-right" style={styles}>
        <div style={styles2}>
          <FontAwesomeIcon icon={faPlayCircle} style={styles3} />
          {props.artist.popular_song}
        </div>
      </Popover>
    </div>
  );
};

export default CSSModules(PopularSong, styles);

import React from 'react';
import {Popover} from 'react-bootstrap';
import styles from './styles/relatedArtist.css';
import CSSModules from 'react-css-modules';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

const popularSong = props => {
  let styles = {
    backgroundColor: 'rgb(25, 25, 25)',
    display: 'flex',
    flexWrap: 'wrap',
    //placement: ,
    marginLeft: '20%',
  };
  let styles2 = {
    marginRight: '7%',
  };
  return (
    <div>
      {/* <div styleName="SongContainer"> */}
      {/* <div stylename="PopularSong"> */}
      <div styleName="RAEntry">
        <Popover id="popover-positioned-right" style={styles}>
          <FontAwesomeIcon icon={faPlayCircle} style={styles2} />
          {props.artist.popularSong}
        </Popover>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CSSModules (popularSong, styles);

import React from 'react';
import { Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'


const popularSong =(props) => {
let styles = {
  backgroundColor: 'black',
}
        return(
        <div>
            <Popover id="popover-positioned-right" style={styles}>
            <FontAwesomeIcon icon={faPlayCircle} />
            {props.artist.popularSong}
            </Popover>
        </div>
        )
    
}

export default popularSong;

// https://getbootstrap.com/docs/4.0/components/popovers/
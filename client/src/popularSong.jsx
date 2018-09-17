//displays most popular song and option to click as popup
import React from 'react';
import { Popover } from 'react-bootstrap';

const popularSong =(props) => {
let styles = {
  backgroundColor: 'black',
}
        return(
        <div>
            <Popover id="popover-positioned-right" style={styles}>
            {props.artist.popularSong}
            </Popover>
        </div>
        )
    
}

export default popularSong;

// https://getbootstrap.com/docs/4.0/components/popovers/
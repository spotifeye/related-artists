//displays most popular song and option to click as popup
import React from 'react';

const popularSong =(props) => {

        return(
        <div>
          <div> {props.artist.popularSong} </div>
        </div>
        )
    
}

export default popularSong;

// https://getbootstrap.com/docs/4.0/components/popovers/
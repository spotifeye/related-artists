
import React from 'react';

const relatedArtistEntry = (props) => {
   

    return(
          <div>
               <div><img src={props.artist.artist_image}></img></div>
               <div>{props.artist.artist_name}</div> 
               <div>{props.artist.listeners}</div>
          </div>
        //   <div>{props.artist.artist_image}</div>
          
        //   onMouseEnter={this.displayListenersHandler()}
        //   onMouseLeave={this.displayListenersHandler()}
    )
}

export default relatedArtistEntry;
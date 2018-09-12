//displays a random artist
//state: followers (on hover toggle)
import React from 'react';



class relatedArtistEntry extends React.component {
    constructor(props) {
        super(props);

        this.state = {
           toggleListeners: false,
        }
        this.displayListenersHandler = this.displayListenersHandler.bind(this);
    }
    
    //toggles listeners display when user hovers
    displayListenersHandler() {
            this.setState(prevState => ({
                toggleListeners: !prevState.toggleListeners
            }));
    }

    render() {
        return(        
          <div>{props.artist.artist_name}</div>
          <div>{props.artist.artist_image}</div>
          <div 
        //   onMouseEnter={this.displayListenersHandler()}
        //   onMouseLeave={this.displayListenersHandler()}


          >

              {/* toggles to true when mouse is on listeners div */}
              {/* toggles to false when mouse is off listeners div */}
          </div>
          )

    }


}
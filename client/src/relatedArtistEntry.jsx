
import React from 'react';
import PopularSong from './popularSong.jsx';

class relatedArtistEntry extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           isPopupHidden: true,
           isListenersHidden: true
       }
       this.togglePopup = this.togglePopup.bind(this);
   }
   togglePopup () {
       this.setState({
           isPopupHidden: !this.state.isPopupHidden
       })
   }

   render() {
    return(
          <div onClick={this.togglePopup}>
               <div><img src={this.props.artist.artist_image}></img></div>
               <div>{this.props.artist.artist_name}</div> 
               <div>{this.props.artist.listeners}</div>
                  <div> {!this.state.isPopupHidden && <PopularSong artist={this.props.artist}/>}</div>
          </div>
          
        //   onMouseEnter={this.displayListenersHandler()}
        //   onMouseLeave={this.displayListenersHandler()}
    )
   }
}

export default relatedArtistEntry;
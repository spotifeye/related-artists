import React from 'react';
import RelatedArtistEntry from './relatedArtistEntry.jsx';

class relatedArtist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       addMoreArtists: false
    }
  }

 
      render() {
       return(
            <div>
              <div>another hello</div>
              <div>{this.props.relatedArtists.map((artistEntry, index) => <div key={index}> <RelatedArtistEntry artist={artistEntry}/></div>)}</div>
            </div>
       )
      }

    }
  
export default relatedArtist;

//https://www.w3schools.com/howto/howto_js_expanding_grid.asp
//          <div>{this.props.relatedArtists.map(artist => <RelatedArtistEntry artist={artist}/>) }</div>  

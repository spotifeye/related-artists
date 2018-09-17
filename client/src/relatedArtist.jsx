import React from 'react';
import RelatedArtistEntry from './relatedArtistEntry.jsx';

class relatedArtist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       addMoreArtists: false
    }

  }

 //map function needs to be in return statement
      render() {
       return(
            <div>
              <div>{this.props.relatedArtists.map((artistEntry, index) => <div key={index}> <RelatedArtistEntry artist={artistEntry}/></div>)}</div>
            <div id="panel panel-default">
              <div class="panel-footer">
              <button>More artists</button>
              </div>
            </div>
            </div>
       )
      }

    }
  
export default relatedArtist;

//https://www.w3schools.com/howto/howto_js_expanding_grid.asp

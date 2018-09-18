import React from 'react';
import RelatedArtistEntry from './relatedArtistEntry.jsx';
import styles from './styles/relatedArtist.css'
import CSSModules from 'react-css-modules';


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
            <div >
              <div>{this.props.relatedArtists.map((artistEntry, index) => <div key={index}> <RelatedArtistEntry artist={artistEntry}/></div>)}</div>
            <div id="panel panel-default">
              
            </div>
            </div>
       )
      }

    }
  
export default CSSModules(relatedArtist, styles);

//https://www.w3schools.com/howto/howto_js_expanding_grid.asp

import React from 'react';
import RelatedArtistEntry from './relatedArtistEntry.jsx';
import styles from './styles/relatedArtist.css';
import CSSModules from 'react-css-modules';

class relatedArtist extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      addMoreArtists: false,
    };
  }

  render () {
    return (
      <div className="view overlay">
        <div className="mask flex-center rgba-red-strong">
          {this.props.relatedArtists.map ((artistEntry, index) => (
            <div key={index}> <RelatedArtistEntry artist={artistEntry} /></div>
          ))}
        </div>
      </div>
    );
  }
}

export default CSSModules (relatedArtist, styles);

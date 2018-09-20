import React from 'react';
import RelatedArtistEntry from './relatedArtistEntry.jsx';
import styles from './styles/relatedArtist.css';
import CSSModules from 'react-css-modules';

class relatedArtist extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      addMoreArtists: false,
      isListenersHidden: true,
    };
  }

  render () {
    return (
      <div styleName="RAContainer">
        {this.props.relatedArtists.map ((artistEntry, index) => (
          <div key={index}>
            <RelatedArtistEntry artist={artistEntry} />
          </div>
        ))}
      </div>
    );
  }
}

export default CSSModules (relatedArtist, styles);

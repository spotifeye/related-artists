import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import PopularSong from './popularSong';
import Listeners from './listeners';
import styles from './styles/relatedArtist.css';

class RelatedArtistEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupHidden: true,
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    const { isPopupHidden } = this.state;
    this.setState({
      isPopupHidden: !isPopupHidden,
    });
  }

  render() {
    const { isPopupHidden } = this.state;
    const { artist } = this.props;
    const { artistImage, artistName } = artist;
    return (
      <div>
        <table styleName="RAEntryContainer">
          <div onClick={this.togglePopup}>
            <tr styleName="RAEntry">
              <td>
                <Image src={artistImage} circle width="50" height="50" />
              </td>
              <td styleName="RAname">{artistName}</td>
              <td>
                <div styleName="RAListeners">
                  <Listeners artist={artist} />
                </div>
              </td>
              <td styleName="PopularSong">
                {!isPopupHidden && <PopularSong artist={artist} />}
              </td>
            </tr>
          </div>
        </table>
      </div>
    );
  }
}

RelatedArtistEntry.propTypes = {
  artist: PropTypes.instanceOf(Object).isRequired,
};

export default CSSModules(RelatedArtistEntry, styles);

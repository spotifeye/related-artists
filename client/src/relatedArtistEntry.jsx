import React from 'react';
import PopularSong from './popularSong.jsx';
import Listeners from './listeners.jsx';
import {Image, Grid, Row, Col} from 'react-bootstrap';
import styles from './styles/relatedArtist.css';
import CSSModules from 'react-css-modules';

class relatedArtistEntry extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isPopupHidden: true,
      isListenersHidden: true,
    };

    this.togglePopup = this.togglePopup.bind (this);
    this.toggleListeners = this.toggleListeners.bind (this);
    this.showListeners = this.showListeners.bind (this);
    this.hideListeners = this.hideListeners.bind (this);
  }
  togglePopup () {
    this.setState ({
      isPopupHidden: !this.state.isPopupHidden,
    });
  }

  toggleListeners () {
    this.setState ({
      isListenersHidden: !this.state.isListenersHidden,
    });
  }
  showListeners () {
    this.setState ({
      isListenersHidden: false,
    });
  }
  hideListeners () {
    this.setState ({
      isListenersHidden: true,
    });
  }
  //this.state.isListenersHidden === false &&
  render () {
    return (
      <div>
        <table styleName="RAEntryContainer">
          <div>
            <div
              onMouseOver={this.toggleListeners}
              onMouseLeave={this.toggleListeners}
            >
              <div onClick={this.togglePopup}>
                <tr styleName="RAEntry">

                  <td>
                    <Image
                      src={this.props.artist.artist_image}
                      circle
                      width="50"
                      height="50"
                    />
                  </td>

                  <td styleName="RAname">
                    {this.props.artist.artist_name}

                  </td>
                  <td styleName="RAListenersContainer">
                    <div styleName="RAListeners">

                      <Listeners artist={this.props.artist} />
                    </div>

                  </td>
                  <td styleName="PopularSong">

                    {!this.state.isPopupHidden &&
                      <PopularSong artist={this.props.artist} />}
                  </td>

                </tr>

              </div>
            </div>
          </div>
        </table>
      </div>
    );
  }
}

export default CSSModules (relatedArtistEntry, styles);

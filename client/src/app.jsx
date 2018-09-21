import React from 'react';
import RelatedArtists from './relatedArtist.jsx';
import CSSModules from 'react-css-modules';
import styles from './styles/relatedArtist.css';
import axios from 'axios';

var allArtists;
var firstFour;
class RAApp extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      relatedArtists: [],
      toggleArtistList: false,
      label: 'MORE ARTISTS',
      //firstFourArtists: [],
    };
    this.lessArtists = this.lessArtists.bind (this);
    this.getRelatedArtists = this.getRelatedArtists.bind (this);
    this.moreArtistsHandleClick = this.moreArtistsHandleClick.bind (this);
  }
  componentDidMount () {
    let id = Math.floor (Math.random () * 100) + 1;
    this.getRelatedArtists (id);
  }

  getRelatedArtists (id) {
    let context = this;
    axios
      .get ('/artist/' + id + '/relatedArtists')
      .then (response => {
        allArtists = response.data;
        firstFour = [];
        for (let i = 0; i < response.data.length; i++) {
          if (i < 5) firstFour.push (response.data[i]);
        }
        context.setState ({
          relatedArtists: firstFour,
        });
      })
      .catch (function (error) {
        console.log (error);
      });
  }

  lessArtists () {
    this.setState ({
      toggleArtistList: !this.state.toggleArtistList,
    });
  }

  moreArtistsHandleClick () {
    this.lessArtists ();
    if (this.state.toggleArtistList === false) {
      this.setState ({
        relatedArtists: allArtists,
        label: 'LESS ARTISTS',
      });
      console.log ('i was clicked');
    } else {
      this.setState ({
        relatedArtists: firstFour,
        label: 'MORE ARTISTS',
      });
    }
  }

  render () {
    return (
      <div styleName="rap">
        <h1 style={{fontWeight: '700'}}>Fans Also Like</h1>
        <RelatedArtists relatedArtists={this.state.relatedArtists} />
        <button
          type="button"
          styleName="RAButton"
          onClick={this.moreArtistsHandleClick}
        >
          {this.state.label}
        </button>
      </div>
    );
  }
}

export default CSSModules (RAApp, styles);

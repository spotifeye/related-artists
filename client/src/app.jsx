import React from 'react';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import RelatedArtists from './relatedArtist';
import styles from './styles/relatedArtist.css';

class RelatedArtistsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedArtists: [],
      toggleArtistList: false,
      label: '',
    };
    this.renderArtists = this.renderArtists.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.getRelatedArtists = this.getRelatedArtists.bind(this);
    this.moreArtistsHandleClick = this.moreArtistsHandleClick.bind(this);
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * 10000000) + 10000000;
    this.setState({
      label: 'MORE ARTISTS',
    });
    this.getRelatedArtists(id);
  }

  getRelatedArtists(id) {
    const context = this;
    axios
      .get(`/api/v1/artists/${id}/related-artists`)
      .then((response) => {
        context.setState({
          relatedArtists: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  moreArtistsHandleClick() {
    const { toggleArtistList } = this.state;
    if (toggleArtistList === false) {
      this.setState({
        label: 'LESS ARTISTS',
        toggleArtistList: !toggleArtistList,
      });
    } else {
      this.setState({
        label: 'MORE ARTISTS',
        toggleArtistList: !toggleArtistList,
      });
    }
  }

  renderArtists() {
    const { relatedArtists, toggleArtistList } = this.state;
    const firstFiveArtists = [];
    for (let i = 0; i < relatedArtists.length; i += 1) {
      if (i < 5) firstFiveArtists.push(relatedArtists[i]);
    }
    if (toggleArtistList === false) {
      return (
        <div styleName="rap">
          <h1 style={{ fontWeight: '700' }}>Fans Also Like</h1>
          <RelatedArtists relatedArtists={firstFiveArtists} />
        </div>
      );
    }
    return (
      <div styleName="rap">
        <h1 style={{ fontWeight: '700' }}>Fans Also Like</h1>
        <RelatedArtists relatedArtists={relatedArtists} />
      </div>
    );
  }

  renderButton() {
    const { label } = this.state;
    return (
      <button
        type="button"
        styleName="RAButton"
        onClick={this.moreArtistsHandleClick}
      >
        {label}
      </button>
    );
  }

  render() {
    return (
      <div styleName="rap">
        {this.renderArtists()}
        {this.renderButton()}
      </div>
    );
  }
}

export default CSSModules(RelatedArtistsApp, styles);

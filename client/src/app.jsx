import React from 'react';
import RelatedArtists from './relatedArtist.jsx';
import CSSModules from 'react-css-modules';
import styles from './styles/relatedArtist.css'


const axios = require('axios');
var allArtists;
var firstFour;
class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {  
         relatedArtists : [],
         toggleArtistList : false,
         firstFourArtists : []
       }
       this.lessArtists = this.lessArtists.bind(this);
       this.getRelatedArtists = this.getRelatedArtists.bind(this);
       this.moreArtistsHandleClick = this.moreArtistsHandleClick.bind(this);
   }
 
   getRelatedArtists() {
    let context = this;
    axios.get('http://localhost:3002/relatedArtists/id/artist')
      .then((response) => {
        allArtists = response.data;
        firstFour = [];
        for (let i = 0; i < response.data.length; i++) {
            if( i < 5 )
            firstFour.push(response.data[i])
        }
        console.log('all artists', allArtists);
         context.setState({
             relatedArtists : firstFour
         })
         
       })
      .catch(function (error) {
         console.log(error);
     });
   }

   lessArtists() {
    this.setState({
      toggleArtistList: !this.state.toggleArtistList
    });
   }

   moreArtistsHandleClick() {
       this.lessArtists();
    if(this.state.toggleArtistList === false){
      this.setState({
        relatedArtists : allArtists
      })
      console.log('i was clicked')
    } else {
        this.setState({
            relatedArtists : firstFour
        })
    }
   }

   componentDidMount() {
       this.getRelatedArtists();
       console.log('do something for the love of god')
   }

    render() {

        return (
        <div>
            <div>
            <div styleName='RAContainer'>
            <h1>Related Artists</h1>
              <div id="panel panel-default">
                <div id="panel-body"><RelatedArtists relatedArtists={this.state.relatedArtists}/></div>     
                <div styleName='RAButton' class="panel-footer">
                <button onClick={this.moreArtistsHandleClick}> More Artists</button>
              </div>

              </div>
            </div>
        </div>
        </div>
        );
    }
}

export default CSSModules(App, styles);
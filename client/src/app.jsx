import React from 'react';
import RelatedArtists from './relatedArtist.jsx';
import './styles/relatedArtist.css'


const axios = require('axios');
var allArtists;
class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {  
         relatedArtists : [],
         firstFourArtists : []
       }

       this.getRelatedArtists = this.getRelatedArtists.bind(this);
       this.moreArtistsHandleClick = this.moreArtistsHandleClick.bind(this);
   }
 
   getRelatedArtists() {
    let context = this;
    axios.get('http://localhost:3002/relatedArtists/id/artist')
      .then((response) => {
        allArtists = response.data;
        let firstFour = [];
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

   moreArtistsHandleClick() {
      this.setState({
        relatedArtists : allArtists
      })
      console.log('i was clicked')
   }

   componentDidMount() {
       this.getRelatedArtists();
       console.log('do something for the love of god')
   }

    render() {

        return (
        <div>
            <div className="RAContainer">
            <h1>Related Artists</h1>
              <div id="panel panel-default">
                <div id="panel-body"><RelatedArtists relatedArtists={this.state.relatedArtists}/></div>     
                <div className="RAbutton"class="panel-footer">
                <button onClick={this.moreArtistsHandleClick}>More Artists</button>
              </div>
              </div>
            </div>
        </div>
        );
    }
}

export default App;
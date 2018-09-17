import React from 'react';
import RelatedArtists from './relatedArtist.jsx';
const axios = require('axios');

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {  
         relatedArtists : []
       }
       this.styles = {
           backgroundColor: 'black',
           color: 'white'
       }
       this.getRelatedArtists = this.getRelatedArtists.bind(this);
   }
   
 
   getRelatedArtists() {
    let context = this;
    axios.get('http://localhost:3002/relatedArtists/id/artist')
      .then((response) => {
         console.log(response);
         context.setState({
             relatedArtists : response.data
         })
       })
      .catch(function (error) {
         console.log(error);
     });
   }

   componentDidMount() {
       this.getRelatedArtists();
       console.log('do something for the love of god')
   }

    render() {

        return (
        <div>
            <div className="RAContainer" style={this.styles}>
            <h1>Related Artists</h1>
              <div id="panel panel-default">
                <div id="panel-body"><RelatedArtists relatedArtists={this.state.relatedArtists}/></div>     
              </div>
            </div>
        </div>
        );
    }
}

export default App;
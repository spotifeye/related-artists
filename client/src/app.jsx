import React from 'react';
import $ from 'jquery';
import RelatedArtists from './relatedArtist.jsx';
const axios = require('axios');

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {  
         relatedArtists : []
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
       console.log('something for the love of god')
   }

    render() {
        return (
        <div>
            <div>hello</div>
            <div>check</div>
            <RelatedArtists relatedArtists={this.state.relatedArtists}/>
        </div>
        );
    }
}

export default App;
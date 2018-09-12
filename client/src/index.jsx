import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import RelatedArtists from './relatedArtist.jsx'

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {           
       }
   }

   getRelatedArtists() {
       $.ajax({
           method: "GET",
           url: '/artist/id/relatedArtists',
           sucess:(data) => {
               console.log('ajax success');
           },
           failue: () => {
              console.log('ajax error');
           }

       })
   }

    render() {
        return (
        <h1> hello! world</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

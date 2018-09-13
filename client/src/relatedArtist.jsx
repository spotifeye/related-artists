//contains artists container and button, displays each entry
import React from 'react';
import relatedArtistEntry from './relatedArtistEntry';

const relatedArtist = (props) =>(
       
            <div>
              <div>
                {
                props.relatedArtist.map(artistEntry => <relatedArtistEntry item={artistEntry}/>)
                }
              </div>              
              <button>button that extends container to show five more</button>
            </div>
    )
export default relatedArtist;
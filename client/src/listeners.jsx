import React from 'react';

let styles = {
  display: "flex",
  margin: "right"
}

const listeners = (props) => (
    
  <div className="RaListeners" style={styles} >{props.artist.listeners}</div>
);

export default listeners;
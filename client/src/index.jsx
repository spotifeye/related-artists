import React from 'react';
import ReactDOM from 'react-dom';
import RAApp from './app.jsx';

ReactDOM.render (<RAApp />, document.getElementById ('raapp'));

window.RAApp = RAApp;

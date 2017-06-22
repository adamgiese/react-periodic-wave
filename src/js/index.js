import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import WebFont from 'webfontloader';

//styling
require('./../scss/styles.scss');
WebFont.load({
  google: {
    families: ['Lato']
  }
});

//polyfill for older browswers
require('es6-promise').polyfill();

//app init
ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDom from 'react-dom';

import '../assets/style/main.scss';

import App from './App';

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

ReactDom.render(<App />, document.querySelector('.root'));

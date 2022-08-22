import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import RootProvider from './context/RootProvider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <RootProvider>
    <App />
  </RootProvider>,
  document.getElementById('root'),
);

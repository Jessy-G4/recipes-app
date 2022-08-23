import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RootProvider from './context/RootProvider';

ReactDOM.render(
  <RootProvider>
    <App />
  </RootProvider>,
  document.getElementById('root'),
);

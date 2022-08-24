import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import RootProvider from './context/RootProvider';

ReactDOM.render(
  <BrowserRouter>
    <RootProvider>
      <App />
    </RootProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

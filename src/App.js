import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';

function App() {
  return (
    <BrowserRouter>
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
    </BrowserRouter>
  );
}

export default App;

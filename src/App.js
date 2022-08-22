import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Recipes from './Pages/Recipes';

function App() {
  return (
    <BrowserRouter>
      <Route path="/recipes" component={ Recipes } />
    </BrowserRouter>
  );
}

export default App;

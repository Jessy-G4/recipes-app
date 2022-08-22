import React from 'react';
import './App.css';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Drinks from './Pages/Drinks';
import Foods from './Pages/Foods';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import DoneRecepies from './Pages/DoneRecepies';
import FavoriteRecepes from './Pages/FavoriteRecipes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecepies } />
        <Route path="/favorite-recipes" component={ FavoriteRecepes } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

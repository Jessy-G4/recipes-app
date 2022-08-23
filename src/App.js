import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';

function App() {
  return (
    <Switch>
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
    </Switch>
  );
}

export default App;

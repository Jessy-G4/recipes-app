// FUncionalidades
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// Importações
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;

import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RootProvider from './context/RootProvider';

function App() {
  return (
    <RootProvider>
      <SearchBar />
    </RootProvider>
  );
}

export default App;

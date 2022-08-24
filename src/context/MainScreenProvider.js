import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MainScreenContex = createContext();

export default function MainScreenProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState([]);

  const value = {
    recipes,
    setRecipes,
    category,
    setCategory,
  };

  return (

    <MainScreenContex.Provider value={ value }>
      {children}
    </MainScreenContex.Provider>
  );
}

MainScreenProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

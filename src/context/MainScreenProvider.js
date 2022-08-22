import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MainScreenContex = createContext();

export default function MainScreenProvider({ children }) {
  const [foodsApi, setFoodsApi] = useState([]);
  const [drinksApi, setDrinksApi] = useState([]);

  const value = {
    foodsApi,
    drinksApi,
    setFoodsApi,
    setDrinksApi,
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

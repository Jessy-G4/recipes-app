import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MainScreenContex = createContext();

export default function MainScreenProvider({ children }) {
  const [revenues, setRevenues] = useState([]);

  const value = {
    revenues,
    setRevenues,
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

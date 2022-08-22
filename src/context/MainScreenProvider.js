import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MainScreenContex = createContext();

export default function MainScreenProvider({ children }) {
  const [mailsAOrDrinksApi, setMailsAOrDrinksApi] = useState([]);

  const value = {
    mailsAOrDrinksApi,
    setMailsAOrDrinksApi,
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

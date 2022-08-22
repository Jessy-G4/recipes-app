import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

export default function HeaderProvider({ children }) {
  const value = {
  };

  return (
    <RecipesContext.Provider value={ value }>
      {children}
    </RecipesContext.Provider>
  );
}
HeaderProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

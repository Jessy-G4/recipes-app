import React, { createContext } from 'react';
import PropTypes from 'prop-types';
// MeuContext é apenas um exemplo de nomeclatura! Lembre de modificar o nome do mesmo!
export const MeuContext = createContext();
// MeuProvider é apenas um exemplo de nomeclatura! Lembre de modificar o nome do mesmo!
export default function MeuProvider({ children }) {
  const value = {
    // Valores do seu stado global
  };

  return (
    // MeuContexto é apenas um exemplo de nomeclatura! Lembre de modificar o nome do mesmo!
    <MeuContext.Provider value={ value }>
      {children}
    </MeuContext.Provider>
  );
}
// Mude aqui também!
MeuProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

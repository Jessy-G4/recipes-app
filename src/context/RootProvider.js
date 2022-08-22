import React from 'react';
import PropTypes from 'prop-types';
import MeuProvider from './MeuProvider';

export default function RootProvider({ children }) {
  return (
    // Lembre de modificar o nome do mesmo de acordo com seu Provider criado!
    <MeuProvider>
      { children }
    </MeuProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

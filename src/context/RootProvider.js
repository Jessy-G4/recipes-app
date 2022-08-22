import React from 'react';
import PropTypes from 'prop-types';
import SearchBarProvider from './SearchBarProvider';

export default function RootProvider({ children }) {
  return (
    // Lembre de modificar o nome do mesmo de acordo com seu Provider criado!
    <SearchBarProvider>
      { children }
    </SearchBarProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

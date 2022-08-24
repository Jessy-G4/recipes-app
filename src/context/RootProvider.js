import React from 'react';
import PropTypes from 'prop-types';
import HeaderProvider from './HeaderProvider';
import SearchBarProvider from './Provider';

export default function RootProvider({ children }) {
  return (
    <HeaderProvider>
      <SearchBarProvider>
        { children }
      </SearchBarProvider>
    </HeaderProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

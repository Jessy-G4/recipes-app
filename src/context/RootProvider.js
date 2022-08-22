import React from 'react';
import PropTypes from 'prop-types';
import HeaderProvider from './HeaderProvider';

export default function RootProvider({ children }) {
  return (
    <HeaderProvider>
      { children }
    </HeaderProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

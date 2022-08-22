// funcionalidades
import React from 'react';
import PropTypes from 'prop-types';
// importações
import LoginProvider from './LoginProvider';

export default function RootProvider({ children }) {
  return (
    <LoginProvider>
      { children }
    </LoginProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

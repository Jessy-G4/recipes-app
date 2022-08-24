// funcionalidades
import React from 'react';
import PropTypes from 'prop-types';
// importações
import HeaderProvider from './HeaderProvider';
import SearchBarProvider from './SearchBarProvider';
import MainScreenProvider from './MainScreenProvider';
import LoginProvider from './LoginProvider';

export default function RootProvider({ children }) {
  return (
   <LoginProvider>
      <HeaderProvider>
        <SearchBarProvider>
          <MainScreenProvider>
            { children }
          </MainScreenProvider>
        </SearchBarProvider>
      </HeaderProvider>
    </LoginProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

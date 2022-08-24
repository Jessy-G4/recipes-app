import React from 'react';
import PropTypes from 'prop-types';

import HeaderProvider from './HeaderProvider';
import SearchBarProvider from './SearchBarProvider';
import MainScreenProvider from './MainScreenProvider';

export default function RootProvider({ children }) {
  return (
    <HeaderProvider>
      <SearchBarProvider>
        <MainScreenProvider>
          { children }
        </MainScreenProvider>
      </SearchBarProvider>
    </HeaderProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

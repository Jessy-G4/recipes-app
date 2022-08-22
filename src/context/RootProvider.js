import React from 'react';
import PropTypes from 'prop-types';
import MainScreenProvider from './MainScreenProvider';

export default function RootProvider({ children }) {
  return (

    <MainScreenProvider>
      { children }
    </MainScreenProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

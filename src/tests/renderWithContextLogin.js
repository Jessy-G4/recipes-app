import React from 'react'
import { render } from '@testing-library/react'
import { loginContext } from '../context/RootProvider' // meu context
import RootProvider from '../context/RootProvider' // meu provider

const renderWithContextLogin = (component) => {
  return {
    ...render(
        <RootProvider value={ loginContext }>
            {component}
        </RootProvider>)
  }
}
export default renderWithContextLogin;
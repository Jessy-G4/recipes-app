import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Teste da página Header', () => {
  it('Verifica a cobertura do componente Header', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    const iconSearch = screen.getByTestId('search-top-btn');
    userEvent.click(iconSearch);
    userEvent.click(iconSearch);
  });
});

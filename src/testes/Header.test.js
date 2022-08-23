import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Teste da página Header', () => {
  it('', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    const nome = screen.getByTestId('search-top-btn');
    userEvent.click(nome);
    userEvent.click(nome);
  });
});

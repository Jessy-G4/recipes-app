import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

test('Farewell, front-end', async () => {
  render(<App history={ history } />);
  const input = screen.getByTestId('search-input');
  userEvent.type(input, 'Arrabiata');

  const nameRadio = screen.getByTestId('name-search-radio');
  userEvent.click(nameRadio);

  const searchBtn = screen.getByTestId('exec-search-btn');
  userEvent.click(searchBtn);

  const ingredientRadio = screen.getByTestId('ingredient-search-radio');
  expect(ingredientRadio).toBeInTheDocument();
  const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
  expect(firstLetterRadio).toBeInTheDocument();
});

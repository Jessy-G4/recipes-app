import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/RenderWithRouter';
import SearchBar from '../components/SearchBar';
import RootProvider from '../context/RootProvider';

test('Farewell, front-end', async () => {
  renderWithRouter(<RootProvider><SearchBar /></RootProvider>);
  const input = screen.getByTestId('search-input');
  userEvent.type(input, 'Arrabiata');

  const nameRadio = screen.getByTestId('name-search-radio');
  userEvent.click(nameRadio);

  const searchBtn = screen.getByTestId('exec-search-btn');
  userEvent.click(searchBtn);

  await waitFor(() => {
    expect(screen.getByTestId('0-card-name'));
  })
});

test('Farewell, front-end', async () => {
  renderWithRouter(<RootProvider><SearchBar /></RootProvider>);

  userEvent.click(screen.getByText('Drinks'));

  const input = screen.getByTestId('search-input');
  userEvent.type(input, 'Angel Face');

  const nameRadio = screen.getByTestId('name-search-radio');
  userEvent.click(nameRadio);

  const searchBtn = screen.getByTestId('exec-search-btn');
  userEvent.click(searchBtn);

  await waitFor(() => {
    expect(screen.getByTestId('0-card-name').textContent).toBe('Angel Face');
  })
});

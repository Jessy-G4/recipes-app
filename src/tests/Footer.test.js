import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Foods from '../Pages/Foods';
import renderWithRouter from './helpers/renderWithRouter';


describe('Teste da página footer',() => {
it('Teste se o footer renderiza na tela correntamente',() => {
    const { history } = renderWithRouter(<Foods />);
    const drinkButton = screen.getByTestId(/drinks-bottom/i);
    const foodButton = screen.getByTestId(/food-bottom/i);
    expect(drinkButton).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();

})
it('Teste se ao clicar o footer é redirecionado para a pagina',() => {
    const { history } = renderWithRouter(<Foods />);
    const drinkButton = screen.getByTestId(/drinks-bottom/i);
    const foodButton = screen.getByTestId(/food-bottom/i);
    userEvent.click(drinkButton);
    expect(history.location.pathname).toBe('/drinks');
    userEvent.click(foodButton);
    expect(history.location.pathname).toBe('/foods');
})
})


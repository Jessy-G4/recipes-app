import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import App from "../App";

import meals from '../../cypress/mocks/meals';

import { MainScreenContex } from "../context/MainScreenProvider"

const categoryMock = {
  "meals": [
    {
      "strCategory": "Beef"
    },
    {
      "strCategory": "Breakfast"
    },
    {
      "strCategory": "Chicken"
    },
    {
      "strCategory": "Dessert"
    },
    {
      "strCategory": "Goat"
    },
    {
      "strCategory": "Lamb"
    },
    {
      "strCategory": "Miscellaneous"
    },
    {
      "strCategory": "Pasta"
    },
    {
      "strCategory": "Pork"
    },
    {
      "strCategory": "Seafood"
    },
    {
      "strCategory": "Side"
    },
    {
      "strCategory": "Starter"
    },
    {
      "strCategory": "Vegan"
    },
    {
      "strCategory": "Vegetarian"
    }
  ]
}
const buttonsMock = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat'
];
const tittlesMock = [
  'Corba',
  'Kumpir',
  'Dal fry',
  'Poutine',
  'Lasagne',
  'Timbits',
  'Wontons',
  'Kafteji',
  'Big Mac',
  'Kapsalon',
  'Fish pie',
  'Pancakes'
];

describe('Testa a page Foods', () => {

  beforeEach(() => {
    const value = {
      recipes: [...meals.meals],
      category: [...categoryMock.meals],
    };
    
    render(
      <MemoryRouter initialEntries={['/foods']}>
        <MainScreenContex.Provider value={ value }>
          <App />
        </MainScreenContex.Provider>
      </MemoryRouter>
    )
  })

  test('Verifica se os titulos das receitas são renderizados', () => {
  
    tittlesMock.map((element) => {
      const button = screen.getByRole('heading', { name: `${element}` });
      expect(button).toBeInTheDocument();
    })
  })

  test('Verifica se os botões das receitas são renderizados', () => {   
  
    buttonsMock.map((element) => {
      const button = screen.getByRole('button', { name: `${element}` });
      expect(button).toBeInTheDocument();
    })
  })
})


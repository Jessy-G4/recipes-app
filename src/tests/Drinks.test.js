import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import App from "../App";

import drinks from '../../cypress/mocks/drinks';

import { MainScreenContex } from "../context/MainScreenProvider"

const categoryMock = {
  "drinks": [
    {
      "strCategory": "Ordinary Drink"
    },
    {
      "strCategory": "Cocktail"
    },
    {
      "strCategory": "Shake"
    },
    {
      "strCategory": "Other/Unknown"
    },
    {
      "strCategory": "Cocoa"
    },
    {
      "strCategory": "Shot"
    },
    {
      "strCategory": "Coffee / Tea"
    },
    {
      "strCategory": "Homemade Liqueur"
    },
    {
      "strCategory": "Punch / Party Drink"
    },
    {
      "strCategory": "Beer"
    },
    {
      "strCategory": "Soft Drink"
    }
  ]
}

const buttonsMock = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa'
];
const tittlesMock = [
  'GG',
  'A1',
  'ABC',
  'Kir',
  '747',
  '252',
  'Ace',
  'Adam',
  'B-53',
  'AT&T',
  'ACID',
  'B-52'
];

describe('Testa a page Drinks', () => {

  beforeEach(() => {
    const value = {
      recipes: [...drinks.drinks],
      category: [...categoryMock.drinks],
    };
    
    render(
      <MemoryRouter initialEntries={['/drinks']}>
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


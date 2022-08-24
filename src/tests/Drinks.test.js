import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import App from "../App";
import Drinks from '../Pages/Drinks';

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
const dataMock = {
  "drinks": [
    {
      "strDrink": "151 Florida Bushwacker",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
      "idDrink": "14588"
    },
    {
      "strDrink": "Avalanche",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uppqty1472720165.jpg",
      "idDrink": "16419"
    },
    {
      "strDrink": "Baby Eskimo",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wywrtw1472720227.jpg",
      "idDrink": "15511"
    },
    {
      "strDrink": "Banana Milk Shake",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
      "idDrink": "12654"
    },
    {
      "strDrink": "Banana Strawberry Shake",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
      "idDrink": "12656"
    },
    {
      "strDrink": "Banana Strawberry Shake Daiquiri",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
      "idDrink": "12658"
    },
    {
      "strDrink": "Black Forest Shake",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg",
      "idDrink": "15951"
    },
    {
      "strDrink": "Blind Russian",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wxuqvr1472720408.jpg",
      "idDrink": "14356"
    },
    {
      "strDrink": "Boozy Snickers Milkshake",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/861tzm1504784164.jpg",
      "idDrink": "17221"
    },
    {
      "strDrink": "Butter Baby",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/1xhjk91504783763.jpg",
      "idDrink": "17220"
    },
    {
      "strDrink": "Chocolate Monkey",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tyvpxt1468875212.jpg",
      "idDrink": "15615"
    },
    {
      "strDrink": "Jamaica Kiss",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/urpvvv1441249549.jpg",
      "idDrink": "14095"
    },
  ]
}

describe('Testa a page Drinks', () => {
  const funcMockTestRecipes = jest.fn();
  const funcMockTestCategory = jest.fn();

  beforeEach(() => {
    const value = {
      recipes: [...drinks.drinks],
      setRecipes: () => funcMockTestRecipes(),
      category: [...categoryMock.drinks],
      setCategory: () => funcMockTestCategory()
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

  test('Verifica se os Hoocks de set são executados', async () => {    
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(dataMock)
    }))
    
    const button = screen.getByRole('button', { name: /shake/i })
    expect(button).toBeInTheDocument()
    fireEvent.click(button);

    const buttonAll = screen.getByRole('button', { name: /all/i })
    expect(button).toBeInTheDocument()  
    fireEvent.click(buttonAll);
    
    await waitFor(() => {}, 1000)
    expect(funcMockTestRecipes).toHaveBeenCalledTimes(2)
  })
})

test('Verifica se os Hoocks de set são executados dentro de useEfect ao renderizar o component Foods', async () => {
  const funcMockTestRecipes = jest.fn();
  const funcMockTestCategory = jest.fn();

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(dataMock)
  }))

  const value = {
          recipes: [...drinks.drinks],
          setRecipes: () => funcMockTestRecipes(),
          category: [...categoryMock.drinks],
          setCategory: () => funcMockTestCategory()
        };
  
  render(
    <MemoryRouter>
      <MainScreenContex.Provider value={ value }>
        <Drinks />
      </MainScreenContex.Provider>
    </MemoryRouter>
  )
  
  await waitFor(() => {
    expect(funcMockTestRecipes).toHaveBeenCalledTimes(1)
    expect(funcMockTestCategory).toHaveBeenCalledTimes(1)
  }, 1000)
})
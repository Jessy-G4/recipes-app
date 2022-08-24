import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import App from "../App";
import Foods from '../pages/Foods';

import meals from '../../cypress/mocks/meals';

import { MainScreenContex } from "../context/MainScreenProvider";
import RootProvider from '../context/RootProvider';

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
const checkboxsMock = [
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
const dataMock = {
  "meals": [
    {
      "strMeal": "Beef and Mustard Pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
      "idMeal": "52874"
    },
    {
      "strMeal": "Beef and Oyster pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
      "idMeal": "52878"
    },
    {
      "strMeal": "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
      "idMeal": "52997"
    },
    {
      "strMeal": "Beef Bourguignon",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
      "idMeal": "52904"
    },
    {
      "strMeal": "Beef Brisket Pot Roast",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
      "idMeal": "52812"
    },
    {
      "strMeal": "Beef Dumpling Stew",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
      "idMeal": "52873"
    },
    {
      "strMeal": "Beef Lo Mein",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1529444830.jpg",
      "idMeal": "52952"
    },
    {
      "strMeal": "Beef Rendang",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg",
      "idMeal": "53053"
    },
    {
      "strMeal": "Beef stroganoff",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
      "idMeal": "52834"
    },
    {
      "strMeal": "Beef Sunday Roast",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
      "idMeal": "52824"
    },
    {
      "strMeal": "Beef Wellington",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
      "idMeal": "52803"
    },
    {
      "strMeal": "Big Mac",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
      "idMeal": "53013"
    },
  ]
}


describe('Testa a page Foods', () => {
  const funcMockTestRecipes = jest.fn();
  const funcMockTestCategory = jest.fn();
  
  beforeEach(() => {
    const value = {
      recipes: [...meals.meals],
      setRecipes: () => funcMockTestRecipes(),
      category: [...categoryMock.meals],
      setCategory: () => funcMockTestCategory()
    };
    
    render(
      <RootProvider>
      <MemoryRouter>
        <MainScreenContex.Provider value={ value }>
          <Foods />
        </MainScreenContex.Provider>
      </MemoryRouter>
      </RootProvider>
    )
  })

  test('Verifica se os titulos das receitas são renderizados', () => {
  
    tittlesMock.map((element) => {
      const heading = screen.getByRole('heading', { name: `${element}` });
      expect(heading).toBeInTheDocument();
    })
    // screen.logTestingPlaygroundURL()
  })

  test('Verifica se os botões das receitas são renderizados', () => {   
  
    checkboxsMock.map((element) => {
      const checkbox = screen.getByRole('checkbox', { name: `${element}` });
      expect(checkbox).toBeInTheDocument();
    })
  })

  test('Verifica se os Hoocks de set são executados', async () => {    
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(dataMock)
    }))
    
    const checkbox = screen.getByRole('checkbox', { name: /beef/i })
    expect(checkbox).toBeInTheDocument()
    fireEvent.click(checkbox);
    
    const checkboxAll = screen.getByRole('checkbox', { name: /all/i })
    expect(checkbox).toBeInTheDocument()
    fireEvent.click(checkboxAll);

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
          recipes: [...meals.meals],
          setRecipes: () => funcMockTestRecipes(),
          category: [...categoryMock.meals],
          setCategory: () => funcMockTestCategory()
        };
  
  render(
    <RootProvider>
    <MemoryRouter>
      <MainScreenContex.Provider value={ value }>
        <Foods />
      </MainScreenContex.Provider>
    </MemoryRouter>
    </RootProvider>
  )
  
  await waitFor(() => {
    expect(funcMockTestRecipes).toHaveBeenCalledTimes(1)
    expect(funcMockTestCategory).toHaveBeenCalledTimes(1)
  }, 1000)
})
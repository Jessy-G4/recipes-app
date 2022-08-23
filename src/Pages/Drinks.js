import React, { useEffect, useContext } from 'react';
import Recipes from '../Components/Recipes';
import { MainScreenContex } from '../context/MainScreenProvider';
import apiConsult from '../service/apiConsult';

const URLS = {
  URL_RECIPES: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  URL_CATEGORY: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  URL_BUTTON_CATEGORY: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
};

function Drinks() {
  const { setRecipes, setCategory } = useContext(MainScreenContex);

  useEffect(() => {
    async function fetchData() {
      const { drinks: recipes } = await apiConsult(URLS.URL_RECIPES);
      setRecipes(recipes);
      const { drinks: category } = await apiConsult(URLS.URL_CATEGORY);
      setCategory(category);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Recipes
        mealsOrDrinks="Drink"
        urlButtonCategory={ URLS.URL_BUTTON_CATEGORY }
        urlRecipes={ URLS.URL_RECIPES }
      />
    </div>
  );
}

export default Drinks;

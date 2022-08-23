import React, { useEffect, useContext } from 'react';
import Recipes from '../Components/Recipes';
import { MainScreenContex } from '../context/MainScreenProvider';
import apiConsult from '../service/apiConsult';

const URL_RECIPES = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

function Foods() {
  const { setRecipes, setCategory } = useContext(MainScreenContex);

  useEffect(() => {
    async function fetchData() {
      const { meals: recipes } = await apiConsult(URL_RECIPES);
      setRecipes(recipes);
      const { meals: category } = await apiConsult(URL_CATEGORY);
      setCategory(category);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Recipes mealsOrDrinks="Meal" />
    </div>
  );
}

export default Foods;

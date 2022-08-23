import React, { useEffect, useContext } from 'react';
import Recipes from '../Components/Recipes';
import { MainScreenContex } from '../context/MainScreenProvider';
import apiConsult from '../service/apiConsult';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function Foods() {
  const { setRecipes } = useContext(MainScreenContex);

  useEffect(() => {
    async function fetchData() {
      const { meals } = await apiConsult(URL);
      setRecipes(meals);
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

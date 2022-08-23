import React, { useEffect, useContext } from 'react';
import Recipes from '../Components/Recipes';
import { MainScreenContex } from '../context/MainScreenProvider';
import apiConsult from '../service/apiConsult';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function Drinks() {
  const { setRecipes } = useContext(MainScreenContex);

  useEffect(() => {
    async function fetchData() {
      const { drinks } = await apiConsult(URL);
      setRecipes(drinks);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Recipes mealsOrDrinks="Drink" />
    </div>
  );
}

export default Drinks;

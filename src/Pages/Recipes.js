import React, { useEffect, useContext } from 'react';
import apiConsult from '../service/apiConsult';

import { MainScreenContex } from '../context/MainScreenProvider';
// import { useParams } from 'react-router-dom';

function Recipes() {
  const { mailsAOrDrinksApi, setMailsAOrDrinksApi } = useContext(MainScreenContex);
  // const { mealsOrDrinks } = useParams();

  // const mealsOrDrinks = 'drinks';
  const mealsOrDrinks = 'meals';

  useEffect(() => {
    async function fetchData() {
      const data = await apiConsult(mealsOrDrinks);
      setMailsAOrDrinksApi(data[mealsOrDrinks]);
    }
    fetchData();
  }, []);

  return (
    <div>Recipes</div>
  );
}

export default Recipes;

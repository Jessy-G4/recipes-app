import React, { useEffect, useContext } from 'react';
import apiConsult from '../service/apiConsult';

import MainScreenCard from '../Components/MainScreenCard';

import { MainScreenContex } from '../context/MainScreenProvider';

function Drinks() {
  const { drinksApi, setDrinksApi } = useContext(MainScreenContex);

  const MAX_ELEMENTS = 12;

  useEffect(() => {
    async function fetchData() {
      const { drinks } = await apiConsult('drinks');
      setDrinksApi(drinks);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {drinksApi
        .filter((element, index) => index < MAX_ELEMENTS)
        .map((elementMap, indexMap) => (
          <MainScreenCard
            key={ indexMap }
            mealsOrDrinks="Drink"
            element={ elementMap }
            index={ indexMap }
          />
        ))}
    </div>
  );
}

export default Drinks;

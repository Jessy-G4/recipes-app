import React, { useEffect, useContext } from 'react';
import apiConsult from '../service/apiConsult';

import MainScreenCard from '../Components/MainScreenCard';

import { MainScreenContex } from '../context/MainScreenProvider';

function Foods() {
  const { foodsApi, setFoodsApi } = useContext(MainScreenContex);

  const MAX_ELEMENTS = 12;

  useEffect(() => {
    async function fetchData() {
      const { meals } = await apiConsult('meals');
      setFoodsApi(meals);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {foodsApi
        .filter((element, index) => index < MAX_ELEMENTS)
        .map((elementMap, indexMap) => (
          <MainScreenCard
            key={ indexMap }
            mealsOrDrinks="Meal"
            element={ elementMap }
            index={ indexMap }
          />
        ))}
    </div>
  );
}

export default Foods;

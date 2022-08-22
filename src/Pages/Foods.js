import React, { useEffect, useContext } from 'react';
import apiConsult from '../service/apiConsult';

import MainScreenCard from '../Components/MainScreenCard';

import { MainScreenContex } from '../context/MainScreenProvider';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function Foods() {
  const { revenues, setRevenues } = useContext(MainScreenContex);

  const MAX_ELEMENTS = 12;

  useEffect(() => {
    async function fetchData() {
      const { meals } = await apiConsult(URL);
      setRevenues(meals);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {revenues
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
      <button></button>
    </div>
  );
}

export default Foods;

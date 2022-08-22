import React, { useEffect, useContext } from 'react';
import apiConsult from '../service/apiConsult';

import MainScreenCard from '../Components/MainScreenCard';

import { MainScreenContex } from '../context/MainScreenProvider';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function Drinks() {
  const { revenues, setRevenues } = useContext(MainScreenContex);

  const MAX_ELEMENTS = 12;

  useEffect(() => {
    async function fetchData() {
      const { drinks } = await apiConsult(URL);
      setRevenues(drinks);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {revenues
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

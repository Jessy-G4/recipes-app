import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MainScreenContex } from '../context/MainScreenProvider';
import MainScreenCard from './MainScreenCard';

function Recipes({ mealsOrDrinks }) {
  const { recipes } = useContext(MainScreenContex);

  const MAX_ELEMENTS = 12;

  return (
    <div>
      <div>
        {recipes
          .filter((element, index) => index < MAX_ELEMENTS)
          .map((elementMap, indexMap) => (
            <MainScreenCard
              key={ indexMap }
              mealsOrDrinks={ mealsOrDrinks }
              element={ elementMap }
              index={ indexMap }
            />
          ))}
      </div>
    </div>
  );
}

Recipes.propTypes = {
  url: PropTypes.string,
}.isRequired;

export default Recipes;

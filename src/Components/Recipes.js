import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MainScreenContex } from '../context/MainScreenProvider';
import MainScreenCard from './MainScreenCard';

function Recipes({ mealsOrDrinks }) {
  const { recipes, category } = useContext(MainScreenContex);

  const MAX_ELEMENTS_RECIPES = 12;
  const MAX_ELEMENTS_CATEGORY = 5;

  return (
    <div>
      <div>
        {category
          .filter((element, index) => index < MAX_ELEMENTS_CATEGORY)
          .map(({ strCategory }, indexMap) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              key={ indexMap }
              type="button"
            >
              {strCategory}
            </button>
          ))}
      </div>
      <div>
        {recipes
          .filter((element, index) => index < MAX_ELEMENTS_RECIPES)
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

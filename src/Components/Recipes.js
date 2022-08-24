import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MainScreenContex } from '../context/MainScreenProvider';
import MainScreenCard from './MainScreenCard';

import apiConsult from '../service/apiConsult';

function Recipes({ mealsOrDrinks, urlButtonCategory, urlRecipes }) {
  const { recipes, category, setRecipes } = useContext(MainScreenContex);

  const MAX_ELEMENTS_RECIPES = 12;
  const MAX_ELEMENTS_CATEGORY = 5;

  const setData = async (url) => {
    const data = await apiConsult(url);
    const dataRecipes = data.meals || data.drinks;
    setRecipes(dataRecipes);
  };

  const handleButton = (strCategory) => {
    const url = strCategory ? `${urlButtonCategory}${strCategory}` : urlRecipes;
    setData(url);
  };

  return (
    <div>
      <div>
        <input type="checkbox" />
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => handleButton() }
        >
          All
        </button>
        {category
          .filter((element, index) => index < MAX_ELEMENTS_CATEGORY)
          .map(({ strCategory }, indexMap) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              key={ indexMap }
              type="button"
              onClick={ () => handleButton(strCategory) }
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

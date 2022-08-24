import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { MainScreenContex } from '../context/MainScreenProvider';
import MainScreenCard from './MainScreenCard';

import apiConsult from '../service/apiConsult';

const ARRAY_LENGTH = 5;

function Recipes({ mealsOrDrinks, urlButtonCategory, urlRecipes }) {
  const { recipes, category, setRecipes } = useContext(MainScreenContex);

  const [toggleAll, setToggleAll] = useState(false);
  const [toggle, setToggle] = useState(new Array(ARRAY_LENGTH).fill(false));

  const MAX_ELEMENTS_RECIPES = 12;
  const MAX_ELEMENTS_CATEGORY = 5;

  const setData = async (url) => {
    const data = await apiConsult(url);
    const dataRecipes = data.meals || data.drinks;
    setRecipes(dataRecipes);
  };

  const handleToggle = (checked, strCategory, indexMap) => {
    if (checked && strCategory) {
      setData(`${urlButtonCategory}${strCategory}`);
      setToggleAll(false);
      setToggle(toggle.map((element, index) => index === indexMap && !element));
    } else {
      setData(urlRecipes);
      setToggleAll(true);
      setToggle(toggle.map(() => false));
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="All">
          <input
            data-testid="All-category-filter"
            id="All"
            type="checkbox"
            checked={ toggleAll }
            onChange={ ({ target: { checked } }) => handleToggle(checked) }
          />
          All
        </label>
        {category
          .filter((element, index) => index < MAX_ELEMENTS_CATEGORY)
          .map(({ strCategory }, indexMap) => (
            <label
              htmlFor={ strCategory }
              key={ indexMap }
            >
              <input
                id={ strCategory }
                data-testid={ `${strCategory}-category-filter` }
                type="checkbox"
                checked={ toggle[indexMap] }
                onClick={
                  ({
                    target: { checked },
                  }) => handleToggle(checked, strCategory, indexMap)
                }
              />
              { strCategory }
            </label>
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

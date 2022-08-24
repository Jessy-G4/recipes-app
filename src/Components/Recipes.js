import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MainScreenContex } from '../context/MainScreenProvider';
import MainScreenCard from './MainScreenCard';

import apiConsult from '../service/apiConsult';

function Recipes({ mealsOrDrinks, urlButtonCategory, urlRecipes }) {
  const { recipes, category, setRecipes } = useContext(MainScreenContex);

  const [toggleAll, setToggleAll] = useState(false);
  const [toggle, setToggle] = useState(new Array(5).fill(false));

  // console.log(toggle);

  const MAX_ELEMENTS_RECIPES = 12;
  const MAX_ELEMENTS_CATEGORY = 5;

  const setData = async (url) => {
    const data = await apiConsult(url);
    const dataRecipes = data.meals || data.drinks;
    setRecipes(dataRecipes);
  };

  // const handleButton = (strCategory) => {
  //   const url = strCategory ? `${urlButtonCategory}${strCategory}` : urlRecipes;
  //   setData(url);
  // };
  // const handleCheck = (checked, indexMap) => {
  //   if (checked) {
  //     setToggleAll(false);
  //     setToggle(toggle.map((element, index) => index === indexMap && !element));
  //   }
  // };

  const handleToggle = (checked, strCategory, indexMap) => {
    // if (checked && strCategory) {
    //   setData(`${urlButtonCategory}${strCategory}`);
    // } else if (checked) {
    //   setData(urlRecipes);
    // handleCheck(checked, indexMap);
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
        {/* <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => handleButton() }
        >
          All
        </button> */}
        {/* {category
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
          ))} */}
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

import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBarContext } from '../context/SearchBarProvider';
import SearchBarCard from './SearchBarCard';

export default function SearchBar() {
  const { filters, setFilters, getRecipes, recipes } = useContext(SearchBarContext);

  const history = useHistory();

  const handleCheckboxClick = (e) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  useEffect(() => {
    if (recipes.length === 1) {
      const { location: { pathname } } = history;
      if (pathname.includes('/drinks')) {
        history.push(`/drinks/${recipes[0].idDrink}`);
      } else {
        history.push(`/foods/${recipes[0].idMeal}`);
      }
    }
  }, [recipes]);

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        value={ filters.inputValue }
        onChange={ (e) => setFilters({ ...filters, inputValue: e.target.value }) }
      />
      <span>Filtrar por:</span>
      <br />
      <label htmlFor="ingred">
        <input
          type="radio"
          name="search-radio"
          data-testid="ingredient-search-radio"
          id="ingred"
          value="ingredient"
          onClick={ handleCheckboxClick }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="search-radio"
          value="name"
          data-testid="name-search-radio"
          onClick={ handleCheckboxClick }
        />
        Name
      </label>
      <label htmlFor="firstL">
        <input
          type="radio"
          id="firstL"
          name="search-radio"
          value="first-letter"
          data-testid="first-letter-search-radio"
          onClick={ handleCheckboxClick }
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => getRecipes() }
      >
        Buscar

      </button>
      {recipes.length > 0 && recipes.map((recipe, index) => (<SearchBarCard
        key={ index }
        data={ recipe }
        index={ index }
      />))}
    </div>
  );
}

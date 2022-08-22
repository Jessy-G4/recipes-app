import React, { useContext } from 'react';

import { SearchBarContext } from '../context/SearchBarProvider';

export default function SearchBar() {
  const { filters, setFilters, getRecipes } = useContext(SearchBarContext);

  const handleCheckboxClick = (e) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  return (
    <div>
      <button type="button" data-testid="search-top-btn">teste</button>
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
    </div>
  );
}

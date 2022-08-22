import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';
import getApi from '../services/api';

export const SearchBarContext = createContext();

export default function SearchBarProvider({ children }) {
  const [filters, setFilters] = useState({
    sortBy: 'ingredient',
    inputValue: '',
  });
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    let apiToFetch = '';
    const { sortBy, inputValue } = filters;
    if (sortBy === 'first-letter' && inputValue.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    switch (sortBy) {
    case 'ingredient':
      apiToFetch = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`;
      break;
    case 'first-letter':
      apiToFetch = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`;
      break;
    default:
      apiToFetch = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    }

    const { meals } = await getApi(apiToFetch);

    setRecipes(meals);
  };

  const value = {
    filters,
    setFilters,
    getRecipes,
    recipes,
  };

  return (
    <SearchBarContext.Provider value={ value }>
      { children }
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: propTypes.node.isRequired,
};

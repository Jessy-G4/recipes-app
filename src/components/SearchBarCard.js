import React from 'react';
import propTypes from 'prop-types';

export default function SearchBarCard({ data, index }) {
  const foodType = data.strMeal ? 'Meal' : 'Drink';

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{data[`str${foodType}`]}</p>
      <img
        src={ data[`str${foodType}Thumb`] }
        alt="thumb"
        data-testid={ `${index}-card-img` }
      />
    </div>
  );
}

SearchBarCard.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  index: propTypes.number.isRequired,
};

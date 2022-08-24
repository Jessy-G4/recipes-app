import React from 'react';
import PropTypes from 'prop-types';

function MainScreenCard({ mealsOrDrinks, element, index }) {
  return (
    <div
      data-testid={ `${index}-recipe-card` }
    >
      <h3
        data-testid={ `${index}-card-name` }
      >
        {element[`str${mealsOrDrinks}`]}
      </h3>
      <img
        style={ { width: '100px' } }
        data-testid={ `${index}-card-img` }
        src={ element[`str${mealsOrDrinks}Thumb`] }
        alt={ element[`str${mealsOrDrinks}`] }
      />
    </div>
  );
}

MainScreenCard.propTypes = {
  mealsOrDrinks: PropTypes.string,
  element: PropTypes.objectOf(),
  index: PropTypes.number,
}.isRequired;

export default MainScreenCard;

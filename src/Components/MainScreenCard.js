import React from 'react';

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

export default MainScreenCard;

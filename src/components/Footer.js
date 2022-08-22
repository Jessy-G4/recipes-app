import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../App.css';

function Footer() {
  const history = useHistory();
  return (
    <div data-testid="footer" className="footer-container">
      <button type="button" onClick={ () => history.push('/drinks') }>
        <img src={drinkIcon} alt='' data-testid="drinks-bottom-btn"/>
      </button>
      <button type='button'onClick={()=> history.push('/foods') }>
        <img src={mealIcon} alt='Meal Icon' data-testid="food-bottom-btn"/>
      </button>
    </div>
  )
}
export default Footer;

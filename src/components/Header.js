import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const [showSearchBar, setShowSearchBar] = useState('');

  function toggleSearchBar() {
    if (!showSearchBar) setShowSearchBar(true);
    if (showSearchBar) setShowSearchBar(false);
  }

  const iconSearch = (
    <button
      className="header-icon-search"
      type="button"
      onClick={ toggleSearchBar }
      onKeyDown={ toggleSearchBar }
    >
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="searchIcon"
      />
    </button>
  );

  return (
    <header>
      <h3 data-testid="page-title">{title}</h3>
      <Link to="/profile">
        <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      </Link>
      {(title === 'Foods' || title === 'Drinks') && iconSearch}
      {showSearchBar && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,

};

export default Header;

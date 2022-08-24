import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const [showSearchBar, setShowSearchBar] = useState('');

  function toggleSearchBar() {
    return showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  }

  function iconSearch() {
    return (
      <button
        className="header-icon-search"
        type="button"
        onClick={ toggleSearchBar }
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="searchIcon"
        />
      </button>
    );
  }

  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <header>
      <h3 data-testid="page-title">{title}</h3>
      <Link to="/profile">
        <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      </Link>
      {(pathname === '/foods' || pathname === '/drinks') && iconSearch()}
      {showSearchBar && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,

};

export default Header;
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import React from 'react';

function renderWithRouterLogin(component) {
  const customHistory = createMemoryHistory();

  const returnFromRender = render(
    <Router history={ customHistory }>{component}</Router>,
  );

  return { history: customHistory, ...returnFromRender };
}

export default renderWithRouterLogin;
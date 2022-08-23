import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import { setLocalStorage, saveTokenToLocalStorage } from '../helpers/creatLocalStorage';

export const loginContext = createContext();

class LoginProvider extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      disabled: true,
    };
  }

  isDisabled = () => {
    const { emailInput, passwordInput } = this.state;
    const NUMBER_SIX = 6;
    if (emailInput.includes('@')
     && emailInput.includes('.com') && passwordInput.length > NUMBER_SIX) {
      return this.setState({ disabled: false });
    } return this.setState({ disabled: true });
  }

  handleChangeLogin = (evento) => {
    const { name, value } = evento.target;
    this.setState({ [name]: value }, () => this.isDisabled());
  }

  handleClickLogin = () => {
    const { emailInput } = this.state;
    const history = createHistory();
    const email = { email: emailInput };
    setLocalStorage('user', email);
    saveTokenToLocalStorage('mealsToken', '1');
    saveTokenToLocalStorage('cocktailsToken', '1');
    history.push('/foods');
  }

  render() {
    const { Provider } = loginContext;
    const { children } = this.props;
    return (
      <Provider
        value={ {
          ...this.state,
          handleChangeLogin: this.handleChangeLogin,
          handleClickLogin: this.handleClickLogin,
        } }
      >
        {children}
      </Provider>
    );
  }
}

LoginProvider.propTypes = {
  children: PropTypes.objectOf(),
  history: PropTypes.func,
}.isRequired;

export default LoginProvider;

import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

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

  isDIsabled = () => {
    const { emailInput, passwordInput } = this.state;
    const NUMBER_SIX = 6;
    if (emailInput.includes('@')
     && emailInput.includes('.com') && passwordInput.length > NUMBER_SIX) {
      return this.setState({ disabled: false });
    } return this.setState({ disabled: true });
  }

  handleChange = (evento) => {
    const { name, value } = evento.target;
    this.setState({ [name]: value }, () => this.isDIsabled());
  }

  render() {
    const { Provider } = loginContext;
    const { children } = this.props;
    return (
      <Provider
        value={ {
          ...this.state,
          handleChange: this.handleChange,
        } }
      >
        {children}
      </Provider>
    );
  }
}

LoginProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

export default LoginProvider;

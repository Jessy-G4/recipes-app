// funcionalidades
import React, { useContext } from 'react';
// importações
import { loginContext } from '../context/LoginProvider';

export default function Login() {
  const {
    emailInput,
    passwordInput,
    handleChangeLogin,
    disabled,
    handleClickLogin,
  } = useContext(loginContext);
  return (
    <>
      <label htmlFor="email">
        Digite um email valido:
        <input
          name="emailInput"
          type="email"
          id="email"
          value={ emailInput }
          placeholder="Digite Seu Email"
          data-testid="email-input"
          onChange={ handleChangeLogin }
        />
      </label>
      <label htmlFor="password">
        Digite uma senha com mais de 6 caracteres:
        <input
          name="passwordInput"
          type="password"
          id="password"
          value={ passwordInput }
          placeholder="Digite Sua Senha"
          data-testid="password-input"
          onChange={ handleChangeLogin }
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleClickLogin }
      >
        Enter

      </button>
    </>
  );
}

// funcionalidades
import React, { useContext } from 'react';
// importações
import { loginContext } from '../context/LoginProvider';

export default function Login() {
  const { emailInput, passwordInput, handleChange, disabled } = useContext(loginContext);
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
          onChange={ handleChange }
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
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
      >
        Enter

      </button>
    </>
  );
}

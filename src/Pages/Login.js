import React from 'react';

export default function Login() {
  return (
    <>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          placeholder="Digite Seu Email"
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          id="password"
          placeholder="Digite Sua Senha"
          data-testid="password-input"
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter

      </button>
    </>
  );
}

// Funcionalidades
import React from 'react';
import { render, screen } from '@testing-library/react';
import renderWithContextLogin from './renderWithContextLogin';
import userEvent from '@testing-library/user-event'
import renderWithRouterLogin from './renderWithRouterLogin';

// Importações
import Login from '../Pages/Login';
import RootProvider from '../context/RootProvider';
import App from '../App';

test('Se ao entrar na página aparece um input de email', () => {
    renderWithRouterLogin(
    <RootProvider>
    <Login />
    </RootProvider>
    );
  const elemento = screen.getByPlaceholderText(/digite seu email/i);
  expect(elemento).toBeInTheDocument();
  });

test('Se ao entrar na página aparece um input de senha', () => {
    renderWithRouterLogin(
    <RootProvider>
    <Login />
    </RootProvider>
    );
  const elemento = screen.getByPlaceholderText(/digite sua senha/i);
  expect(elemento).toBeInTheDocument();
  });

test(`Se o formulário só seja válido após um email 
válido e uma senha de mais de 6 caracteres forem preenchidos`, () => {
    renderWithRouterLogin(
        <RootProvider>
        <Login />
        </RootProvider>
        );
    const emailInput = screen.getByPlaceholderText(/digite seu email/i);
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    const button = screen.getByTestId('login-submit-btn');
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeDisabled();
    userEvent.type(emailInput, 'test@gmail.com');
    userEvent.type(passwordInput, '1234567');
    expect(button).toBeEnabled();
  });

test(`Se ao clicar no botão de login, o usuário é redirecionado para /foods`, () => {
   const { history } = renderWithRouterLogin(
        <RootProvider>
        <App />
        </RootProvider>
        );
  const button = screen.getByTestId('login-submit-btn');
  userEvent.click(button);
  history.push('/foods');
  expect(history.location.pathname).toBe('/foods');
  });
  
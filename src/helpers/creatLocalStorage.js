export const createLocalStorage = (key) => {
  if (!JSON.parse(localStorage.getItem(key))) {
    localStorage.setItem(key, JSON.stringify([]));
  }
};

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setLocalStorage = (key, payload) => localStorage.setItem(key, JSON
  .stringify(payload));

export const saveTokenToLocalStorage = (key, payload) => localStorage
  .setItem(key, payload);

export const getToken = () => {
  const data = localStorage.getItem('token');
  return data;
};

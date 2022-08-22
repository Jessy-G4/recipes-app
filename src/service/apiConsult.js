export default async function apiConsult(param) {
  const url = {
    meals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  };

  const data = await fetch(url[param]).then((response) => response.json());

  return data;
}

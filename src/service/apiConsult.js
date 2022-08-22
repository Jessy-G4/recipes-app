export default async function apiConsult(url) {
  const data = await fetch(url).then((response) => response.json());

  return data;
}

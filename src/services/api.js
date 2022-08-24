export default async function getApi(URL) {
  const request = await fetch(URL).then((res) => res.json());
  return request;
}

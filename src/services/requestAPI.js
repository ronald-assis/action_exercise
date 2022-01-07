const ENDPOINT = `https://rickandmortyapi.com/api/character`;

const fetchApi = () =>
  fetch(ENDPOINT).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

export default fetchApi;

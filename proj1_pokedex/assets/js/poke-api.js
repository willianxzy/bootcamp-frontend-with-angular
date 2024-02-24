const pokeApi = {}

pokeApi.getPokemons = (offset = 0 , limit = 10 ) => {           //Vamos colocar padrões para o offset e para o limit que assim que forem lidos, eles vão utilizar os valores padrões
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error))
    .finally(console.log('Requisição Finalizada!'))
}
const pokeApi = {}

pokeApi.getPokemons = (offset = 0 , limit = 10 ) => {           //Vamos colocar padrões para o offset e para o limit que assim que forem lidos, eles vão utilizar os valores padrões
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error))
    .finally(console.log('Name Request Completed!'))
}

Promise.all ([
    fetch ('https://pokeapi.co/api/v2/pokemon/1'),
    fetch ('https://pokeapi.co/api/v2/pokemon/2'),
    fetch ('https://pokeapi.co/api/v2/pokemon/3'),
    fetch ('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
    console.log(results)
})
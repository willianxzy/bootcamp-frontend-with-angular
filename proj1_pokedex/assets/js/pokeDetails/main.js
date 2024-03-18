const root = document.getElementById("root");

const loadPokemonProfile = () => {
  pokeApi.getPokemonProfile().then((pokemon) => {
    console.log("VAR:", pokemon.habitat);
    const weight = String(Number(pokemon.weight) / 10);
    const height = String(Number(pokemon.height).toFixed(1));
    function removerAcentos(texto) {
      return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    const about = pokemon.about
      .replace(/[^a-zA-ZáéíóúÁÉÍÓÚâêîôÂÊÎÔãõÃÕ. ]/g, " ")
      .replace(/[é]/g, "É");

    const pokemonProfile = `
            <div class="pokemon-profile ${pokemon.type}">
              <header>
              <a href="javascript:history.back()"
              > <i class="fa-solid fa-chevron-left" style="color: #000"></i
              ></a>
            <img class="logo" src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" alt="pokemon logo"/>
            <div class="buttonBack">
            <button onclick="history.back()" id="toGoBack" type="button">
                <----
            </button>
        </div>
            </header>
             <div class= "pokeNumber"> #${pokemon.number} </div>
             <h1 class="pokeName">${pokemon.name}</h1>
             <div class="pokeTypes"> ${pokemon.types} </div>
             <br><br><br>
             <img class="pokePhoto" src="${pokemon.image}" alt="${pokemon.name}'s appearance" />
             <h2 class="titleAbout">About</h2>
             <div class="pokeInformation"> 
             <div class="pokedescription"> <p>${about} </p> <div>
             <h2 class="titleWeight">Weight</h2>
             <p>${weight} kg </p>
             <h2 class="titleHeight">Height</h2>
             <p>${height} cm </p>
             <h2 class="titleShape">Shape</h2>
             <p>${pokemon.shape}</p>
             <h2 class="titleHabitat">Habitat</h2>
             <p>${pokemon.habitat}</p>
             </div>
            </div>
            </div>
        `;
    root.innerHTML += pokemonProfile;
  });
};

loadPokemonProfile();

document.getElementById("buttonBack").addEventListener("click", 
function (){
  history.back();
});
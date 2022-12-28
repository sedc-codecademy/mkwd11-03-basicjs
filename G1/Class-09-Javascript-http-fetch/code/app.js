const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Query Selectors
const appContainer = document.querySelector("#app");

// This function will make the HTTP call
// You MUST declare the function as async in order to use await
async function fetchPokemonData() {
  // Use await to unpack the promise created by fetch
  // await means wait for fetch() to return a result.
  const response = await fetch(BASE_URL);
  // data is the object we get from the backend
  // data is an object that as a property called results
  const data = await response.json();
  renderPokemonData(data.results);
}

// This function will draw the data from the API on the browser (in HTML)
function renderPokemonData(dataArray) {
  // We create a new list element
  const list = document.createElement("ul");

  // We add a class to the list
  list.classList.add("pokemon-list");

  // <ul class="pokemon-list"></ul>

  // We create a new <li> for EACH element in the pokemon array
  for (const pokemon of dataArray) {
    // console.log(pokemon);
    list.innerHTML += `
        <li class="pokemon-list__item" id=poke-${pokemon.name}>
        ${pokemon.name}
        </li>
        `;
  }
  appContainer.appendChild(list);

  const listItems = document.querySelectorAll(".pokemon-list__item");
  for (const item of listItems) {
    item.addEventListener("click", function (event) {
      const elementId = event.target.id;
      // poke-ivysaur <- this is what the ID looks like
      // .split() is the opposite of .join()
      // split divides the id at the - character
      // .split() results in an array
      const pokemonName = elementId.split("-")[1];
      console.log(pokemonName);
      fetchSinglePokemon(pokemonName);
    });
  }
}

async function fetchSinglePokemon(pokemonName) {
  const response = await fetch(`${BASE_URL}/${pokemonName}`);
  const result = await response.json();

  // Since we only want to display an image and the name, we will only send those two pieces of information
  // in a new function that will draw the pokemon information on the screen
  const name = result.species.name;
  const image = result.sprites.front_default;

  renderSinglePokemon(name, image);
}

function renderSinglePokemon(pokemonName, pokemonImage) {
  // We create a div and give it a class of pokemon-card
  let pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");

  // We setup the innerHTML of that div
  pokemonCard.innerHTML = `
  <img class="pokemon-card__img" src="${pokemonImage}" alt="${pokemonName}">
  <h2 class="pokemon-card__title">${pokemonName}</h2>
  `;

  appContainer.innerHTML = "";
  appContainer.appendChild(pokemonCard);
}

// Initialize the aplication
fetchPokemonData();

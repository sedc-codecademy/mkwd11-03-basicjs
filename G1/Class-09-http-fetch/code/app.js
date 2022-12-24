const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Query Selectors
const appContainer = document.querySelector("#app");

// This function will make the HTTP call
function fetchPokemonData() {
  fetch(BASE_URL)
    // .then() executes when the response is received from the BACKEND
    .then(function (response) {
      // Convert the response promise, to a more useable promise
      //   const jsonResponse = response.json();
      //   return jsonResponse;
      // This return will export the data from a promise to something readable.
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      // This .then() has access to the data from the API
      // results is a property of the data object from the API
      // results is an array
      renderPokemonData(data.results);
    });
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
    console.log(pokemon);
    list.innerHTML += `
        <li class="pokemon-list__item" id=poke-${pokemon.name}>
        ${pokemon.name}
        </li>
        `;
  }
  appContainer.appendChild(list);
}

// Initialize the aplication
fetchPokemonData();

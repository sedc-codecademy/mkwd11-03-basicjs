import card from "./src/card.js";

//go zemavme divot zakucan vo htmlot
const cardsContainer = document.getElementById('cardsContainer');

console.time('fetching done in')

//ovdeka go povikuvame starship objektot od server, pravime AJAX povik

fetch('https://swapi.dev/api/starships')
    .then((response) => {
        response.json()
            .then((serverData) => {
                for (let i = 0; i < serverData.results.length; i++) {
                    const data = serverData.results[i];
                    cardsContainer.innerHTML += card(data);
                }
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                console.timeEnd('fetching done in')
            })
    })


// fetch('https://swapi.dev/api/people')
//     .then((response) => {
//         response.json()
//             .then((serverData) => {
//                 //tuka vi e kodot sto treba da si go pishete za da rabotite so objektot //server data
//             })
//     })



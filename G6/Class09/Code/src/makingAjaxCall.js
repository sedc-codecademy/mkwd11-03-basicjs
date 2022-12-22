$(document).ready(function () {

    let myButton = $("#myButton");

    myButton.click(function () {

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function (result) {
                console.log("DID WE GET ANYTHING?", result);
            },
            error: function (error) {
                console.log("ERROR", error);
            }
        })
    })

    
    // Exercise 1 - Get StarWars Person

    function callStarWarsCharacter(number) {
        let result = $("#title");

        $.ajax({
            method: "GET",
            url: `https://swapi.dev/api/people/${number}`,
            success: function (data) {
                console.log(data);
                showInfo(data, result);
            }
        })
    }

    function showInfo(data, resultElement) {
        resultElement.after(`<p> My name is ${data.name}. I weigh ${data.mass}kg. I am ${data.height}cm tall.</p>`)
    }

    $("#btn").on("click", function () {
        callStarWarsCharacter(5);
    })


    // Exercise 2 - Get a pokemon

    function showName(name) {
        $("#pokemonName").text(`The name of the pokemon we got is ${name}.`);
    }

    function callPokemonApi(id) {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: function(pokemonResult) {
                console.log(pokemonResult);
                showName(pokemonResult.name)
            },
            error: function(err) {
                console.log("Error: ", err);
            }
        })
    }

    $("#getPokemonBtn").click(function(){
        callPokemonApi(3);
    })
})
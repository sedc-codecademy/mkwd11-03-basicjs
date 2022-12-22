let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicoe.com/posts/1")
    .then(response => {
        console.log(response);
        response.json() // returns Promise
            .then(data => {
                // data contains parsed json
                console.log(data);
                document.getElementById("myDiv").innerText = data.title;
            })
    })
    // .catch(function(error) {

    // })
    .catch(error => {
        console.log("I AM HERE", error);
    })
})
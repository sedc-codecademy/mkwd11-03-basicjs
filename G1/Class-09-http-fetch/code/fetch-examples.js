// fetch("https://jsonplaceholder.typicode.com/users");

// fetch() immediately creates and returns a promise
// const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(usersPromise);

// This PROMISE must be converted to readable data
// fetch("http://example.com/movies.json")
//   .then(function (response) {
//     response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  // .then() executes when the response is back from the SERVER
  .then(function (response) {
    // console.log(response);
    const jsonData = response.json();
    console.log(jsonData);
    console.log(jsonData.value);
    return jsonData;
  })
  .then((result) => {
    console.log("result", result);
  });
console.log("Checkpoint");

// Fetch() example #2
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
  });

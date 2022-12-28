// fetch("mvr/pasosh")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (passport) {
//     takePassportHome(passport);
//   });

// const firstPromise = fetch("mvr/pasosh");

// const secondPromise = firstPromise.then(function (response) {
//   return response.json();
// });

// secondPromise.then(function (result) {
//   takePassportHome(passport);
// });

// function takePassportHome(passportArgument) {
// // do stuff
// }

// addEventListener("click", function (event) {

// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     console.log("response", response);
//     const jsonResponse = response.json();
//     console.log("response.json()", jsonResponse);
//     // jsonResponse has a property called <value>
//     return jsonResponse;
//   })
//   .then(function (result) {
//     console.log("Actual results");
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// console.log("Hello");

// Async & Await
async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  const result = await response.json();
  console.log(result);
}

getAllUsers();

const dbJson = `{
  "users": [
    {
      "id": 1,
      "username": "ivanlazar",
      "email": "ivan@sedc.com"
    },
    {
      "id": 2,
      "username": "bojandam",
      "email": "bojan@sedc.com"
    }
  ]
}
`;

console.log(dbJson);
const studentObject = JSON.parse(dbJson);
console.log(studentObject);

const alertBtn = document.querySelector("#alert-btn");
alertBtn.addEventListener("click", function (event) {
  console.log(event);
});

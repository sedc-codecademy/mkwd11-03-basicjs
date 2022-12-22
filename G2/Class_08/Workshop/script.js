import getUsers from "./helperFunctons/getUsers.js";
//kako se odi do drug page
// window.location = './index.html'
// window.location = './registerPage/index.html'
// window.location = './userPage/index.html'
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const users = getUsers();
console.log(users);
loginButton.addEventListener('click', () => {
    console.log('login button is clicked');
    for (let user of users) {
        if (user.username == usernameInput.value
            && user.password == passwordInput.value) {
            alert(`Welcome ${user.username}}`)
            window.location = './userPage/index.html'
            break;
        }
    }
})
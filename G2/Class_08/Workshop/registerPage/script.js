

//kako se odi do drug page
// window.location = '../index.html'
// window.location = '../userPage/index.html'

import getUsers from "../helperFunctons/getUsers.js";
import setUser from "../helperFunctons/setUser.js";
import User from "../user.js";

const userRegister = document.getElementById('userRegister');
const userPassword = document.getElementById('userPassword');
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () => {
    const usernameFromInput = userRegister.value;
    const userPasswordFromInput = userPassword.value;
    if (usernameFromInput.length < 6
        || userPasswordFromInput.length < 6) {
        alert('Username and password must be more than 6 characters long')
        return;
    }
    const korisnik = new User(usernameFromInput, userPasswordFromInput);
    setUser(korisnik);

    console.log(getUsers())
})
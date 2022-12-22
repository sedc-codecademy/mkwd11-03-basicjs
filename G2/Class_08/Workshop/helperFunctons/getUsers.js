/**
 * @author Ivan Jamandilovski
 * @date 22.12.2022
 */

import setUsers from "./setUsers.js";


/**
 ** Returns the users saved on server 
 * @returns {Array<Object>}
 */
function getUsers() {
    const users = JSON.parse(localStorage.getItem('users'));
    //setup default user if none exists in the array i.e. array of users is undefined
    if(users == undefined){
        setUsers([
            {
                username: 'SEDC',
                password: '123456'
            }
        ])
    }
    return users;
}

export default getUsers;


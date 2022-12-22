
/**
 * @author Ivan Jamandilovski
 * @date 22.12.2022
 */

/**
 * @param {Array<Object>} arrayOfUsers array with users to save to server again 
 * @returns {boolean}
 */

function setUsers(arrayOfUsers) {
    if (arrayOfUsers.length == undefined) return false;
    if (typeof arrayOfUsers[0] != 'object') return false;

    localStorage.setItem('users', JSON.stringify(arrayOfUsers));
    console.log('User successfuly added', arrayOfUsers);
    return true;
}

export default setUsers;



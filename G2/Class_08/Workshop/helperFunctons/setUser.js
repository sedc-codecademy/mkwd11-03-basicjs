
/**
 * @author Ivan Jamandilovski
 * @date 22.12.2022
 */

import User from "../user";
import getUsers from "./getUsers";
import setUsers from "./setUsers";

/**
 * @param {User} user user to save to server 
 * @returns {boolean}
 */
function setUser(user) {
    if (!(user instanceof User)) {
        return false;
    }
    const users = getUsers();
    users.push(user);
    setUsers(users);
    return true;
}

export default setUser;



import { User } from "./User.js";

function createUser(name, surname, username, password, bornDate, gender, email) {
    
    const numUser = (localStorage.length == 0) ? 0 : parseInt(localStorage.key(0)) + 1;
    const user = new User({name, surname, username, password, bornDate, gender, email});

    localStorage.setItem(numUser.toString(), JSON.stringify(user));
}

function deleteUser(username) {

    let i = 0;
    let deleted = false;

    do {
        let id = localStorage.key(i);
        if (JSON.parse(localStorage.getItem(id)).username == username) {
            deleted = true;
            localStorage.removeItem(id);
        }
    } while ((!deleted) && (++i < localStorage.length));
}

function viewUser(id) {

    const userData = JSON.parse(localStorage.getItem(id));
    return { ...userData };
}

export { createUser, deleteUser, viewUser };
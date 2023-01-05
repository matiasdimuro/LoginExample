import { User } from "./User.js";

function createUser(name, surname, username, password, bornDate, gender, email) {
    
    const numUser = localStorage.length;
    const user = new User({name, surname, username, password, bornDate, gender, email});

    localStorage.setItem(numUser.toString(), JSON.stringify(user));
}

function deleteUser(username) {

    const users = Object.values(localStorage);
    const user = users.filter((user) => JSON.parse(user).username == username)[0];  // Asumming there are not 
                                                                                    // users with the same username.
    const id = users.indexOf(user);
    localStorage.removeItem(id);
}

function viewUser() {

}

export { createUser, deleteUser, viewUser };
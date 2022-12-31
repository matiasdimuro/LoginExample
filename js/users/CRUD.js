import { User } from "./User";

function createUser(name, surname, username, password, bornDate, gender, email) {
    
    const numUser = localStorage.length;
    const user = new User({name, surname, username, password, bornDate, gender, email});

    localStorage.setItem(numUser.toString(), JSON.stringify(user));
}

function deleteUser() {

}

function viewUser() {
}

export { createUser, deleteUser, viewUser };
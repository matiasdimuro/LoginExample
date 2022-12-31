export class User {

    name;
    surname;
    username;
    password;
    bornDate;
    gender;
    email;

    constructor({name = "", surname = "", username, password, bornDate = "", gender = "", email = ""}) {
        this.name = name;
        this.surname = surname;
        this.username = "" + username;
        this.password = "" + password;
        this.bornDate = bornDate;
        this.gender = gender;
        this.email = email;
    }

    // getName() { return this.name; }
    // getSurname() { return this.surname; }
    // getUsername() { return this.username; }
    // getPassword() { return this.password; }
    // getBornDate() { return this.bornDate; }
    // getGender() { return this.gender; }
    // getEmail() { return this.email; }
}
import { createUser, deleteUser as deleteUserFromDB } from "../users/CRUD.js";
import { setValid, setError, resetFieldsState } from "./inputStateManagement.js"

function validateSignInModal() {

    const name = document.getElementById('name-input');
    const surname = document.getElementById('surname-input');
    const username = document.getElementById('username-input');
    const password = document.getElementById('password-input');
    const bornDate = document.getElementById('born-input');
    const gender = document.getElementById('gender-select');
    const email = document.getElementById('email-input');

    let valid = true;
    const nameMinLength = 5, surnameMinLength = 5, usernameMinLength = 5, passwordMinLength = 10;

    if (name.value.length < nameMinLength) {
        setError(name, "It must to be " + nameMinLength + " characters length minimum.");
        valid = false;
    }
    else setValid(name);

    if (surname.value.length < surnameMinLength) {
        setError(surname, "It must to be " + surnameMinLength + " characters length minimum.");
        valid = false;
    }
    else setValid(surname);

    if (username.value == "") {
        setError(username, "Input a not empty username");
        valid = false;
    }
    else if (username.value.length < usernameMinLength) {
        setError(username, "It must to be " + usernameMinLength + " characters length minimum.");
        valid = false;
    }
    else setValid(username);

    if (password.value == "") {
        setError(password, "Input a not empty password");
        valid = false;
    }
    else if (password.value.length < passwordMinLength) {
        setError(password, "It must to be " + passwordMinLength + " characters length minimum.");
        valid = false;
    }
    else setValid(password);

    if (email.value == "") {
        setError(email, "Input a not empty email");
        valid = false;
    }
    else if (!validateEmail(email.value)) {
        setError(email, "It is not a valid email.");
        valid = false;
    }
    else setValid(email);

    if (!validateDate(bornDate.value)) {
        setError(bornDate, "It is not a valid date.");
        valid = false;
    }
    else setValid(bornDate);

    if (!validateSelectField(gender.value)) {
        setError(gender, "The value is not a valid option.");
        valid = false;
    }
    else setValid(gender);


    const data = [];
    
    const inputsFields = document.querySelectorAll('input[name="signin-modal"]');
    const selectFields = document.querySelectorAll('select[name="signin-modal"]');

    inputsFields.forEach(input => {
        data.push(input.value.trim())
    })

    selectFields.forEach(select => {
        data.push(select.value)
    })

    if (valid) {
        createUser(...data);
        resetFieldsState([name, surname, username, password, bornDate, gender, email]);
    }

    return valid;
}



function signUp(username, password) {
    
    /*
     * It works by this way becauce what I only want to know if user exists or does not exist.
     */

    const users = Object.values(localStorage);
    const exists = users.some((user) => (JSON.parse(user).username == username.value) && (JSON.parse(user).password == password.value));

    const signUpStateTag = document.getElementById('signup-state');
    signUpStateTag.classList.remove("visually-hidden");
    
    if (exists) {
        signUpStateTag.classList.remove("text-danger");
        signUpStateTag.classList.add("text-success");
        signUpStateTag.textContent = "You have signed up!";
        setValid(username);
        setValid(password);
    }
    else {
        signUpStateTag.classList.add("text-danger");
        signUpStateTag.classList.remove("text-success");
        signUpStateTag.textContent = "User is not registered. Try again.";
        setError(username);
        setError(password);
    }

    return exists;
}


function deleteUser(username, password) {
    
    const users = Object.values(localStorage);
    const exists = users.some((user) => (JSON.parse(user).username == username.value) && (JSON.parse(user).password == password.value));

    const signUpStateTag = document.getElementById('delete-state');
    signUpStateTag.classList.remove("visually-hidden");
    
    if (exists) {
        signUpStateTag.classList.remove("text-danger");
        signUpStateTag.classList.add("text-success");
        signUpStateTag.textContent = "User has been deleted!";
        setValid(username);
        setValid(password);
        deleteUserFromDB(username.value);
    }
    else {
        signUpStateTag.classList.add("text-danger");
        signUpStateTag.classList.remove("text-success");
        signUpStateTag.textContent = "User is not registered. Try again.";
        setError(username);
        setError(password);
    }
}



function validateEmail(email) {

    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (emailRegExp.test(email)) ? true : false;
}

function validateDate(date) {

    const dateRegExp = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;   // yyyy -/ mm -/ dd
    return ((date != "") || (dateRegExp.test(date))) ? true : false;
}

function validateSelectField(select) {

    const selectOptions = ["male", "female", "other", "confidential"];
    return ((select.value != "") && (!selectOptions.includes(select))) ? false : true;
}

export { validateSignInModal, signUp, deleteUser }
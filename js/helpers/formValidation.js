import { resetInputFields } from "./toggleModal.js";
import { createUser } from "../users/CRUD.js";

function validateSignInModal() {

    // const name = document.getElementById('name-input');
    // const surname = document.getElementById('surname-input');
    const username = document.getElementById('username-input');
    const password = document.getElementById('password-input');
    const bornDate = document.getElementById('born-input');
    const gender = document.getElementById('gender-select');
    const email = document.getElementById('email-input');

    const inputsFields = document.querySelectorAll('input[name="signin-modal"]');
    const selectFields = document.querySelectorAll('select[name="signin-modal"]')

    const modalId = "signInModal";
    inputsFields.forEach(input => input.value = input.value.trim());


    if (username.value.size == 0) {
        
    }

    if (password.value.size == 0) {
        
    }

    if (email.value.size == 0) {
        
    }

    if (!validateDate(bornDate.value)) {
        
    }

    if (!validateEmail(email.value)) {
        
    }

    if (!validateSelectField(gender.value)) {
        
    }

    if (!validateMinlength(username)) {
        
    }

    if (!validateMinlength(password)) {
        
    }
    
    /*
    if ((username.value.size == 0) || (password.value.size == 0) || (email.value.size == 0)) {
        
        console.log("A field is empty!");
        return false;
    }   
    
    if (!validateDate(bornDate.value) || !validateEmail(email.value) || !validateSelectField(gender.value)) {
        
        console.log("Date, Email or Date is wrong");
        return false
    }

    if (!validateMinlength(username) || !validateMinlength(password)) {

        console.log("A field has not the minium length")
        return false
    }*/

    const data = [];

    inputsFields.forEach(input => {
        data.push(input.value)
    })

    selectFields.forEach(select => {
        data.push(select.value)
    })

    createUser(...data);
    resetInputFields(modalId);
}





function validateMinlength(inputfield) {

    let valid = true;

    if (inputfield.hasAttribute('minlength')) {

        const minlength = Number.parseInt(inputfield.getAttribute('minlength'));

        if (inputfield.value.length < minlength) {
            valid = false;
        }
    }

    return valid;
}

function validateEmail(inputfield) {

    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'/;
    return (emailRegExp.test(inputfield.value)) ? true : false;
}

function validateDate(inputfield) {

    const dateRegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return (dateRegExp.test(inputfield.value)) ? true : false;
}

function validateSelectField(select) {

    let valid = true;
    const selectOptions = ["Male", "Female", "Other", "Confidential"];

    return ((select.value == "") || (!selectOptions.includes(select.value))) ? false : true;
}

export { validateSignInModal}
import { updateDateHour } from "./helpers/getDate.js";
import { toggleModalButtons, closeModalButtons,  manageModalState, manageCloseOfModal } from "./helpers/toggleModal.js";
import { validateSignInModal, signUp, deleteUser } from "./helpers/formValidation.js";
import { resetInputFields } from "./helpers/inputStateManagement.js";
import { viewUser } from "./users/CRUD.js";

const toggleThemeButton = document.getElementById('toggle-theme');
const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

!lightMode && toggleThemeButton.click();




document.addEventListener("DOMContentLoaded", () => {
    updateDateHour();
    setInterval(updateDateHour, 1000);
})

toggleModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        manageModalState(e.target.id)
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        manageCloseOfModal(e.target.id);
    })
})




const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    let maxlength = null;
    if (input.hasAttribute('maxlength')) {
        maxlength = Number.parseInt(input.getAttribute('maxlength'));
    }

    input.addEventListener('input', (e) => {
        if ((maxlength != null) && (input.value.length > maxlength)) {
            const oldValue = input.value;
            input.value = oldValue.slice(0, oldValue.length - 1);
        }
    });
})




const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateSignInModal()) {
        setTimeout(() => resetInputFields("signInModal"), 1200);
        alert("User has been created.")
    };
});

signInForm.addEventListener('reset', (e) => {
    e.preventDefault();
    resetInputFields("signInModal");
})


const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const surname = document.getElementById("username-signup-input");
    const password = document.getElementById("password-signup-input");
    
    signUp(surname, password);
});

signUpForm.addEventListener('reset', (e) => {
    e.preventDefault();
    resetInputFields("signUpModal");
})


const deleteForm = document.getElementById('deleteForm');

deleteForm.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const surname = document.getElementById("username-delete-input");
    const password = document.getElementById("password-delete-input");
    
    deleteUser(surname, password);
});

deleteForm.addEventListener('reset', (e) => {
    e.preventDefault();
    resetInputFields("deleteUserModal");
})



const viewUsersButton = document.getElementById('viewUsersButton');
const tableBody = document.getElementById('users-table_body');

viewUsersButton.addEventListener('click', (e) => {

    const table = document.getElementById('table');

    if (localStorage.length > 0) {

        tableBody.innerHTML = ``;
        table.classList.remove('d-none');
        table.nextElementSibling.classList.add('d-none');

        for (let i = 0; i < localStorage.length; i++) {
            const id = localStorage.key(i);
            const user = viewUser(id);
            const row = `
                <tr>
                    <th scope="row">${id}</th>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                    <td>${user.bornDate}</td>
                </tr>`;
            tableBody.innerHTML += row;
        }
    }

    else {
        table.classList.add('d-none');
        table.nextElementSibling.classList.remove('d-none');
        table.nextElementSibling.innerHTML = `
            <p class="h3 m-2 text-centerfw-bold">There are not users created.</p>
        `
    }
})
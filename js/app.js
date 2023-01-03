import { updateDateHour } from "./helpers/getDate.js";
import { toggleModalButtons, closeModalButtons,  manageModalState, manageCloseOfModal } from "./helpers/toggleModal.js";
import { validateSignInModal } from "./helpers/formValidation.js";
import { resetInputFields } from "./helpers/inputStateManagement.js";

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
        resetInputFields("signInModal");
        alert("User has been created.")
    };
});

signInForm.addEventListener('reset', (e) => {
    e.preventDefault();
    resetInputFields("signInModal");
})
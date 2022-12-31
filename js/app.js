import { updateDateHour } from "./helpers/getDate.js";
import { toggleModalButtons, closeModalButtons,  manageModalState, resetInputFields, manageCloseOfModal } from "./helpers/toggleModal.js";

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
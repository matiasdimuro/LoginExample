const toggleModalButtons = document.querySelectorAll('.modal-toggle');
const closeModalButtons = document.querySelectorAll('.btn-close');
const modals = document.querySelectorAll('.modal-box');

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

function manageModalState(buttonId) {

    let modalId = "";

    switch (buttonId) {
        case "signInButton":
            modalId = "signInModal";
            break;
    
        case "signUpButton":
            modalId = "signUpModal";
            break;

        case "viewUsersButton":
            modalId = "viewUsersModal";
            break;

        case "deleteUserButton":
            modalId = "deleteUserModal";
            break;

        default:
            break;
    }

    (modalId != "") && document.getElementById(modalId).showModal();
}

function manageCloseOfModal(closeButtonId) {

    let modalId = "";

    switch (closeButtonId) {
        case "signInCloseButton":
            modalId = "signInModal";
            break;

        case "signUpCloseButton":
            modalId = "signUpModal";
            break;

        case "viewUsersCloseButton":
            modalId = "viewUsersModal";
            break;

        case "deleteUserCloseButton":
            modalId = "deleteUserModal"
            break;

        default:
            break;
    }

    (modalId !== "") && document.getElementById(modalId).close();
    resetInputFields(modalId);
}

function resetInputFields(modalId) {
     
    const modalNodes = Object.values(modals);

    const modal = modalNodes.filter(button => button.id === modalId);

    console.log(modal);
    console.log(modal.childNodes);
}
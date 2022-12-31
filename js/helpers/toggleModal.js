const toggleModalButtons = document.querySelectorAll('.modal-toggle');
const closeModalButtons = document.querySelectorAll('.btn-close');

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
     
    let inputFields = null, selectFields = null;

    switch (modalId) {
        case "signInModal":
            inputFields = document.querySelectorAll('input[name="signin-modal"]');
            selectFields = document.querySelectorAll('select[name="signin-modal"]');
            break;

        case "signUpModal":
            inputFields = document.querySelectorAll('input[name="signup-modal"]');
            selectFields = document.querySelectorAll('select[name="signup-modal"]');
            break;
    
        default:
            break;
    }

    if (inputFields !== null && inputFields.length > 0) {
        Object.values(inputFields).forEach(field => {
            field.value = "";
        })
    }

    if (selectFields !== null && selectFields.length > 0) {
        Object.values(selectFields).forEach(field => {
            field.value = "Click to see the options";
        })
    }
}

export { toggleModalButtons, closeModalButtons, manageModalState, manageCloseOfModal, resetInputFields }
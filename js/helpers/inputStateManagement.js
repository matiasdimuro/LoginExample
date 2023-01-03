const setError = (field, message) => {

    const span = field.nextElementSibling;

    field.classList.add("border-danger");
    field.classList.remove("border-success");
    span.classList.remove("visually-hidden");
    span.textContent = message;
}

const setValid = (field) => {

    const span = field.nextElementSibling;

    field.classList.remove("border-danger");
    field.classList.add("border-success");
    span.classList.add("visually-hidden");
}


const resetFieldsState = (obj) => {

    obj.forEach(field => {
        field.classList.remove("border-danger");
        field.classList.remove("border-success");
        field.nextElementSibling.classList.add("visually-hidden");
    })
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
        resetFieldsState(Object.values(inputFields));
        Object.values(inputFields).forEach(field => {
            field.value = "";
        })
    }

    if (selectFields !== null && selectFields.length > 0) {
        resetFieldsState(Object.values(selectFields));
        Object.values(selectFields).forEach(field => {
            field.value = "Click to see the options";
        })
    }
}

export { resetFieldsState, resetInputFields, setError, setValid }
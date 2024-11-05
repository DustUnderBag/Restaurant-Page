export { loadReservation };

function loadReservation() {
    const content = document.querySelector('#content');
    const form = createContactForm();

    content.appendChild(form);

    const fullName = document.createElement('div');
    fullName.classList.add('full-name');
    form.appendChild(fullName);
    fullName.appendChild(createInput('First Name', 'fName', 'text' ,true));
    fullName.appendChild(createInput('Last Name', 'lName', 'text', true));
    
    form.appendChild(createInput('Email Address', 'email', 'email', true ));
    form.appendChild(createInput('Phone Number', 'phone', 'tel', false));

    form.appendChild(createGuestDropdown(8));
    form.appendChild(createNote());
    form.appendChild(createSubmitBtn());
}

function createContactForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'reservation-form');
    form.setAttribute('action', 'post');
    form.classList.add('section');

    const formTitle = document.createElement('h2');
    formTitle.textContent = "Reserve a table";
    form.appendChild(formTitle);
    
    const subTitle = document.createElement('h3');
    subTitle.textContent = "Please fill in your contact info and needs.";
    form.appendChild(subTitle);

    return form;
}

function createInput(inputName, id, inputType, required = false) {
    const formRow = document.createElement('div');
    formRow.classList.add('form-row');

    const label = document.createElement('label');
    label.textContent = inputName;
    if(required) label.textContent += "*";
    label.setAttribute('for', id);

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', id);
    input.setAttribute('name', id);
    input.required = required;

    formRow.append(label);
    formRow.append(input);

    return formRow;
}

function createGuestDropdown(maxNumber) {
    const formRow = document.createElement('div');
    formRow.classList.add('form-row');

    const id = "guest-number";

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = "Number of guests";
    formRow.appendChild(label);

    const dropdown = document.createElement('select');
    dropdown.setAttribute('id', id);
    dropdown.setAttribute('name', id);
    formRow.appendChild(dropdown);

    //create options
    for(let i = 1; i <= maxNumber; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', 'i');
        option.textContent = i;        
        dropdown.appendChild(option);
    }

    return formRow;
}

function createNote() {
    let id = "note";
    const formRow = document.createElement('div');
    formRow.classList.add('form-row');

    const label = document.createElement('label');
    label.textContent = "Note";
    label.setAttribute('for', id);

    const input = document.createElement('textarea');
    input.setAttribute('id', id);
    input.setAttribute('name', id);
    input.setAttribute('rows', '4');
    
    formRow.appendChild(label);
    formRow.appendChild(input);

    return formRow;
}

function createSubmitBtn() {
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute('type', 'submit');
    submitBtn.addEventListener('click', e => e.preventDefault());
    submitBtn.setAttribute('id', 'submit');

    return submitBtn;
}
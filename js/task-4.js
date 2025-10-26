const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();
    const emailName = form.elements.email.name;
    const passwordName = form.elements.password.name;
    
    
    if (emailValue === '' || passwordValue === '') {
        return alert('All form fields must be filled in')
    };

    const user = {
        [emailName]: emailValue,
        [passwordName]: passwordValue,
    }
    console.log(user);
    form.reset();
}

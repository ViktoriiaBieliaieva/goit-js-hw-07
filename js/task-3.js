const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    if (trimmedValue === '') { outputEl.textContent = "Anonymous" }
    else { outputEl.textContent = trimmedValue };
});


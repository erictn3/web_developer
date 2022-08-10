const input = document.querySelector('input');

const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    const addName = input.value;

    if (input.value === '') {
        h1.innerText = 'Enter Your Username'
    }
    h1.innerText = `Welcome, ${addName}`;
})
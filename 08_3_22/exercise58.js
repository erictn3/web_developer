for (let i = 0; i < 100; i++) {
    let button = document.createElement('button');
    button.innerText = 'Hey!';
    let div = document.getElementById('container');
    div.appendChild(button);
}
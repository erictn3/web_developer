const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('you clicked me')
    console.log('i hope it worked')
}

function scream() {
    console.log('aahhhhhhhhh')

}

btn.onmouseenter = scream;
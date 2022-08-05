const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('you clicked me')
    console.log('i hope it worked')
}

function scream() {
    console.log('aahhhhhhhhh')

}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function () {
    alert('clicked');

})

function twist() {
    console.log('TWIST')
}

function twist() {
    console.log('SHOUT')
}

const tasButton = document.querySelector('tas');

tasButton.onclick = twist;
tasButton.onclick = shout;

tasButton.addEventListener('click', twist)

tasButton.addEventListener('click', shout)


